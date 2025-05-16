import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function SectionOne() {
  return (
    <section
      className="relative h-[350px] md:h-[500px] w-full text-white bg-cover bg-center"
      style={{ backgroundImage: `url("/bigaStores.jpg")` }}
      aria-label="Hero section: Phone and accessories sales "
    >
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center slide-in px-4">
        <h1 className="text-3xl md:text-6xl font-bold"> Get it. Use it. Enjoy it — the Cphilip way. </h1>
        <p className="text-white text-base text-lg md:px-10">
          Your trusted destination in Ibadan for affordable Phones, accessories,  games,  electricals etc — all backed by friendly experts who care about your satisfaction as much as you do.
        </p>
        <div className="flex md:flex-row gap-5 slide-left">
          <a href="https://wa.me/2347069933822?text=Hello%2C%20I'm%20interested%20in%20your%20services%20and%20would%20like%20to%20book%20a%20call."
            target="_blank"
            rel="noopener noreferrer"
             className="mt-4 border p-3 shadow active:bg-yellow-600 transition duration-700 md:duration-400 ease-in">
            Book A Call
          </a>
          <a href="/sell" className="mt-4 border p-3 shadow bg-yellow-600 active:bg-transparent transition duration-700 md:duration-400 ease-in-out active:scale-105">
            Buy A Phone
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionTwo() {
  return (
    <section className="my-5 flex flex-col justify-center items-center" aria-label="Our Services">
      <h2 className="text-yellow-500 text-lg">- Our Services -</h2>
      <h3 className="text-3xl md:text-4xl font-semibold text-yellow-900 text-center">Smart Prices. Smarter Phones.</h3>

      {[
        {
          title: "Reliable Game Equipment",
          img: "/game.png",
          desc: "We diagnose phone issues fast & provide lasting repair solutions. You get reliability without losing your device to downtime.",
        },
        {
          title: "Sell Your Phone for Instant Cash",
          img: "/payment.png",
          desc: "Trade in your old phone for instant cash—no stress, just quick payment.",
        },
        {
          title: "Reliable Phone Swapping",
          img: "/swap.png",
          desc: "Easily swap your phone for a better one—fast, fair, and hassle-free.",
        },
        {
          title: "Affordable Phone and Accessories Purchases",
          img: "/shop.png",
          desc: "Get quality phones at prices that fit your budget—no compromise.",
        },
        {
          title: "Top-Quality Phone Accessories",
          img: "/accessories.png",
          desc: "Explore a wide range of top-quality phone accessories—enhance your device today.",
        },
      ].map((service, i) => (
        <article key={i} className="flex flex-col items-center px-2 text-center">
          <img src={service.img} alt={service.title} className="h-[256px] mt-7" />
          <h4 className="text-2xl py-9 md:text-3xl font-semibold text-yellow-800">{service.title}</h4>
          <p className="md:text-2xl text-xl text-[#898989]">{service.desc}</p>
        </article>
      ))}
    </section>
  );
}

function SectionThree() {
  return (
    <section className="bg-white py-10 px-4 md:px-16 text-center" aria-label="Why people trust BigaStores">
      <h2 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-6">Why People Trust BigaStores</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Fast & Reliable Services",
            desc: "We get your phone quickly and professionally, with quality parts you can count on.",
          },
          {
            title: "Affordable Prices",
            desc: "We keep our pricing fair — quality service without breaking your wallet.",
          },
          {
            title: "Trusted by Hundreds",
            desc: "With tons of happy customers and referrals, we let our work speak for itself.",
          },
        ].map((item, i) => (
          <article key={i} className="p-4 rounded-lg shadow-md border">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionFour() {
  return (
    <section className="bg-white py-10 px-4 md:px-16" aria-label="Customer testimonials">
      <h2 className="text-2xl md:text-3xl font-bold text-yellow-900 text-center mb-6">
        What Our Customers Are Saying
      </h2>
      <div className="testimonial-container flex overflow-x-auto space-x-4 scroll-smooth">
        {[
          {
            quote: "Fast delivery! My phone was delivered in no time, and at an affordable price. Highly recommend bigaStores!",
            author: "John D.",
          },
          {
            quote: "bigaStores is my go-to place for phone accessories Purchases! Great customer service and always gets the job done!",
            author: "Sarah M.",
          },
          {
            quote: "Affordable, efficient, and reliable. bigaStores helped me swap my old phone for a better one — I couldn’t be happier!",
            author: "David K.",
          },
          {
            quote: "Amazing customer service! I had a problem with my phone, and they fixed it the same day. I’m impressed!",
            author: "Michael A.",
          },
        ].map((t, i) => (
          <article key={i} className="testimonial-item bg-gray-100 p-6 shadow-lg rounded-lg w-80 flex-shrink-0">
            <p className="text-lg text-gray-700 mb-4">"{t.quote}"</p>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-600">- {t.author}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> bigaStores - Affordable tech Accessories in Ibadan</title>
        <meta
          name="description"
          content="Buy tech Accessories in Ibadan with bigaStores. Affordable, reliable and fast service. Book a call or get your phone fixed today."
        />
        <meta property="og:title" content="bigaStores - Affordable Phone Accessories in Ibadan" />
        <meta property="og:description" content="Your one-stop destination for phone sales, swaps, and accessories in Ibadan." />
        <meta property="og:image" content="/bigaStores.jpg" />
        <meta property="og:url" content="https://bigastores.name.ng" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <NavBar />
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </main>
      <Footer />
    </>
  );
}

