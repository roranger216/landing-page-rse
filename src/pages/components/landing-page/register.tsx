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
  

    const [gender, setGender] = useState('');
    const [register, setRegister] =useState({ // array with obejects for basic personal information
      firstName:'',
      middleName:'',
      lastName:'',
      gender:'',
    })



    const [account, setAccount] = useState({
      email:'',
      password:'',
      firstName:'',
      lastName:'',
      
    })
    const handleBasicInfo =(event:any) =>{
       const { name, value ,type  } = event.target;
        if (type === "radio") {
          setGender(value);
        }
    setRegister((prevRegister) => ({
      ...prevRegister,
      [name]: value,
    }));

  };



  const handleNewAccount = (event:any) =>{
      const {name , value} = event.target
      setAccount((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      firstName:register.firstName,
      lastName:register.lastName
      }))};
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(register); // display the array object in console
    console.log(account)
  };
    


  return (
    <div className="registration_form w-full flex flex-col justify-center items-center my-10 z-50">
      <div className="Logo mb-8">
        <h1 className="font-bold text-3xl">
          RASI<span className="text-sky-600">NIX</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit}
       className="w-full flex flex-col justify-center items-center">
        <div className="flex w-full flex-col justify-start items-center gap-y-10 max-sm:gap-y-9">
          <div className="flex flex-row w-3/4 justify-center gap-4">
            <input
              type="text"
              id="firstname"
              name='firstName'
              className="w-full bg-white h-1/5 text-justify px-2 py-3 rounded-md border-2 border-blue-300 capitalize dark:text-black"
              placeholder="Firstname"
              onChange={handleBasicInfo}
              required
            />
          </div>
          <div className="flex flex-row w-3/4 justify-center gap-4">
            <input
              type="text"
              id="middlename"
              name='middleName'
              className="w-full bg-white h-1/3 text-justify px-2 py-3 rounded-md border-2 border-blue-300 capitalize dark:text-black"
              placeholder="Middle Name"
              onChange={handleBasicInfo}
            />
          </div>
          <div className="flex flex-row w-3/4 justify-center gap-4">
            <input
              type="text"
              id="lastname"
              name='lastName'
              className="w-full bg-white h-1/3 text-justify px-2 py-3 rounded-md border-2 border-blue-300 capitalize dark:text-black"
              placeholder="Lastname"
              onChange={handleBasicInfo}
              required
            />
          </div>
          <div className="flex flex-row w-3/4 justify-center gap-4">
            <input
              type="email"
              id="email"
              name='email'
              value={account.email}
              onChange={handleNewAccount}
              className="w-full bg-white h-1/3 text-justify px-2 py-3 rounded-md border-2 border-blue-300 dark:text-black"
              placeholder="Email"
              
            />
          </div>
          <div className="flex flex-row w-3/4 justify-center gap-4">
            <input
              type="password"
              id="password"
              name='password'
              value={account.password}
              onChange={handleNewAccount}
              className="w-full bg-white h-1/3 text-justify px-2 py-3 rounded-md border-2 border-blue-300 dark:text-black"
              placeholder="Password"
             
            />
          </div>
          <div className=" w-3/4 ">
            <h2 className="pb-3 w-auto">Gender:</h2>

            <div className=" w-full flex flex-col gap-1">
              {/*  */}
              <div className="  w-full h-auto ">
                <div className=" float-left mx-2 ">
                  <label
                    htmlFor="male"
                    className="w-auto max-sm:px-4 sm:px-5 lg:px-6"
                  >
                    Male
                  </label>
                  <input
                    type="radio"
                    checked={gender === "Male"}
                    name='gender'
                    value="Male"
                    onChange={handleBasicInfo}
                    className="bg-white dark:bg-white text-black"
                  />
                </div>
                <div className="float-left mx-2 max-sm:">
                  <label
                    htmlFor="female"
                    className="w-auto max-sm:px-4 sm:px-5 lg:px-6"
                  >
                    Female
                  </label>
                  <input
                    type="radio"
                    checked={gender === "Female"}
                    name='gender'
                    value="Female"
                    onChange={handleBasicInfo}
                  />
                </div>

                <div className="float-left mx-2 max-sm:">
                  <label
                    htmlFor="others"
                    className="w-auto max-sm:px-4 sm:px-5 lg:px-6"
                  >
                    Other
                  </label>

                  <input
                    type="radio"
                    checked={gender === "Other"}
                    value="Other"
                    name='gender'
                    onChange={handleBasicInfo}
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
            <p className="underline">or</p>
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
  )

  }

export default Register