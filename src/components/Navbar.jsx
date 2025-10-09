import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar flex items-center justify-between py-8">
      <div className="logo">
        <h1 className="bg-transparent p-1 text-3xl font-bold text-slate-100">
          Maulana As'an H.
        </h1>
      </div>
      <ul
        className={`menu fixed top-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-4 rounded-2xl bg-slate-100/30 p-4 backdrop-blur-md transition-all md:gap-10 lg:static lg:-translate-x-0 lg:bg-transparent lg:opacity-100 lg:transition-none ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
      >
        <li>
          <a href="#home" className="text-lg font-medium">
            Home
          </a>
        </li>
        <li>
          <a href="#tools" className="text-lg font-medium">
            Tools
          </a>
        </li>
        <li>
          <a href="#projects" className="text-lg font-medium">
            Projects
          </a>
        </li>
        <li>
          <a href="#connect" className="text-lg font-medium">
            Connect
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
