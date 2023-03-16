import React from 'react'

const About = () => {
    return (
        <div className="flex flex-col md:flex-row pt-10 pb-10">
            <div className="w-full md:w-1/2 p-10">
                <div className="w-full">
                    <img className="pb-0" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="programmer working on programming website" />
                </div>
                {/* <div className="w-1/2  flex flex-wrap md:flex-row"></div> */}
                <div className="w-full md:flex md:w-1/2 mt-6">
                    <img className="object-cover w-full" src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="programming code" />
                    <img className="object-cover w-full mt-6 md:mt-0" src="https://images.unsplash.com/photo-1503945438517-f65904a52ce6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="remote programming jobs" />
                </div>
            </div>
            <div className="md:w-1/2 p-6">
                <div className="">
                    <h1 className="text-sky-500 text-4xl mb-10 font-bold text-center md:text-left">About Us</h1>

                    <p className="text-justify text-sm lg:text-xl mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia praesentium ipsum porro ut enim aspernatur nemo? Architecto, harum modi natus maxime dolorum eligendi quibusdam commodi unde odio, ad neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quia, sint ab possimus enim rerum commodi sequi ad beatae inventore minima quaerat laudantium maiores doloremque itaque porro nisi recusandae at?</p>
                    <p className="text-justify text-sm lg:text-xl mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia praesentium ipsum porro ut enim aspernatur nemo? Architecto, harum modi natus maxime dolorum eligendi quibusdam commodi unde odio, ad neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quia, sint ab possimus enim rerum commodi sequi ad beatae inventore minima quaerat laudantium maiores doloremque itaque porro nisi recusandae at?</p>
                    <p className="text-justify text-sm lg:text-xl mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia praesentium ipsum porro ut enim aspernatur nemo? Architecto, harum modi natus maxime dolorum eligendi quibusdam commodi unde odio, ad neque.</p>
                </div>
            </div>
        </div>
    )
}

export default About;