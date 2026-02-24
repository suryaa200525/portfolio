import photo from'./assets/photo.jpg'

function Home(){
    return(
        <>
        
            <div className="flex flex-col items-center justify-center mt-10 align-middle flex-wrap space-x-6 ">
            <div className="flex flex-col flex-wrap p-2 m-1">
                <h1 className="ont-bold text-center text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">Hi I am Suryaa.V.G </h1>
                <h1 className="text-blue-200 font-semibold text-xl sm:text-2xl md:text-3xl text-center mt-8 leading-relaxed"> IT Engineering student and Front-End Developer specializing in modern, responsive  web interfaces.</h1>

            </div>
            <div className="m-1 p-2 mt-10 ">
                <img src={photo} alt="photo" class="pic"/>
            </div>

        </div>
     
        
        </>
       

    )
}
export default Home