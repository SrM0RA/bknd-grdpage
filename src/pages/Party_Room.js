import { useEffect } from "react";
import React from "react";
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


export function Party() {

  const navigate = useNavigate();
   
  const checkCookie = (session) => {
    if(!session){
      navigate("/");
    }
}

useEffect(() => {
  const session = Cookies.get("Session_Event");
  
  /* Here we call the function to check the cookie */
  checkCookie(session);
  });


  useEffect(() => {
    const studentsGrid = document.querySelector("#students-grid");

    const absoluteChairs = [
        "bottom-0 left-0",
        "bottom-2/6 -left-0",
        "top-0 left-0",
        "-top-1 left-1/5",
        "bottom-0 right-0",
        "bottom-2/6 -right-0",
        "top-0 right-0",
        "-bottom-0 right-2/6",
    ];

    for (let i = 0; i < 20; i++) {
      const table = document.createElement("div");
      table.className = " z-40 w-24 h-24 bg-[#e13ca2] rounded-3xl";

      const tableContainer = document.createElement("div");
      tableContainer.className =
        "relative p-6 flex justify-center items-center my-8";

      for (let j = 0; j < 8; j++) {
        const chairContainer = document.createElement("div");
        chairContainer.className = `z-50 absolute ${absoluteChairs[j]} w-6 h-5`;

        const chairImg = document.createElement("img");
        chairImg.src = "icons8-chair-50.png";
        chairImg.alt = "";

        chairContainer.appendChild(chairImg);
        tableContainer.appendChild(chairContainer);
      }

      tableContainer.appendChild(table);
      studentsGrid.appendChild(tableContainer);
    }
  }, []);
  return (
    <>
       
       <Navbar/>

      <div className="flex justify-center"> 
      
        <div className="w-5/6 bg-[#511239] flex p-12"> 
            <div 
              className="w-full h-18 grid grid-cols-5 place-items-center px-5 " id="students-grid">
            </div>   
        </div>

      </div>
    </>
  );
}