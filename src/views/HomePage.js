import React, { useEffect, useState } from "react";
import { getRandomBlague } from "../controllers/blagueController";


const HomePage = () => {

  const [blague, setBlague] = useState([]);

  useEffect(() => {
    getRandomBlague().then(setBlague);
  }, []);


  return (
    <div>
      <h3 class="font-serif text-4xl text-center font-bold mt-[30px]">C'EST CARAMBAR & CO</h3>
      {blague.length === 0 ? (
        <p class="mt-[20px] text-3xl text-center" >...</p>
      ) : (
        <div class="text-center align-center mt-[40px]">
        
            <p class="text-3xl font-bold">{blague.question}</p> 
            <p class="text-3xl mt-[10px] font-semi-bold">{blague.reponse}</p> 
        
          <button 
                onClick={() => window.location.reload()}
                type="button" 
                class="mt-[20px] text-2xl text-pink-600 bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-100 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Autre Blague
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;