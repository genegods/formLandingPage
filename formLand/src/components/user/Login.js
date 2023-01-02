import React from 'react'
import {Link } from "react-router-dom";

const Login = () => {
  return (
    <React.Fragment>
    <section>
  <div className="">
    <form>
      <div className=" space-y-3 mt-8 px-10 md:w-4/5">
       

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
            <p className="mt-2">Don't have an account? 
            <Link to='/'
            className='text-red-500'
            > Register </Link> now</p>
        </div>
      </div>
    </form>
  </div>
</section>
</React.Fragment>
  )
}

export default Login