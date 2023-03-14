import React from 'react'

const About = () => {
    return (
        <div className="flex flex-col lg:flex-row pt-10 pb-10">
            <div className="flex flex-col">
                <div className="">
                    <img className="p-6 pb-0 max-w-full h-auto md:max-w-4xl rounded-lg" src="https://thumbs.dreamstime.com/b/professional-development-programmer-working-programming-website-software-coding-technology-writing-codes-data-code-132331729.jpg" alt="programmer working on programming website" />
                </div>
                <div className="flex flex-wrap p-6 gap-6 md:gap-16">
                    <img className="object-cover w-full md:w-1/2 lg:w-1/3 h-64 max-w-xl" src="https://cdn.ucberkeleybootcamp.com/wp-content/uploads/sites/106/2020/12/tes_gen_blog_code6-800x412.jpg" alt="programming code" />
                    <img className="object-cover w-full md:w-1/2 lg:w-1/3 h-64 max-w-2xl" src="https://6448316.fs1.hubspotusercontent-na1.net/hubfs/6448316/what-computer-programming-jobs-offer-remote-work-jpg.jpeg" alt="remote programming jobs" />
                </div>
            </div>
            <div className="md:w-1/2 p-6">
                <div className="">
                    <h1 className="text-sky-500 text-4xl mb-10 font-bold">About Us</h1>
                    <p className="text-justify text-xl mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia praesentium ipsum porro ut enim aspernatur nemo? Architecto, harum modi natus maxime dolorum eligendi quibusdam commodi unde odio, ad neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quia, sint ab possimus enim rerum commodi sequi ad beatae inventore minima quaerat laudantium maiores doloremque itaque porro nisi recusandae at?</p>
                    <p className="text-justify text-xl mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia praesentium ipsum porro ut enim aspernatur nemo? Architecto, harum modi natus maxime dolorum eligendi quibusdam commodi unde odio, ad neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quia, sint ab possimus enim rerum commodi sequi ad beatae inventore minima quaerat laudantium maiores doloremque itaque porro nisi recusandae at?</p>
                    <p className="text-justify text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia praesentium ipsum porro ut enim aspernatur nemo? Architecto, harum modi natus maxime dolorum eligendi quibusdam commodi unde odio, ad neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;