import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y:0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const,
        },
    },
};

const About = () => {
    return (
        <motion.section className="max-h-screen bg-primary px-8 py-16 relative "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount:0.3}}>
            <motion.div className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            >
                {/*title*/}
                <motion.h1 className="text-4xl font-bold mb-6 custom-title"
                variants={itemVariants}>
                    About me
                </motion.h1>

                {/* Intro */}

                <motion.p className="text-lg leading-relaxed text-white mb-6 "
                variants={itemVariants}>
                    Hi, I'm <span className="font-semibold text-white">Ashish Limbu</span>,
                    a passionate web developer with a strong interest in web technologies.
                </motion.p>
                {/* Body */}
                <motion.p className="text-lg leading-relaxed text-white mb-6 "
                variants={itemVariants}>
                    I like to develop web applications using modern tools like React and Node js,
                    and I'm always keen to gain more knowledge about how things works.
                </motion.p>

                <motion.p className="text-lg leading-relaxed text-white mb-6"
                variants={itemVariants}>
                    I want to continuously improve my skills, build projects, and want to become
                    a well rounded web developer with a core knowledge about web development.
                </motion.p>
            </motion.div>
        </motion.section>
    )
}

export default About;