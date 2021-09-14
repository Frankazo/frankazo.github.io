/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="relative">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.8)" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377643.1448643036!2d-71.25046756407667!3d42.31400891969002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1631590136136!5m2!1sen!2sus"
            />
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-12">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Greater Boston, <br />
                  Massachusetts
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-400 leading-relaxed" href="mailto: Frankluisravlo@gmail.com">
                  FrankLuisravlo@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div
            name="contact"
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="sm:text-4xl text-3xl mb-1 font-medium title-font">
              Connect With Me
            </h2>
            <p className="leading-relaxed mb-5">
              Feel free to connect with me on Social or send me an email!
            </p>
            <div className="flex justify-center">
              <a className="leading-relaxed mb-5" href="https://www.linkedin.com/in/franklr" target="_blank">
                <img src="./svg/linkedin.svg" alt="Linkedin" className="w-20 h-20 flex-shrink-0 mr-6"/>
              </a>
              <a className="leading-relaxed mb-5" href="https://www.github.com/frankazo" target="_blank">
                <img src="./svg/github.svg" alt="Github" className="w-20 h-20 flex-shrink-0 mr-6"/>
              </a>
              <a className="leading-relaxed mb-5" href="https://www.twitter.com/frankazolr" target="_blank">
                <img src="./svg/twitter.svg" alt="Twitter" className="w-20 h-20 flex-shrink-0 mr-6"/>
              </a>
              <a className="leading-relaxed mb-5" href="mailto: Frankluisravlo@gmail.com" target="_blank">
                <img src="./email.png" alt="Email" className="h-16 flex-shrink-0 mr-6"/>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contact
