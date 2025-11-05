import DataImage from "./data";
import { listTools, listProyek, listPlatform } from "./data";

function App() {
  return (
    <>
      {/* Hero Section */}
      <div
        id="hero"
        className="hero grid grid-cols-1 items-center gap-8 py-8 lg:grid-cols-2 lg:gap-0"
      >
        <div className="animate__animated animate__fadeInLeft animate__delay-0.5s mb-8 text-center lg:mb-0 lg:text-left">
          <h1 className="mb-4 text-3xl/tight font-bold md:text-5xl/tight">
            Hi, Saya Maulana As'an
          </h1>
          <p className="mb-4 text-justify text-base/loose opacity-75">
            Saya adalah lulusan S1 Teknik Informatika Universitas Dian
            Nuswantoro. Memiliki keterampilan komunikasi yang baik, mampu
            bekerja dalam tim, dan cepat beradaptasi. Fokus pada Frontend Web
            Development dengan keahlian mendesain serta mengembangkan antarmuka
            website yang menarik, responsif dan optimal.
          </p>
          <div className="flex justify-center gap-4 lg:justify-start">
            <a
              href="https://drive.google.com/drive/folders/1eUm63QEglLAXh0cvXgrEYFej0NdYNDwH?usp=sharing"
              target="_blank"
              className="rounded-xl bg-teal-500 p-3 font-medium hover:bg-teal-400 md:p-4 md:text-base/tight"
            >
              Download CV <i className="ri-download-line"></i>
            </a>
            <a
              href="#tools"
              className="rounded-xl bg-slate-800 p-3 font-medium hover:bg-slate-700 md:p-4 md:text-base/tight"
            >
              Explore More <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </div>
        <img
          loading="lazy"
          src={DataImage.HeroImage}
          alt="Profile Image"
          className="animate__animated animate__fadeInRight animate__delay-1s mx-auto w-[480px] lg:mx-0 lg:ml-auto xl:w-3/4"
        />
      </div>
      {/* End Hero Section */}

      {/* Tools Section */}
      <div id="tools" className="tools pt-24 text-center lg:py-8">
        <h2
          className="mb-4 text-4xl font-bold"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          Tools & Technologies
        </h2>
        <p
          className="mb-4 text-base opacity-75"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Berikut adalah beberapa alat dan teknologi yang sering saya gunakan
          dalam pengembangan web:
        </p>
        <div className="tools-box grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {listTools.map((tool) => (
            <div
              className="group flex items-center gap-4 rounded-md border border-slate-700 p-4 hover:bg-slate-700"
              key={tool.id}
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay={tool.id * 100 + 100}
            >
              <img
                src={tool.src}
                alt={tool.nama}
                loading="lazy"
                className="w-14 rounded-md bg-slate-100 object-contain p-2 transition-transform duration-300 group-hover:scale-110"
              />

              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-75">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Tools Section */}

      {/* Projects Section */}
      <div id="projects" className="projects pt-24 text-center lg:py-8">
        <h2
          className="mb-4 text-4xl font-bold"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          Projects
        </h2>
        <p
          className="mb-4 text-base opacity-75"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          Berikut adalah beberapa proyek yang telah saya kerjakan:
        </p>
        <div className="projects-box grid grid-cols-1 gap-4 text-left sm:grid-cols-2 xl:grid-cols-3">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="rounded-lg bg-slate-800 p-4 shadow-lg"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay={proyek.id * 100 + 100}
            >
              <a href={proyek.link} target="_blank">
                <img
                  loading="lazy"
                  src={proyek.gambar}
                  alt={proyek.nama}
                  className="w-full rounded-md object-cover transition-transform duration-300 hover:scale-102 hover:shadow-lg"
                />
              </a>
              <div>
                <h3 className="my-4 text-2xl font-bold">{proyek.nama}</h3>
                <p className="mb-4 text-base/relaxed">{proyek.desk}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="rounded-md border border-slate-500 bg-slate-800 px-3 py-1 font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Projects Section */}

      {/* Connect Section */}
      <div id="connect" className="projects pt-24 text-center lg:py-8">
        <h2
          className="mb-4 text-4xl font-bold"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          Connect
        </h2>
        <p
          className="mb-4 text-base opacity-75"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          Berikut adalah beberapa platform untuk terhubung dengan saya:
        </p>
        <div className="platforms-box grid grid-cols-1 gap-4 text-left md:grid-cols-2 xl:grid-cols-4">
          {listPlatform.map((platform) => (
            <div
              key={platform.id}
              className="items-center rounded-lg bg-slate-800 p-4 shadow-lg"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay={platform.id * 100 + 100}
            >
              <div className="text-center">
                <i
                  className={`ri-3x rounded-full border border-teal-500 p-4 ${platform.icon}`}
                ></i>
                <h3 className="mt-4 text-2xl font-bold">{platform.nama}</h3>
                <a
                  href={platform.link}
                  className="text-lg underline opacity-75 hover:no-underline"
                  target="_blank"
                >
                  {platform.uname}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Connect Section */}
    </>
  );
}

export default App;
