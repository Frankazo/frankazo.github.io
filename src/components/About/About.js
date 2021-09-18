import React from 'react'

const About = () => {
    return (
      <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center w-9/12">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hi, I'm Frank.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          I'm a JavaScript Fan and I'm open to learning new things every day.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Conect With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-200 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <a href="#contact" className="relative w-60 h-60">
          <img class="rounded-full border border-green-100 shadow-sm" src="./me.JPG" alt="Frank" />
          <div class="absolute top-4 right-4 h-8 w-8 my-1 border-4 border-white rounded-full bg-green-300 z-2"></div>
        </a>
      </div>
    </section>
  );
}


export default About
