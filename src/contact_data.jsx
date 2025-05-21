import { useRef } from 'react';
import emailjs from '@emailjs/browser';



import { useState,useEffect} from "react";
function Contact_data() {
    const[data,setdata]=useState({
        name:"",
        subject:"",
        message:""

    }
    )



const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formspree.io/f/mbloblen", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        subject: data.subject,
        message: data.message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
          setdata({ name: "", subject: "", message: "" });
        } else {
          alert("Failed to send message.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error sending message.");
      });
  };




    return (
        <>
            <h1 className="font-poppins font-bold text-[40px] mt-6 text-center">Contact</h1>

            <div className="flex justify-center items-center mt-10 px-4">
                <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
                    <form className="flex flex-col gap-6"  onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="text-xl block mb-1 text-black">Name:</label>
                            <input onChange={(e)=> setdata(prev =>({...prev,name:e.target.value}))} value={data?.name} type="text" id="name" className="w-full border-b-2 border-black outline-none text-black px-2 py-1" input=""/>
                        </div>

                        <div>
                            <label htmlFor="subject" className="text-xl block mb-1 text-black">Subject:</label>
                            <input onChange={(e)=> setdata(prev =>({...prev,subject:e.target.value}))} value={data?.subject} type="text" id="subject" className="w-full border-b-2 border-black outline-none text-black px-2 py-1"/>
                        </div>

                        <div>
                            <label htmlFor="message" className="text-xl block mb-1 text-black">Message:</label>
                            <input onChange={(e)=> setdata(prev =>({...prev,message:e.target.value}))} value={data?.message} type="text" id="message"className="w-full border-b-2 border-black outline-none text-black px-2 py-1"/>
                        </div>

                        <button type="submit"   className="bg-black  text-white px-6 py-2 rounded-2xl hover:bg-blue-700 transition-all">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact_data;
