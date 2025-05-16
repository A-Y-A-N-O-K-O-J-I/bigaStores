import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import {motion} from "framer-motion";

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // delay between each box
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

function SectionOne() {
  return (
    <>
      <section>
        <motion.div
      className="relative h-[300px] md:h-[500px] w-full text-white bg-cover bg-center"
      style={{ backgroundImage: `url("/writeup1.jpg")` }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

          <div className="absolute inset-0 bg-blue-800/85 pointer-events-none"></div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-3xl md:text-6xl font-bold">Fix it. Swap it. Love it — the KingFix way.</h1>
            <h2 className="text-xl md:text-5xl font-semibold mt-5 text-black">About Us</h2>
          </div>
        </motion.div>

        <div className="flex flex-col gap-7 mt-6 justify-center items-center">
          <h1 className="text-blue-800">-About Our Company-</h1>
          <h2 className="text-3xl md:text-6xl text-blue-900 text-center">
            The KingFix Story:
            <span className="text-amber-600"> Tech, Trust, and Transformation</span>
          </h2>
        </div>
        
          {[
            {
              img: "/writeup1.jpg",
              text: "At KingFix, we believe that technology is more than just devices — it’s a way of life. It connects us, empowers us, and helps us achieve more. But when these devices break down, life can slow down with them. That’s why we started KingFix: to bring back the speed, reliability, and peace of mind that technology should always provide.",
            },
            {
              img: "/writeup2.jpg",
              text: "KingFix began as a simple idea among a team of tech enthusiasts who were tired of seeing people overcharged and underserved when it came to phone repairs, accessories, and upgrades. We noticed how often people struggled to find reliable technicians, transparent pricing, and trustworthy gadget services. So we decided to become the solution. Our mission was clear from day one: to build a brand that prioritizes trust, delivers quality, and keeps the customer at the center of every decision.",
            },
            {
              img: "/writeup3.jpg",
              text: "From humble beginnings, we’ve grown into a thriving tech service platform that now offers a wide range of solutions — including phone repairs, secure phone swapping, phone sales, and high-quality accessories. But our real growth comes from the trust we've built with every customer we've served. Whether it's fixing a cracked screen, helping someone upgrade their phone, or offering the perfect accessory, we treat every device like it's our own.",
            },
            {
              img: "/writeup4.jpg",
              text: "What sets us apart is our transparency and consistency. At KingFix, we don’t believe in shortcuts. Our repair experts are trained to follow best-in-class standards, using quality parts and offering warranties that ensure peace of mind. Our swapping system is designed to be fair and simple, while our sales and accessories are curated to guarantee value for money. And our customer service? It’s always here to listen, respond, and assist — because we genuinely care.",
            },
            {
              img: "/writeup5.jpg",
              text: "But we’re not stopping here. KingFix is on a mission to transform the way people experience tech care. We're exploring smarter service systems, faster delivery methods, and a more personalized experience for every user. Whether you're a student, a worker, a business owner, or a tech lover — we want KingFix to be your first thought when it comes to technology.",
            },
          ].map((item, index) => (
           <motion.div
                  className=  "flex flex-col md:flex-row my-7 border border-gray-200 slide-in   bg-white shadow-lg rounded-xl p-6 gap-4 max-w-5xl mx-auto" 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                <img src={item.img} className="h-[300px] w-[300px] object-cover rounded-full" />
              <div className="flex h-[300px] justify-center items-center">
                <p className="text-center md:text-center text-[#898989]">{item.text}</p>
              </div>
            </motion.div>
          ))}
        
      </section>
    </>
  );
}

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Can I sell my phone to KingFix?",
    answer: "Yes! We buy used phones at great prices. Just bring your device for a quick check, and we’ll offer you a fair deal instantly.",
  },
  {
    question: "Do you sell brand-new or used phones?",
    answer: "We sell both! You can get neatly used phones at smart prices, and we also have brand-new devices depending on availability.",
  },
  {
    question: "Can I swap my phone for another one?",
    answer: "Definitely. Our phone swap service lets you trade your current device for another, with or without a little balance added — fast and reliable.",
  },
  {
    question: "Do you only repair phones?",
    answer: "Nope! While we’re pros at repairs, we also buy, sell, and swap devices. KingFix is your one-stop shop for everything smartphone.",
  },
  {
    question: "What kind of phones do you work with?",
    answer: "We handle all major brands — iPhones, Samsung, Tecno, Infinix, Xiaomi, and more. Whether it’s repair or buying/selling, we’ve got you.",
  },
  {
    question: "How long does a typical service take?",
    answer: "Repairs usually take 1–2 hours. Buying, selling, or swapping can be done in minutes once everything is confirmed.",
  },
  {
    question: "Where is KingFix located and how do I reach you?",
    answer: "You can reach us via WhatsApp or call, and check our contact page for directions and more details.",
  },
];

function SectionTwo() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
   <section>
 <motion.div
      className="bg-blue-900 py-16 px-6 md:px-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
    <div className="bg-blue-900 text-white px-5 py-10 slide-in flex flex-col justify-start">
     <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto w-full space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b border-white pb-4">
              <button
                className="w-full flex justify-between items-center text-left text-xl font-medium focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="ml-2">
                  {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-96 mt-2 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-base">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
    </motion.div>
    </section>
  );
}


function SectionThree() {
  return (
  <section>
    <motion.div
      className="bg-white py-16 px-6 md:px-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">How KingFix Works</h2>
      <div className="grid gap-8 md:grid-cols-3 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-blue-900">Step 1</h3>
          <p>Contact us or walk into any of our locations.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-blue-900">Step 2</h3>
          <p>We inspect and give you a fair quote instantly.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-blue-900">Step 3</h3>
          <p>Repair, swap, or sell — quick and trusted.</p>
        </div>
      </div>
    </motion.div>
    </section>
  );
}

function SectionFour() {
  return (
    <motion.div
      className="bg-blue-900 text-white py-16 px-6 md:px-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose KingFix?</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          "Fast Turnaround",
          "Flexible Payments",
          "Experienced Staff",
          "Buy, Sell & Swap",
          "Trusted by Many",
          "Warranty on Repairs",
        ].map((text, index) => (
          <motion.div
            key={index}
            className="bg-white text-blue-800 p-5 rounded-xl shadow-md text-center font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            {text}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}


function SectionFive() {
  return (
    <motion.div
      className="bg-white py-16 px-6 md:px-24 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="mb-4 text-lg">Have questions or ready to get started?</p>
      <p className="mb-2">Call: <strong>+234 903 654 1012</strong></p>
      <p className="mb-2">WhatsApp: <strong>Click the button below</strong></p>
      <p className="mb-6">Visit: After Thirty thirty Kara junction, before MUSA Alapo shop, Bodija Market, Shop 3 Main Street, Ibadan 200132, Oyo, Nigeria</p>
      <button className="bg-blue-800 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all">
     <a href ="https://wa.me/2349036541012?text=Hello%2C%20I'm%20interested%20in%20your%20services%20and%20would%20like%20to%20book%20a%20call."
       target="_blank"
       rel="noopener noreferrer">   Chat on WhatsApp </a>
      </button>
      <p className="mt-8 italic text-gray-600">
        Let’s fix it. Let’s swap it. Let’s make tech better — together.
      </p>
    </motion.div>
  );
}

export default function AboutUs(){
	return(
	<>
		<NavBar/>
		<main>
		<SectionOne/>
		<SectionTwo/>
		<SectionThree/>
		<SectionFour/>
		<SectionFive/>
		</main>
		<Footer/>
		</>
	)
}
