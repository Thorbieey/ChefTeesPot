"use client";
import axios from "axios";
import React from "react";
import { toast } from "sonner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'

const ContactUsSection = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [message, setMessage] = React.useState("");

  const submitForm = async () => {
    try {
      const url = `https://docs.google.com/forms/d/e/1FAIpQLSdok6QtzcfR99765dijrGH9rBhqc1aWLOlAUdz-fFDgEldKfg/formResponse?&submit=Submit?usp=pp_url&entry.2005620554=${firstName}&entry.1148638692=${lastName}&entry.1045781291=${email}&entry.1166974658=${phoneNo}&entry.839337160=${message}`
      const resp = await axios.get(url)
      console.log(resp) 
      toast.success("Message Sent Successfully")
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }
  
  return (
    <section
      id="contact-us"
      style={{ fontFamily: "var(--font-noto-sans)" }}
      className="w-full text-black  md:px-20 px-4 py-10 md:py-16 pb-20 flex flex-col  relative bg-stone-300"
    >
      <h3 className="font-semibold text-3xl md:text-5xl text-center mb-4 md:mb-8">{"Let's Talk"}</h3>
      <div className="flex flex-col gap-14 md:gap-4 md:flex-row w-full">
        <div className="flex-1 my-auto text-center items-center">
          <p className="text-lg">
            Got questions or need help? Reach out to us — we’d love to hear from
            you!
          </p>
          <div className="flex flex-col gap-1 mt-4 items-center">
            <h4 className="font-semibold text-lg text-black">Email</h4>
            <a href="mailto:chefteespot@gmail.com">
              <span className="underline underline-offset-4">
                chefteespot@gmail.com
              </span>
            </a>
            <a href="mailto:chefteespot01@gmail.com">
              <span className="underline underline-offset-4">
                chefteespot01@gmail.com
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-2 mt-4 ">
            <h4 className="font-semibold text-lg text-black">Phone Number</h4>
            <a href="tel:09035787869">
              <span className="underline underline-offset-4">
                09035787869
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <h4 className="font-semibold text-lg text-black">Connect with us </h4>
            <div className="flex justify-center items-center gap-4 w-full">
              <div className="">
                <a href="https://www.instagram.com/chef_tees_pot/profilecard/?igsh=Y3NtdzI4cDV0aTUx" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="lg"/>
                </a>
              </div>
              <div className="">
                <a href="https://wa.me/23409035787869" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                </a>
              </div>
              <div className="">
                <a href="https://wa.me/23409035787869" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 p-6 overflow-hidden border border-black/80 rounded-lg">
          <div className=" inset-0 z-10 bg-black/90 absolute" />
          <div className="z-50 relative">
            <div className="space-y-1 my-2">
              <h3 className="font-semibold text-xl md:text-2xl text-center text-stone-300">Get in Touch</h3>
            </div>
            <form className="flex w-full flex-col gap-4" onSubmit={(e) => {e.preventDefault(); submitForm()}}>
              <div className="flex flex-col sm:flex-row gap-4">
                <input className="w-full p-3 rounded bg-white/10" type="text" placeholder="First name" required value={firstName} onChange={(e) => setFirstName(e.target.value)}  />
                <input className="w-full p-3 rounded bg-white/10" type="text" placeholder="Last name" required value={lastName} onChange={(e) => setLastName(e.target.value)}  />
              </div>
              <div>
                <input className="w-full p-3 rounded bg-white/10" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}  />
              </div>
              <div>
                <input className="w-full p-3 rounded bg-white/10" type="tel" placeholder="Phone number" required value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}  />
              </div>
              <div>
                <textarea className="w-full p-3 rounded bg-white/10" placeholder="Message" required value={message} onChange={(e) => setMessage(e.target.value)}  />
              </div>
              <div className="flex justify-center">
                <button className="bg-stone-500 hover:bg-red-700 text-white py-2 px-4 rounded" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
