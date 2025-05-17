import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import { motion } from "framer-motion";

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
          <div className="absolute inset-0 bg-yellow-800/85 pointer-events-none"></div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-3xl md:text-6xl font-bold">
              Shop it. Save it. Love it — the BigAStores way.
            </h1>
            <h2 className="text-xl md:text-5xl font-semibold mt-5 text-black">
              About Us
            </h2>
          </div>
        </motion.div>

        <div className="flex flex-col gap-7 mt-6 justify-center items-center">
          <h1 className="text-yellow-900">-About Our Company-</h1>
          <h2 className="text-3xl md:text-6xl text-yellow-400 text-center">
            BigAStores:
            <span className="text-yellow-900 gitamber-600">
              {" "}
              Quality, Convenience, Confidence.
            </span>
          </h2>
        </div>

        {[
          {
            img: "/writeup1.jpg",
            text: `BigAStores is the one-stop online destination that redefines your shopping experience. From top-tier electronics and stylish apparel to home essentials and beauty products, BigAStores brings you a curated selection of quality products at unbeatable prices. With an intuitive interface and seamless navigation, finding what you need has never been easier. Explore exclusive deals, fast shipping, and a customer-centric shopping experience tailored just for you.`,
          },
          {
            img: "/writeup2.jpg",
            text: "Looking to upgrade your lifestyle without breaking the bank? BigAStores offers a comprehensive range of premium products designed to elevate everyday living. Whether it’s the latest tech gadgets, trendy fashion, or home decor, BigAStores provides an exceptional variety of items sourced from trusted brands. Enjoy hassle-free shopping, secure payment options, and reliable customer support with every purchase.",
          },
          {
            img: "/writeup3.jpg",
            text: `BigAStores – Where Quality Meets Affordability: BigAStores stands out in the competitive world of e-commerce by prioritizing both quality and affordability. From budget-friendly finds to luxury items, every product is handpicked to meet the highest standards. With regular discounts, seasonal sales, and flash deals, BigAStores makes it easy to shop smart and save big. Don’t miss out – discover what’s trending today!`,
          },
          {
            img: "/writeup4.jpg",
            text: "Why complicate shopping when you can do it all in one place? BigAStores is designed with simplicity and convenience in mind, ensuring a user-friendly experience from start to finish. With a robust search function, curated categories, and quick checkout, shopping at BigAStores is as easy as a few clicks. Experience the joy of finding exactly what you need without the hassle.",
          },
          {
            img: "/writeup5.jpg",
            text: `At BigAStores, trust and transparency are at the heart of every transaction. Featuring secure payment methods, comprehensive product descriptions, and verified reviews, BigAStores ensures that you can shop confidently. Whether you’re buying the latest tech or the perfect gift, you can count on BigAStores to deliver quality, value, and exceptional service every time.`,
          },
        ].map((item, index) => (
          <motion.div
            className="flex flex-col md:flex-row my-7 border border-gray-200 slide-in   bg-white shadow-lg rounded-xl p-6 gap-4 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={item.img}
              className="h-[300px] w-[300px] object-cover rounded-full"
            />
            <div className="flex h-[300px] justify-center items-center">
              <p className="text-center md:text-center text-[#898989]">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
}

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Can I sell my products on BigAStores?",
    answer:
      "No, BigAStores does not currently allow third-party sellers. We source products directly from trusted suppliers to maintain quality and reliability.",
  },
  {
    question: "Do you sell brand-new or used products?",
    answer:
      "We offer both brand-new and certified refurbished products. All refurbished items go through strict quality checks to ensure top performance.",
  },
  {
    question: "Can I exchange a product for another?",
    answer:
      "Yes, exchanges are available for eligible products. Check our Return & Exchange Policy for detailed guidelines.",
  },
  {
    question: "Do you only sell electronics?",
    answer:
      "No, BigAStores offers a wide range of categories, including fashion, home essentials, beauty products, and more.",
  },
  {
    question: "What kind of products do you specialize in?",
    answer:
      "Our primary focus is on quality electronics, trendy fashion, and essential home goods from reliable brands.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 1-3 business days for processing, plus delivery time, which varies based on location.",
  },
  {
    question: "Where is BigAStores located and how can I contact you?",
    answer:
      "BigAStores is an online platform serving customers nationwide. For inquiries, visit our Contact Us page or email us at support@bigastores.com.",
  },
];

function SectionTwo() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section>
      <motion.div
        className="bg-yellow-900 py-16 px-6 md:px-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-yellow-800 text-white px-5 py-10 slide-in flex flex-col justify-start">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
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
                      {isOpen ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
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
        <h2 className="text-3xl font-bold text-center text-yellow-900 mb-10">
          How BigAStores Works
        </h2>
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-900">
              Step 1
            </h3>
            <p>
              Browse our collection of quality products across multiple
              categories.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-900">
              Step 2
            </h3>
            <p>
              Add your chosen items to the cart and proceed to checkout with
              secure payment options.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-900">
              Step 3
            </h3>
            <p>
              Receive your order quickly with reliable shipping and top-notch
              customer service.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SectionFour() {
  return (
    <motion.div
      className="bg-yellow-900 text-white py-16 px-6 md:px-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose BigAStores
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          "Wide Selection",
          "Affordable Prices ",
          "Secure Payments",
          "Fast Shipping ",
          "Customer Support",
          "Return & Exchange Policy",
        ].map((text, index) => (
          <motion.div
            key={index}
            className="bg-white text-yellow-900 p-5 rounded-xl shadow-md text-center font-semibold"
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
      <p className="mb-2">
        Call: <strong> +234 706 993 3822 </strong>
      </p>
      <p className="mb-2">
        WhatsApp: <strong>Click the button below</strong>
      </p>
      <p className="mb-6">
        Visit: Shop J20 Joke Plaza bodija market Ibadan Oyo State 
        <br/>
        Or
        <br/>
        Visit: Shop 3, kara Junction, bodija market, Ibadan, Oyo State, Nigeria
        <br/>  
        Or
        Visit: Shop 1 mission road, Igoli, Ogoja, Cross River, Nigeria
      <br/>
      </p>
      <button className="bg-yellow-800 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all">
        <a
          href="https://wa.me/2347069933822?text=Hello%2C%20I'm%20interested%20in%20your%20services%20and%20would%20like%20to%20book%20a%20call."
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Chat on WhatsApp{" "}
        </a>
      </button>
      <p className="mt-8 italic text-yellow-600">
        Shop it. Save it. Love it — the BigAStores way.
      </p>
    </motion.div>
  );
}

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </main>
      <Footer />
    </>
  );
}
