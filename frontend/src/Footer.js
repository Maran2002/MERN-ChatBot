import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 flex flex-col content-around items-center flex-wrap end-0 bg-slate-950 p-6 text-white">
      <p className="flex">
        Made with <span>❤</span> by
        <a
          className="px-1 underline"
          href="https://elamaran-portfolio.web.app/"
        >
          {" "}
          Elamaran.A{" "}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
