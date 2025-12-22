import { Github } from "lucide-react";

const projects = [
    {
        title: "Movie Review App",
        description:
          "A full-stack movie review application where users can sign up, log in, and post reviews. Built with modern authentication and smooth UI transitions.",
          tech: ["React", "Node.js", "JWT", "MongoDB"],
          github: "https://github.com/thaasis67/movie-review",
          live: "#",
    },
    {
        title: "Backend CRUD Application",
        description:
        "A backend-focused application implementing complete CRUD operations with clean API design and database integration.",
        tech: ["Node.js", "Express", "MongoDB"],
        github: "https://github.com/thaasis67/backend_api",
        live: "#",
    },
];

const Projects = () => {
    return (
        <section className="min-h-screen bg-primary px-8 py-20">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-12 custom-title">
                    Projects
                </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div
                         key={index}
                         className="bg-dark-100 rounded-2xl p-6 flex flex-col justify-between hover:translate-y-[-4px] transition"
                         >
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-white">
                                    {project.title}
                                </h2>

                                <p className="text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((item, i) =>  (
                                        <span
                                        key={i}
                                        className="text-sm px-3 py-1 rounded-full bg-dark-200 text-gray-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <a
                             href={project.github}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                            >
                                <Github size={18} />
                                View on Github
                            </a>
                         </div>
                    ))}

                    {[1,2,3].map((_,i) => (
                        <div
                        key={`placeholder-${i}`}
                        className="border border-dashed border-gray-600 rounded-2xl p-6 flex items-center justify-center text-gray-400"
                        >
                            <span className="text-sm tracking-wide">
                                Coming soon
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;