import photo from'./assets/photo.jpg'

function Home(){
    return(
        <>
        
            <div className="flex flex-col items-center justify-center mt-10 align-middle flex-wrap space-x-6 ">
            <div className="flex flex-col flex-wrap p-2 m-1">
                <h1 className="text-5xl font-bold text-center">Hi I am Suryaa.V.G </h1>
                <h1 className="text-blue-200 font-semibold text-2xl text-center mt-8 "> An It Engineering Student And Front-End Developer</h1>

            </div>
            <div className="m-1 p-2 mt-10 ">
                <img src={photo} alt="photo" class="pic"/>
            </div>

        </div>
     
        
        </>
       

    )
}
export default Home