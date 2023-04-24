import React, { useState, useEffect} from 'react'
import { db } from '../components/API'
import { Navbar } from '../components/Navbar'
import Cookies from 'js-cookie'
import axios from 'axios'

export function Landing() {
    const [data, setData] = useState([]);
    const [session, setSession] = useState(false);
    const [comment, setComment] = useState("");
    /*const [description, setDescription] = useState("")*/

    const getData = async() => {
        const res  = await fetch(`${db}/comments`)
        const data = await res.json()
        console.log(data)
        setData(data)
    }

    const checkCookie = (session) => {
      if(session){
        setSession(true);
      }
    }

    const postComment = async(e) => {
      const data = {
        comment: comment,
        id: parseInt(Cookies.get('Session_Event'))
      }
      try {
        await axios.post(`${db}/scomment`, data)
        console.log("NICE")
      }
      catch(e){
        console.log("ERROR")
      }
      getData()
    }

    useEffect(() => {
      const session = Cookies.get("Session_Event");
      checkCookie(session);
      getData();
    }, []);
    return(
        <div>
  <section className="mb-40 bg-[#c1db00]">
    <Navbar/>
    <div className="text-center py-12 bg-[#a7d323]">
        <img className="flex h-screen w-full justify-center items-center" src="data:image/jpeg;base64,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" alt="" />
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 bg-[#390d28]">JUST A SIMPLE GRADUATION<br /><span className="text-[#ecef39]">Not the one you dream of, but an option you can afford</span></h1>
    </div>
  </section>
  <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-[#d5d512]">
          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 bg-yellow bg-yellow-500">
            {
              data ? (
                data.map((item) => (
                  <blockquote className="rounded-lg bg-[#dcdc15]" key={item.ID}>
              <div className="flex items-center gap-4">
                <img
                  alt="Man"
                  src="icon.png"
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div>
                  <p className="mt-1 text-lg font-medium text-gray-700 text-center">
                    {item.NAME}
                  </p>
                </div>
              </div>

              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500 text-center">
                {item.COMMENT}
              </p>
            </blockquote>
              )) ) : null
            }
          </div>
        </div>   
            {
        session ? (
          <div className="isolate bg-[#8f8b21] py-24 px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Let your comment
          </h2>
          <p className="mt-2 text-lg leading-8 text-[#390d28]">
            Create a comment to let people know your experience with us
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <input
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#8f2165] sm:text-sm sm:leading-6"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              onClick={postComment}
              className="block w-full rounded-md bg-[#390d28] px-3.5 py-2.5 text-center text-sm font-semibold 
              text-white shadow-sm hover:bg-[#2a0a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#701c50]"
            >
              Save Comment
            </button>
          </div>
        </div>
      </div>
        ): null
      }
    </section>
</div>
    )
}