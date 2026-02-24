import '@fortawesome/fontawesome-free/css/all.min.css';

function Project({ img, name, description, githubLink, liveLink }) {
    return (
        <div className="flex justify-center w-full p-4">
            <div className="bg-white text-black rounded-lg shadow-md w-full max-w-4xl p-4 flex flex-col sm:flex-row sm:items-center">
                
                <img
                    src={img}
                    alt={name}
                    className="h-52 sm:h-44 sm:w-64 object-cover rounded-md mb-4 sm:mb-0 sm:mr-6"
                />

                <div className="flex flex-col justify-between w-full">
                    <div>
                        <h1 className="mb-2 font-semibold text-3xl">
                            {name}
                        </h1>
                        <p className="text-sm mb-4">
                            {description}
                        </p>
                    </div>

                    {/* Action Icons */}
                    <div className="flex gap-4">
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github fa-2x bg-black text-white p-2 rounded-full"></i>
                        </a>

                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fas fa-globe fa-2x bg-blue-600 text-white p-2 rounded-full"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;