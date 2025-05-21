function Contact(){
    return(
        <>
       <h1 className="font-poppins font-bold  text-[40px] mt-2 text-center">Contact </h1>
        <center>
            <div className="flex flex-col bg-white text-black justify-evenly align-middle h-52 w-72 rounded-xl">
            <h1>You can contact me by clicking the contact button </h1>
            <a href="mailto:suryaa.vg25@gmail.com"><button className="contact_button">
            <div >
                <span>
                <p className="pl-4">Contact Me</p>
                </span>
            </div>
            <div>
                <span>
                <p>Thanks for contacting</p>
                </span>
            </div>
            </button>
            </a>
            <div className="flex flex-row justify-evenly flex-wrap">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" >
            <i className="fa-brands fa-linkedin text-black text-4xl hover:text-blue-500 transition-colors" /></a>
            <a href="https://github.com/your-username"target="_blank"rel="noopener noreferrer"className="self-center sm:self-start">
                            <i className="fab fa-github fa-2x text-2xl"
                                style={{backgroundColor: 'black',color: 'white', borderRadius:2}}></i></a>

            </div>
            


           </div>

        </center>
        

        </>
        
    )
}
export default Contact