import photo from './assets/Suryaaphoto.jpeg';

function Home() {
    return (
        <section className="pt-20 md:pt-24 px-6 md:px-16 lg:px-24">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                {/* Content */}
                <div className="md:w-3/5 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                        Hi, I'm <span className="text-blue-400">Suryaa V.G</span>
                    </h1>

                    <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300">
                        B.Tech IT Graduate & Front-End Developer
                    </h2>

                    

                    
                </div>

                {/* Photo */}
                <div className="md:w-2/5 flex justify-center">
                    <img
                        src={photo}
                        alt="Suryaa"
                        className="w-72 h-72 md:w-[380px] md:h-[380px] object-cover rounded-full border-4 border-black-400 shadow-2xl"
                    />
                </div>

            </div>
        </section>
    );
}

export default Home;