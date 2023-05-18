import React from 'react'
import Image from 'next/image'
import pic from "../../assets/img/development.jpg";
import pic2 from "../../assets/img/customization.jpg";
import pic3 from "../../assets/img/consultation.jpg";
import pic4 from "../../assets/img/documentation.jpg";
import pic5 from "../../assets/img/design.jpg";
import pic6 from "../../assets/img/outsource.jpg";

const services = () => {
    return (
        <>
            <div id="services" className="text-center w-full mb-32 p-6 lg:p-0">
                <div className="p-8">
                    <div className="text-3xl lg:text-4xl font-bold text-sky-600 mb-6">What We Offer</div>
                    <div className="lg:mx-60 text-center"> Our team of experts utilizes the latest technology to deliver high-quality software solutions that help businesses achieve their goals and stay competitive in their industries.</div>
                </div>
                <div className="flex flex-col">

                    <div className="flex flex-col lg:flex-row justify-center items-center">
                        <div className="w-full xl:w-1/4 flex flex-col mx-2 xl:mx-10 my-4 justify-center items-center rounded-xl bg-slate-100 dark:bg-slate-800 p-8 transform transition-all hover:-translate-y-2 hover:bg-sky-700 hover:text-white">
                            <Image
                                className="rounded-xl"
                                src={pic}
                                width={130}
                                alt={"Service 1"}
                            />
                            <div className="text-lg font-bold m-4">Customization and integration</div>
                            <p>
                                We deliver IT solutions and software development services to enable digital transformation and meet specific client needs.
                            </p>
                        </div>

                        <div className="w-full xl:w-1/4 flex flex-col mx-2 xl:mx-10 my-4 justify-center items-center rounded-xl bg-slate-100 dark:bg-slate-800 p-8 transform transition-all hover:-translate-y-2 hover:bg-sky-700 hover:text-white">
                            <Image
                                className="rounded-xl"
                                src={pic2}
                                width={130}
                                alt={"Service 1"}
                            />
                            <div className="text-lg font-bold m-4">Business IT consultancy</div>
                            <p>
                                We provide expert IT consultancy services to optimize your infrastructure and align IT strategies with your business objectives.
                            </p>
                        </div>

                        <div className="w-full xl:w-1/4 flex flex-col mx-2 xl:mx-10 my-4 justify-center items-center rounded-xl bg-slate-100 dark:bg-slate-800 p-8 transform transition-all hover:-translate-y-2 hover:bg-sky-700 hover:text-white">
                            <Image
                                className="rounded-xl"
                                src={pic3}
                                width={130}
                                alt={"Service 1"}
                            />
                            <div className="text-lg font-bold m-4">Documentation</div>
                            <p>
                                We offer high-quality software documentation services to enhance knowledge transfer and streamline collaboration across your teams.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center items-center">
                        <div className="w-full xl:w-1/4 flex flex-col mx-2 xl:mx-10 my-4 justify-center items-center rounded-xl bg-slate-100 dark:bg-slate-800 p-8 transform transition-all hover:-translate-y-2 hover:bg-sky-700 hover:text-white">
                            <Image
                                className="rounded-xl"
                                src={pic}
                                width={130}
                                alt={"Service 1"}
                            />
                            <div className="text-lg font-bold m-4">Outsourced IT works</div>
                            <p>
                                Our Outsourced IT service offers expert support and customized solutions to manage your IT operations, so you can focus on your core business activities.
                            </p>
                        </div>

                        <div className="w-full xl:w-1/4 flex flex-col mx-2 xl:mx-10 my-4 justify-center items-center rounded-xl bg-slate-100 dark:bg-slate-800 p-8 transform transition-all hover:-translate-y-2 hover:bg-sky-700 hover:text-white">
                            <Image
                                className="rounded-xl"
                                src={pic2}
                                width={130}
                                alt={"Service 1"}
                            />
                            <div className="text-lg font-bold m-4">Quality assurance and testing services</div>
                            <p>
                                Our QA and testing services ensure high-quality software performance, while minimizing risks and costs.
                            </p>
                        </div>

                        <div className="w-full xl:w-1/4 flex flex-col mx-2 xl:mx-10 my-4 justify-center items-center rounded-xl bg-slate-100 dark:bg-slate-800 p-8 transform transition-all hover:-translate-y-2 hover:bg-sky-700 hover:text-white">
                            <Image
                                className="rounded-xl"
                                src={pic3}
                                width={130}
                                alt={"Service 1"}
                            />
                            <div className="text-lg font-bold m-4">Software maintenance and support</div>
                            <p>
                                Our Software Maintenance and Support services provide reliable technical support to keep your software up-to-date and running smoothly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default services