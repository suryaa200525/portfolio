import photo from'./assets/photo.jpg'

function Home(){
    return(
        <>
        <h1 className="font-poppins font-bold not-italic text-[40px] mt-1 text-center">Home</h1>
        <center>
            <div className="flex col justify-center mt-10 align-middle flex-wrap space-x-6 ">
            <div className="flex flex-col flex-wrap p-2 m-1">
                <h1 className="text-3xl">Hi Iam Suryaa.V.G </h1>
                <h1 className="text-blue-200 font-semibold text-2xl"> An It Engineering Student And Front-End Developer</h1>

            </div>
            <div className="m-1 p-2 ">
                <img src={photo} alt="photo" class="pic"/>
            </div>

        </div>
        </center>
        
        </>
       

    )
}
export default Home