import {motion} from "framer-motion"
export default function FirstSection(props){
return(  
		<motion.div
      className="relative h-[300px] md:h-[500px] w-full text-white bg-cover bg-center"
      style={{ backgroundImage: `url("/writeup1.jpg")` }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

          <div className="absolute inset-0 bg-yellow-800/85 pointer-events-none"></div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-3xl md:text-6xl font-bold">{props.title}</h1>
            <h2 className="text-xl md:text-5xl font-semibold mt-5 text-black">{props.content}</h2>
          </div>
        </motion.div>

	);
}
