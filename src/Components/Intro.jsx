import React from "react";
import supabase from "../Config/supabaseClient";


function Intro () {
    console.log(supabase)
    return (
        <div className= ' w-full md:auto flex items-center justify-center flex-col text-rigth pt-10'>
            <h1 className= 'text-[#14213D] text-4xl md:text-7xl dark:text-white mb-1 md: md-3 font-bold'>Welcome to Hermes!</h1>
            <p className= 'text-[#14213D] text-base md:text-xl md-3 font-medium pt-5'> Use the form below to submit your runs! Once your runs has been submitted you 
            can see it below on your personal dashboard! </p>
            
        </div>

    )
}

export default Intro