import React from 'react'

const About = () => {
    return (
        <div className="flex flex-col xl:flex-row pt-20 pb-10">
            <div className="flex flex-col w-1/2 md:w-full items-center">
                <div className="">
                    <img className="max-w-full p-4" src="https://thumbs.dreamstime.com/b/professional-development-programmer-working-programming-website-software-coding-technology-writing-codes-data-code-132331729.jpg" alt="programmer working on programming website" />
                </div>
                <div className="flex flex-wrap flex-row max-w-full">
                    <div className="w-1/2 p-4 pr-2">
                        <img className="object-cover h-48 w-96" src="https://cdn.ucberkeleybootcamp.com/wp-content/uploads/sites/106/2020/12/tes_gen_blog_code6-800x412.jpg" alt="programming code" />
                    </div>
                    <div className="w-1/2 p-4 pl-2">
                        <img className="object-cover h-48 w-96" src="https://6448316.fs1.hubspotusercontent-na1.net/hubfs/6448316/what-computer-programming-jobs-offer-remote-work-jpg.jpeg" alt="remote programming jobs" />
                    </div>
                </div>
            </div>

            <div className="md:w-full p-6">
                <div className="text-center">
                    <h1 className="text-sky-500 text-4xl mb-10 font-bold justify-center">About Us</h1>
                    <p className="text-justify text-xl mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia praesentium ipsum porro ut enim aspernatur nemo? Architecto, harum modi natus maxime dolorum eligendi quibusdam commodi unde odio, ad neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quia, sint ab possimus enim rerum commodi sequi ad beatae inventore minima quaerat laudantium maiores doloremque itaque porro nisi recusandae at?</p>
                    <p className="text-justify text-xl mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia praesentium ipsum porro ut enim aspernatur nemo? Architecto, harum modi natus maxime dolorum eligendi quibusdam commodi unde odio, ad neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quia, sint ab possimus enim rerum commodi sequi ad beatae inventore minima quaerat laudantium maiores doloremque itaque porro nisi recusandae at?</p>
                </div>
            </div>
        </div>
    )
}

export default About;