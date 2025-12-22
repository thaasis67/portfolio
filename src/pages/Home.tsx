import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y:20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const,
        },
    },
};

const Home = () => {
    return (
        <section className = "min-h-screen bg-primary flex items-center px-8 ">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <motion.div 
             initial={{ opacity: 0, x:-40}}
             animate= {{ opacity: 1, x: 0}}
             transition={{duration: 0.6 }}
             className="flex justify-center md:justify-start"
            >
                <div className="w-80 h-80 md:w-80 rounded-2xl overflow-hidden border border-white/20">
                <img src="/ashish.jpg" alt="ashish ko photo"
                className="w-full h-full object-cover" />
                </div>
            </motion.div>
          
            <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            >
                <motion.p
                className="text-lg text-white mb-4 opacity-80"
                variants={itemVariants}
                >
                Hello, I'm
                </motion.p>

                <motion.h1
                className="text-5xl md:text-6xl font-bold text-white mb-6 custom-title"
                variants={itemVariants}
                >
                    Ashish Limbu
                </motion.h1>

                <motion.h2
                className="text-2xl md:text-3xl font-semibold text-white mb-6 opacity-90"
                variants={itemVariants}
                >
                    Web Developer
                </motion.h2>

                <motion.p
                className="text-lg leading-relaxed text-white mb-10 max-w-2xl"
                variants={itemVariants}
                >
                I build modern, responsive web applications using React and Node.js,
                with a strong focus on clean UI, performance, and learning how the web
                works behind the scenes.
                </motion.p>

                <motion.div
                 className="flex flex-wrap gap-4"
                 variants={itemVariants}
                >
                    <Link
                    to="/about"
                    className="px-6 py-3 bg-white text-primary font-semibold rounded-md hover:opacity-90 transition"
                    >
                        About Me
                    </Link>
                    <Link
                    to="/projects"
                    className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary transition"
                    >
                        View Projects
                    </Link>
                    <Link
                    to="/contacts"
                    className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary transition"
                    >
                        Contacts
                    </Link>
                </motion.div>
            </motion.div>
           
        </div>
        </section>
    );
};

export default Home;