import React from 'react'
import {Link } from "react-router-dom";

const Register = () => {
  return (
    <React.Fragment>
    <section>
      <div>
        <form>
            <div className=" space-y-3 mt-8 px-10 md:w-4/5">
                 {/* name */}
            <div >
              <input
                type="text"
                placeholder="Name"
                className="w-full h-12  pl-5 placeholder-gray-500 rounded-lg "
              />
            </div>

            
            {/* Email */}
            <div>
              <input
                type="password"
                placeholder="Email"
                className="w-full  h-12 pl-5 placeholder-gray-500 rounded-lg "
              />
            </div>

               {/* password */}
               <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full  h-12 pl-5 placeholder-gray-500 rounded-lg "
              />
              <p className="mt-2 text-red-500">Forgot password?</p>
            </div>

             {/* submit */}
             <div className="w-full centered flex-col">
              <input
                type="submit"
                value="submit"
                className="w-1/2  h-12 placeholder-gray-500 rounded-lg btnColor text-white uppercase font-bold "
              />
               <p className="mt-2"> Have an account? 
                <Link to='/login'
                className='text-red-500'
                > Login </Link> now</p>
            </div>
            </div>
        </form>
      </div>
    </section>
  </React.Fragment>
  )
}

export default Register