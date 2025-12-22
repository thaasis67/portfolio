import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!form.current) return;
       


        emailjs
          .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            
          )
          .then(
            () => {
                alert("Message sent successfully");
                form.current?.reset();
            },
        (error) => {
                    console.error("Emailjs error",error);
                    alert(JSON.stringify(error, null, 2));

            }
          );
    };

    return (
        <section className="min-h-screen bg-primary px-8 py-20 flex items-center">
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-16">

        {/* Left */}
        <div>
          <h1 className="text-4xl font-bold mb-6 custom-title">
            Contact Me
          </h1>
          <p className="text-gray-300">
            Send me a message and I’ll get back to you.
          </p>
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-dark-100 rounded-2xl p-8 space-y-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded bg-dark-200 text-white"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded bg-dark-200 text-white"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full px-4 py-3 rounded bg-dark-200 text-white"
          />

          <button
            type="submit"
            className="w-full py-3 bg-accent rounded text-white font-semibold"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
    );
};
export default Contact;