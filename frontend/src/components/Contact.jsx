import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white/20 rounded text-white p-10 border border-white/20"
    >
      <div className="mx-auto text-center">
        <h1 className="mb-3 text-4xl">Get In Touch</h1>
        <p>
          Have a project in mind or just want to say hello? Feel free to reach
          out.
        </p>
        <div className="my-10 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-cyan-400 text-3xl" />
            <p className="text-lg">ghemrawiomar@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-cyan-400 text-3xl" />
            <p className="text-lg">+961 71 03 66 96</p>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-cyan-400 text-3xl" />
            <p className="text-lg">Tripoli, Lebanon</p>
          </div>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
