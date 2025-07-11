import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { GoHomeFill } from "react-icons/go";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaArrowCircleDown,
  FaStar,
  FaPhone,
  FaBitbucket
} from "react-icons/fa";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.user_email.value;

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        "service_4n2a63r", // Replace with your actual Service ID
        "template_1or77pt", // Replace with your actual Template ID
        form.current,
        "nLlCfkaUFg0sNeBt5" // Replace with your actual Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <div className="mx-auto mt-12 p-8 flex flex-row gap-56">
      <div className="flex flex-col space-y-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4 w-96"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            className="p-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-300"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="p-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-300"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            className="p-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-300"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg"
          >
            Send
          </button>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            theme="dark"
          />
        </form>
      </div>
      <div className="flex flex-col justify-center gap-y-12">
        <h3 className="text-2xl font-bold">
          <FaPhone className="inline mr-12" />
          +63 991 772 9314
        </h3>
        <h3 className="text-2xl font-bold">
          <FontAwesomeIcon icon={faMessage} className="inline mr-12" />
          lacar.johngabriel1@gmail.com
        </h3>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold">
            <GoHomeFill className="inline mr-12 text-3xl" />
            Zone 2 Maken Street, Barra, Opol
          </h3>
          <p className="text-base font-thin -mt-2 justify-center items-center ml-12">
            Misamis Oriental, Philippines
          </p>
        </div>
        <hr className="w-full border-t border-gray-300 -mt-6" />

        <div className="flex gap-6 -mt-8 justify-center">
            <a
              href="https://www.facebook.com/gabriel0794"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-4xl text-white drop-shadow hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://www.instagram.com/j.lacar/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-4xl text-white drop-shadow hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://github.com/gabriel0794" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-4xl text-white drop-shadow hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="mailto:lacar.johngabriel1@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaGoogle className="text-4xl text-white drop-shadow hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

        <p className="font-thin flex justify-center items-center -mt-10">Glad to work with you :)</p>
      </div>
    </div>
  );
}
