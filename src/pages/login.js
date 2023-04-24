import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { db } from '../components/API';

export function Login() {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const Log = async(e) => {
        const data = {
            user : user,
            pass: pass
        }
        const res = await axios.post(`${db}/`, data);
        console.log(res);

       if(res.data.msg === "Ok"){
            Cookies.set('Session_Event', res.data.usr);
            console.log(res.data.usr)
            navigate('/');
        }
        else{
            toast("User not found", {type: "error" });
        }
    };

return (
<section className="bg-[#e91e9b] dark:bg-[#611845]">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <img className="w-2/12 h-2/12" src="https://o.remove.bg/downloads/875c7e4c-5970-4789-beaf-3911840a5cdf/ISW-removebg-preview.png" alt="logo"/>
        <a href="/" className="text-2xl font-mono">HOME</a>
      <div className="w-full bg-[#db73b3] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#716a21] dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log in to your account
              </h1>
              <div className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                      <input onChange={(e) => setUser(e.target.value)} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#511239]  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#511239] dark:focus:border-[#511239]" placeholder="Just your name" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input onChange={(e) => setPass(e.target.value)} type="password" id="pass" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#511239] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#511239] dark:focus:border-[#511239]" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
  
                      </div>
                  </div>
                  <button onClick={() => Log()} type="submit" className="w-full bg-[#511239] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-[#511239]">
                      Don't have an account yet? <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </div>
          </div>
      </div>
  </div>
</section>
);
}