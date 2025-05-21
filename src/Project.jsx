import '@fortawesome/fontawesome-free/css/all.min.css';


function Project(props) {
    return (
        <>
            
            <div className="flex justify-center items-center w-full p-4">
                <div className="bg-white text-black rounded-lg shadow-md w-full max-w-4xl p-4 flex flex-col sm:flex-row sm:items-center">
                    <img
                        src={props.img}
                        alt="Project Preview"
                        className="h-52 sm:h-44 sm:w-64 object-cover rounded-md mb-4 sm:mb-0 sm:mr-6"
                            />

                    <div className="flex flex-col justify-between w-full text-center sm:text-left">
                        <div>
                            <h1 className="mb-2 text-black font-semibold text-3xl">{props.name}</h1>
                            <p className="text-sm mb-4">{props.description}</p>
                        </div>
                        <a
                            href="https://github.com/your-username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="self-center sm:self-start"
                        >
                            <i
                                className="fab fa-github fa-2x"
                                style={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    padding: '10px',
                                    borderRadius: '50%',
                                }}
                            ></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;
