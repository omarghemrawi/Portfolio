import { useState, useRef, useCallback } from "react";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const validateEmail = useCallback((email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  }, [formData, validateEmail]);

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const formErrors = validateForm();
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
      }

      setIsSubmitting(true);
      setSubmitStatus("");

      try {
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmitStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        setSubmitStatus("Failed to send message. Please try again.");
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validateForm]
  );

  return (
    <div
      ref={form}
      className="border border-white/20 flex flex-col gap-4 p-6 rounded-xl bg-white/5"
    >
      <div>
        <input
          className="w-full border border-white/20 py-3 px-4 rounded-xl outline-none bg-white/10 text-white placeholder-gray-300 focus:border-cyan-400 transition-colors"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <span id="name-error" className="text-red-400 text-sm mt-1 block">
            {errors.name}
          </span>
        )}
      </div>

      <div>
        <input
          className="w-full border border-white/20 py-3 px-4 rounded-xl outline-none bg-white/10 text-white placeholder-gray-300 focus:border-cyan-400 transition-colors"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <span id="email-error" className="text-red-400 text-sm mt-1 block">
            {errors.email}
          </span>
        )}
      </div>

      <div>
        <textarea
          name="message"
          className="w-full border border-white/20 py-3 px-4 min-h-32 max-h-48 rounded-xl outline-none bg-white/10 text-white placeholder-gray-300 focus:border-cyan-400 transition-colors resize-y"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <span id="message-error" className="text-red-400 text-sm mt-1 block">
            {errors.message}
          </span>
        )}
      </div>

      <div
        type="submit"
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="border border-white bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed w-fit mx-auto px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 text-white font-medium"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </div>

      {submitStatus && (
        <div
          className={`text-center text-sm ${
            submitStatus.includes("success") ? "text-green-400" : "text-red-400"
          }`}
        >
          {submitStatus}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
