const Footer = () => {
  return (
    <div className="footer mt-4 flex flex-col items-center justify-between gap-4 border-t border-slate-700 py-4 md:flex-row md:gap-0">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="flex gap-8">
        <a href="#home">Home</a>
        <a href="#tools">Tools</a>
        <a href="#projects">Projects</a>
        <a href="#connect">Connect</a>
      </div>
      <h1 className="text-2xl font-bold">Maulana As'an H.</h1>
    </div>
  );
};

export default Footer;
