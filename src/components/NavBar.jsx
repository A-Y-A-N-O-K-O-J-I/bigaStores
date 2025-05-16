import { useState } from "react";
import { Menu, X,Lightbulb, House, ShoppingCart,Info,CircleUserRound, Box, EllipsisVertical } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // for toggling the Services dropdown

  const navLinks = [
    { name: "Home", href: "/" ,icon:<House/>},
    { name: "TechTips", href: "/techtips", icon: <Lightbulb/> },
    { name: "About", href: "/about",icon:<Info/> },
    { name: "Contact", href: "/contact",  icon:<CircleUserRound/>},
  ];

  const servicesLinks = [
    { name: "Buy", href: "/buy" },
    { name: "Sell", href: "/sell" },
    { name: "Fix", href: "/fix" },
    { name: "Swap", href: "/swap" },
  ];

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
      <header className="w-full bg-white shadow-md  sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <TypeAnimation
            sequence={[
              1000,
              " Cphilip's BigaStores",
              1500,
              "We Fix…",
              1500,
              "We Sell…",
              1500,
              "We Buy…",
              1500,
              "We Swap…",
            ]}
            speed={50}
            className="text-3xl font-extrabold text-yellow-600"
            repeat={Infinity}
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            {navLinks.map((links) => (
              <a
                key={links.name}
                href={links.href}
                className="px-3 py-1 rounded-full text-yellow-600 font-bold active:bg-cyan-500/50 transition duration-400 ease-out"
              >
               {links.icon}
              </a>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
            <div>
              <button
                onClick={toggleServices}
                className="px-3 py-1 rounded-full text-yellow-600 font-bold active:bg-cyan-500/50 transition duration-400 ease-out"
              >
           <EllipsisVertical/>
           </button>
              </div>
              {isServicesOpen && (
                <div className="absolute bg-white shadow-md mt-2 rounded-md w-40 right-0">
                  <ul>
                    {servicesLinks.map((service) => (
                      <li key={service.name}>
                        <a
                          href={service.href}
                          className="block px-4 py-2 text-yellow-600 font-semibold rounded-lg active:bg-cyan-500/50 transition duration-400 ease-out"
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <div className="rounded-full h-10 relative w-10 bg-yellow-600 shadow-md active:-scale-105">
              <button
                onClick={toggleIsOpen}
                className="text-white absolute bottom-2 left-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className= {`md:hidden bg-white px-4 pb-4 shadow ${isOpen ? 'slide-in' : 'slide-out'}`}>
            <ul className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block px-4 py-2 text-yellow-600 rounded-lg font-semibold rounded active:bg-cyan-500/50 transition duration-400 ease-out"
                  >
                    {link.icon}{link.name}
                  </a>
                </li>
              ))}

              {/* Services Dropdown (Mobile) */}
              <li>
                <button
                  onClick={toggleServices}
                  className="w-full text-left px-4 py-2 text-yellow-600 font-semibold rounded hover:bg-blue-100"
                >
                  <Box/> Services
                </button>
                {isServicesOpen && (
                  <div className="pl-4 space-y-2">
                    {servicesLinks.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-yellow-600 font-semibold rounded hover:bg-blue-100"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

