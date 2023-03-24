import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import { FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaGithub, } from "react-icons/fa";

const Contactpage = () => {
  return (
    <div
      id="contact"
      className=" w-full h-auto mb-52 bg-slate-300 dark:bg-gray-700"
    >
      <div className="flex justify-around items-center mx-10 md:flex-row flex-col">
        {/* textual content */}
        <div className="md:w-1/2 w-full md:p-10 my-10 md:my-0  flex-col">
          <h1 className="text-4xl font-bold text-sky-600 ">CONTACT US</h1>
          <p className="font-semibold text-sm my-5 text-">
            {" "}
            Greetings of Peace! Fill out the form and our team will get back to
            you. Thank you!
          </p>
          <div className="flex-col my-20 gap-5 flex  ">
            <div className="flex gap-5 p-4 border border-gray-500  hover:border-sky-600  dark:border-black  md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
              <BsTelephoneFill className="text-xl text-gray-500 group-hover:border-sky-600" />
              <p className="text-gray-500 dark:text-white text-base font-semibold group-hover:border-sky-600">
                +639-0123456789
              </p>
            </div>
            <div className="flex gap-5 p-4 border border-gray-500 dark:border-black hover:border-blue-700 md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
              <GrMail className="text-xl text-gray-500  group-hover:border-sky-600" />
              <p className="text-gray-500 text-base font-semibold group-hover:border-sky-600 dark:text-white">
                teamRSE.com
              </p>
            </div>
            <div className="flex gap-5 p-4 border border-gray-500 dark:border-black hover:border-blue-700 md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
              <HiLocationMarker className="text-xl text-gray-500  group-hover:border-sky-600" />
              <p className="text-gray-500 text-base font-semibold group-hover:border-sky-600 dark:text-white">
                Philippines
              </p>
            </div>
          </div>

          <div className="flex gap-8  justify-center md:justify-start ">
            <FaInstagram className="text-2xl text-black hover:text-blue-700 cursor-pointer dark:text-white dark:hover:text-pink-400" />
            <FaTwitter className="text-2xl text-black hover:text-blue-700 cursor-pointer dark:text-white dark:hover:text-blue-400" />
            <FaYoutube className="text-2xl text-black hover:text-blue-700 cursor-pointer dark:text-white dark:hover:text-red-600" />
            <FaPinterest className="text-2xl text-black hover:text-blue-700 cursor-pointer dark:text-white dark:hover:text-red-600" />
            <FaGithub className="text-2xl text-black hover:text-blue-700 cursor-pointer dark:text-white dark:hover:text-black" />
          </div>
        </div>
        {/* Contact form */}
        <div
          id="contact-card"
          className="bg-slate-200 p-12 rounded-lg shadow-lg w-full md:w-auto"
        >
          <form>
            <div className="grid xl:grid-cols-2 xl:gap-10">
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none"
                placeholder="First Name "
                required={true}
              />
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none"
                placeholder="Last Name "
                required={true}
              />
            </div>
            <input
              type="email"
              name="email"
              className="form-control block w-full px-3 py-2 mb-5 text-base font-normal bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none"
              placeholder="Email "
              required={true}
            />
            <input
              type="text"
              name="subject"
              className="form-control block w-full px-3 py-2 mb-5 text-base font-normal bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none"
              placeholder="Subject "
              required={true}
            />

            <div className="flex justify-center">
              <textarea
                id="exampleFormControlTextarea1"
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none"
                placeholder="Your message"
                required={true}
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white transition-all bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactpage;