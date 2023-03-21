import React from 'react'

const About = () => {
    return (
        <div id="about" className="flex flex-col pt-20 pb-40">
            <div className="p-4">
                <div className="">
                    <h1 className="text-sky-500 text-4xl mb-10 font-bold text-center">About Us</h1>

                    <p className="text-justify text-xs lg:text-lg mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia praesentium ipsum porro ut enim aspernatur nemo? Architecto, harum modi natus maxime dolorum eligendi quibusdam commodi unde odio, ad neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quia, sint ab possimus enim rerum commodi sequi ad beatae inventore minima quaerat laudantium maiores doloremque itaque porro nisi recusandae at?</p>
                    <p className="text-justify text-xs lg:text-lg mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia praesentium ipsum porro ut enim aspernatur nemo? Architecto, harum modi natus maxime dolorum eligendi quibusdam commodi unde odio, ad neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quia, sint ab possimus enim rerum commodi sequi ad beatae inventore minima quaerat laudantium maiores doloremque itaque porro nisi recusandae at?</p>
                    <p className="text-justify text-xs lg:text-lg mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia praesentium ipsum porro ut enim aspernatur nemo? Architecto, harum modi natus maxime dolorum eligendi quibusdam commodi unde odio, ad neque.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row p-4">
                    <img className="object-cover w-full md:w-1/3 rounded mt-4 md:mt-0 md:pr-4" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="programmer working on programming website" />

                    <img className="object-cover w-full md:w-1/3 rounded mt-4 md:mt-0" src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="programming code" />

                    <img className="object-cover w-full md:w-1/3 rounded mt-4 md:mt-0 md:pl-4" src="https://images.unsplash.com/photo-1503945438517-f65904a52ce6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="remote programming jobs" />
            </div>
        </div>
    )
}

export default About;