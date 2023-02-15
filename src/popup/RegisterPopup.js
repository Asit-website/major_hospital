import React from "react";
import cross from '../images/cross.png';
const RegisterPopup = ({setRegisterPop}) => {
  return (
    <>
      <div className="home-pop home-pop1">
        <div className="intle" onClick={() => setRegisterPop(false)}>
          <img src={cross} alt="" />
        </div>
        <div className="popup-container popup-container1">
          <div className="apo">
            <h2>Register Now</h2>
            <p className="text-center register-para">You are not registerd. Fill this below details to get register</p>
          </div>
          <form>
            <div className="grid md:grid-cols-3 md:gap-8">
            <div className="relative z-0 w-full group">
                <label for="underline_select" class="sr-only">
                  Underline select
                </label>
                <select
                  id="underline_select"
                  class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option selected>Title*</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            
              <div className="relative z-0 w-full mb-6 group nameo">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="location"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name*
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="location"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                 Date of Birth*
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-8">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="description"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Address*
                </label>
              </div>
              <div className="relative z-0 w-full group">
                <label for="underline_select" class="sr-only">
                  Underline select
                </label>
                <select
                  id="underline_select"
                  class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option selected>Location*</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-8">
            <div className="relative z-0 w-full group mb-6  nameo">
                <label for="underline_select" class="sr-only">
                  Underline select
                </label>
                <select
                  id="underline_select"
                  class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option selected>Gender*</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="relative z-0 w-full group mb-6">
                <label for="underline_select" class="sr-only">
                  Underline select
                </label>
                <select
                  id="underline_select"
                  class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option selected>Country*</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-8">
            <div className="relative z-0 w-full group">
                <label for="underline_select" class="sr-only">
                  Underline select
                </label>
                <select
                  id="underline_select"
                  class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option selected>State*</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

              <div className="relative z-0 w-full mb-6 group  nameo">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="location"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  City*
                </label>
              </div>
              
            </div>

            <div className="grid md:grid-cols-2 md:gap-8">
         

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="location"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Mobile No*.
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="location"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Emergency Contact
                </label>
              </div>
              
            </div>
           
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="location"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Profile Picture*
                </label>
              </div>
              
            </div>
           
            <button className="popsub">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPopup;
