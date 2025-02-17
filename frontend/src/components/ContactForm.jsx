import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";
import { toast } from "react-toastify";
const ContactForm = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState("");

  const validateEmail = (email) => {
    return validator.isEmail(email);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailStatus("Enter a Valid Email");
      return;
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success(result.text + " , Send Successfuly");
          form.current.reset();
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        action=""
        className="border border-white/20 flex flex-col gap-4 p-5 rounded-xl"
      >
        <input
          className="border border-white/20 py-2 px-4 rounded-xl outline-none"
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />
        <input
          className="border border-white/20  py-2 px-4 rounded-xl outline-none"
          type="text"
          name="user_email"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {validateEmail(email) ? (
          ""
        ) : (
          <span className="bg-white/30 text-red-600 italic w-fit px-5 text-sm text-center rounded">
            {emailStatus}
          </span>
        )}
        <textarea
          name="message"
          className="border border-white/20 py-2 px-4 min-h-20 max-h-50 rounded-xl outline-none"
          placeholder="Your Message"
          required
        ></textarea>
        <button
          type="submit"
          className="border border-white w-fit m-auto px-5 py-2 rounded-xl cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
