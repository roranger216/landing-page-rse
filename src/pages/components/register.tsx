import React, { useState } from 'react'

function Register() {

    // const [checked, setChecked] = useState("")

    // function checkRadioBtn (event: React.ChangeEvent<HTMLInputElement>) {
    //     var selected = event.target.value;

    //     if(selected === checked){
    //         setChecked("")
    //     } else {
    //         setChecked(selected)
    //     }
    // }
    const [selectedValue, setSelectedValue] = useState("");

    const [gender, setGender] = useState('Male');


  return (
    <div className="registration_form w-full flex flex-col justify-center items-center my-10 z-50">
      <div className="Logo mb-8">
        <h1 className="font-bold text-3xl">
          RASI<span className="text-sky-600">NIX</span>
        </h1>
      </div>
      <form className="w-full flex flex-col justify-center items-center">
        <div className="flex w-full flex-col justify-start items-center gap-y-10 max-sm:gap-y-9">
          <div className="flex flex-row w-3/4 justify-center gap-4">
            <input
              type="firstname"
              id="firstname"
              className="w-full h-1/5 text-justify px-2 py-3  rounded-md border-2 border-blue-300 capitalize bg-white"
              placeholder="Firstname"
              required
            />
          </div>
          <div className="flex flex-row w-3/4 justify-center gap-4">
            <input
              type="middlename"
              id="middlename"
              className="w-full h-1/3 text-justify px-2 py-3 rounded-md border-2 border-blue-300 capitalize bg-white"
              placeholder="Middle Name"
            />
          </div>
          <div className="flex flex-row w-3/4 justify-center gap-4">
            <input
              type="lastname"
              id="lastname"
              className="w-full h-1/3 text-justify px-2 py-3 rounded-md border-2 border-blue-300 capitalize bg-white"
              placeholder="Lastname"
              required
            />
          </div>
          <div className="flex flex-row w-3/4 justify-center gap-4">
            <input
              type="email"
              id="email"
              className="w-full h-1/3 text-justify px-2 py-3 rounded-md border-2 border-blue-300 bg-white"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex flex-row w-3/4 justify-center gap-4">
            <input
              type="password"
              id="password"
              className="w-full h-1/3 text-justify px-2 py-3 rounded-md border-2 border-blue-300 bg-white"
              placeholder="Password"
              required
            />
          </div>
          <div className=" w-3/4 ">
            <h2 className="pb-3 w-auto text-black">Gender:</h2>

            <div className=" w-full flex flex-col gap-1">
              {/*  */}
              <div className="  w-full h-auto ">
                <div className=" float-left mx-2 ">
                  <label
                    htmlFor="male"
                    className="w-auto text-black max-sm:px-4 sm:px-5 lg:px-6"
                  >
                    Male
                  </label>
                  <input
                    type="radio"
                    checked={gender === "Male"}
                    value="Male"
                    onClick={() => setGender("Male")}
                    className="bg-white dark:bg-white"
                  />
                </div>
                <div className="float-left mx-2 max-sm:">
                  <label
                    htmlFor="female"
                    className="w-auto text-black max-sm:px-4 sm:px-5 lg:px-6"
                  >
                    Female
                  </label>
                  <input
                    type="radio"
                    checked={gender === "Female"}
                    value="Female"
                    onClick={() => setGender("Female")}
                  />
                </div>

                <div className="float-left mx-2 max-sm:">
                  <label
                    htmlFor="others"
                    className="w-auto text-black max-sm:px-4 sm:px-5 lg:px-6"
                  >
                    Other
                  </label>

                  <input
                    type="radio"
                    checked={gender === "Other"}
                    value="Other"
                    onClick={() => setGender("Other")}
                    
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-4">
            <button
              type="submit"
              className="w-1/3 bg-blue-600 hover:bg-blue-400 py-2 px-4 rounded-md font-bold text-sm text-white hover:text-gray-200 shadow-lg"
            >
              Register
            </button>
            <p className='underline text-black'>
              or
             
            </p>
            <button
              type="submit"
              className="w-auto bg-gray-300 hover:bg-blue-400 py-2 px-4 rounded-md font-bold text-sm text-black hover:text-gray-200 shadow-lg flex flex-row justify-center max-sm:full"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/281/281764.png"
                alt="google"
                className="w-5 h-5 mx-1"
              />
              Sign in with Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register