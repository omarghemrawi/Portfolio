import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => (
  <section
    id="contact"
    className="bg-white/20 rounded-lg text-white p-8 border border-white/20"
  >
    <div className="text-center mb-10">
      <h2 className="mb-4 text-3xl font-bold">Get In Touch</h2>
      <p className="text-gray-200 leading-relaxed">
        Have a project in mind or want to discuss opportunities? I had love to
        hear from you.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mb-10">
      <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/15 transition-colors">
        <Mail className="text-cyan-400 text-3xl mb-3" />
        <p className="text-lg font-medium">Email</p>
        <a
          href="mailto:ghemrawiomar@gmail.com"
          className="text-gray-300 hover:text-white transition-colors"
        >
          ghemrawiomar@gmail.com
        </a>
      </div>
      <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/15 transition-colors">
        <Phone className="text-cyan-400 text-3xl mb-3" />
        <p className="text-lg font-medium">Phone</p>
        <a
          href="tel:+96171036696"
          className="text-gray-300 hover:text-white transition-colors"
        >
          +961 71 03 66 96
        </a>
      </div>
      <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/15 transition-colors">
        <MapPin className="text-cyan-400 text-3xl mb-3" />
        <p className="text-lg font-medium">Location</p>
        <p className="text-gray-300">Tripoli, Lebanon</p>
      </div>
    </div>

    <ContactForm />
  </section>
);
export default Contact;
