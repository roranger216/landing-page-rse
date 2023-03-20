import Image from "next/image";
import pic from "../../assets/img/pic.gif";
import pic2 from "../../assets/img/just.gif";

import React from "react";
const Service = () => {
  return (
    <div id="Main" className="w-full h-auto sm:mx-0 ">
      <div
        id="header"
        className=" mx-4 w-auto h-28 flex items-center sm:justify-center"
      >
        <h1 className="font-bold text-4xl text-sky-400 sm:text-center">
          Our Services
        </h1>
      </div>
      <div
        id="Content holder"
        className=" mx-4 w-auto h-auto grid gap-2 grid-cols-1 xl:grid-cols-3
                                                                            lg:grid-cols-2 gap-4
                                                                            md:grid-cols-1
                                                                            sm:grid-cols-1
                                                                                  
                                                                                  "
      >
        <div
          id="content"
          className=" h-auto max-[480px]:h-96
                                                     sm: h-1/2s"
        >
          <div
            id="service-1"
            className=" flex max-[480px]:w-full h-1/3
                                            sm:h-1/3
                                            md:justify-center items-center"
          >
            <div
              id="image-container"
              className="bg-blue-300 max-[480px]:w-52 h-full
                                       sm:
                                       md: w-64"
            >
              <Image
                src={pic}
                alt={"Service 1"}
                className="w-full h-full max-[480px]:bg-orange-300
                            lg:bg-red-300 "
              />
            </div>
          </div>
          <div
            id="service-offered"
            className=" max-[480px]:w-full h-10 items-center mt-2 mb-1 lg:mt-3 mb-4"
          >
            <h1
              className=" text-black mx-7 w-auto max-[480px]:mx-4 text-sm font-bold 
                                                    sm:text-base
                                                    md:text-xl
                                                    lg:text-2xl "
            >
              
              Development
            </h1>
          </div>
          <div className="w-full h-auto overflow-auto max-[480px]:h-48">
            <p
              className="text-justify text-ellipsis max-[480px]:h-full text-xs
                                                     sm:text-sm
                                                     md:text-base
                                                     lg:text-base
                                                     xl:text-base"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit, maxime. Molestiae eius impedit, nemo fuga ipsa qui
              commodi maiores autem. Quasi impedit consequatur totam voluptates.
              Consequuntur possimus culpa quis quibusdam. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Reprehenderit, quod dolore eius
              soluta praesentium facilis, accusamus corporis debitis neque odit
              unde delectus accusantium cumque repudiandae provident numquam
              maiores natus nihil? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Libero ratione facere vel eligendi sint quae
              aperiam id voluptatum nemo. Porro veritatis quia deserunt pariatur
              libero impedit iure voluptas, repellat sequi.
            </p>
          </div>
        </div>

        <div
          id="content"
          className=" h-auto max-[480px]:h-96
                                                     sm: h-1/2s"
        >
          <div
            id="service-2"
            className=" flex max-[480px]:w-full h-1/3
                                            sm:h-1/3
                                            md:justify-center items-center"
          >
            <div
              id="image-container"
              className="bg-blue-300 max-[480px]:w-52 h-full
                                       sm:
                                       md: w-64"
            >
              <Image
                src={pic2}
                alt={"Service 1"}
                className="w-full h-full max-[480px]:bg-orange-300
                            lg:bg-red-300 "
              />
            </div>
          </div>
          <div
            id="service-offered"
            className=" max-[480px]:w-full h-10 items-center mt-2 mb-1 lg:mt-3 mb-4"
          >
            <h1
              className=" text-black mx-7 w-auto max-[480px]:mx-4 text-sm font-bold 
                                                    sm:text-base
                                                    md:text-xl
                                                    lg:text-2xl "
            >
              Customization
            </h1>
          </div>
          <div className="w-full h-auto overflow-auto max-[480px]:h-48">
            <p
              className="text-justify text-ellipsis max-[480px]:h-full text-xs
                                                     sm:text-sm
                                                     md:text-base
                                                     lg:text-base
                                                     xl:text-base"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit, maxime. Molestiae eius impedit, nemo fuga ipsa qui
              commodi maiores autem. Quasi impedit consequatur totam voluptates.
              Consequuntur possimus culpa quis quibusdam. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Reprehenderit, quod dolore eius
              soluta praesentium facilis, accusamus corporis debitis neque odit
              unde delectus accusantium cumque repudiandae provident numquam
              maiores natus nihil? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Libero ratione facere vel eligendi sint quae
              aperiam id voluptatum nemo. Porro veritatis quia deserunt pariatur
              libero impedit iure voluptas, repellat sequi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;