import { React } from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export function VIP (){
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

   return(
    <>
    <Navbar/>
          <div className="flex flex-wrap place-items-center bg-[#511239]">
        <div
          className="m-9 flex flex-col items-center bg-[#b07098] border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#e13ca2]"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://fastly.4sqi.net/img/user/130x130/MWEFHFKNESZ5BJBH.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              A CLASS ABOUT A RANDOM TOPIC OF YOUR CHOICE WITH MASTER FELIX
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
              You can be the special guest of one of the classes by Master Felix
            </p>
          </div>
        </div>
        <div
          class="m-9 flex flex-col items-center bg-[#b07098] border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#e13ca2]"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://i.pinimg.com/600x315/1b/15/07/1b15070261325fc20fd8979d0dd801d1.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            AN ASCENT TO THE KINGDOM OF HEAVEN
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
              You can get a ticket DIRECTLY to the kingdom of heaven, BY JUST 1$ EXTRA
            </p>
          </div>
        </div>

        <div
          class="m-9 flex flex-col items-center bg-[#b07098] border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#e13ca2]"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://d131oejryywhj7.cloudfront.net/p/api/usuario/dup/URbE_pOh2kgBE5lCbu1OSr4GJK11flGF0.jpg/600x600cut/?s=l"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              A CLASS ABOUT AN SPECIFIC TOPIC CHOOSED BY MASTER OCTAVIO 
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
              You can get a class about a topic choosed by Master Octavio, and you have no possibility to change it
            </p>
          </div>
        </div>
        <div
          class=" m-9 flex flex-col items-center bg-[#b07098] border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#e13ca2]"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://elitesprinters.com/wp-content/uploads/2022/08/Cadillac-Escalade-fleet.png"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              A RIDE IN ONE OF THE CARS OF THE UNIPOLI'S RECTOR
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
             You can win an opportunitie to ride in one of the cars of the Unipoli's rector, you cannot choose the car, but you can tell everyone that you took a ride with the rector
            </p>
          </div>
        </div>
      </div>
    </>
    ); 

}
