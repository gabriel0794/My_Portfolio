import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaArrowCircleDown,
  FaStar,
  FaPhone,
  FaBitbucket
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import MyPhoto from "./assets/aboutme.png";
import { GoHomeFill } from "react-icons/go";
import ContactForm from './components/ContactForm';

const sections = ["home", "about", "techstack", "resume", "project", "contact"];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // In this section, this is the code for the scrollable underline effect in the navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 120; // adjust if navbar height is different

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop - offset;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // this is for the stars rating constant
  const StarRating = ({ level }) => {
    return (
      <div className="flex w-28 justify-end ml-2">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-lg ${
              i < level ? "text-[#F5E8C7]" : "text-gray-400"
            } ml-1`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#183391] via-[#0F215E] to-[#070F2B] text-white">
      <Navbar activeSection={activeSection} />

      {/* // Home section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center px-4"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-9xl font-bold text-[#9DB2BF]">
            Hi, I'm Gabriel!
          </h1>
          <p className="text-xl w-2xl font-serif text-shadow-lg/30 mt-6 text-[#DDE6ED]">
            Full-Stack Web Developer specializing in Front-End and Designing.
          </p>
          <div className="flex gap-6 mt-8">
            <a
              href="https://www.facebook.com/gabriel0794"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-5xl text-white drop-shadow hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://www.instagram.com/j.lacar/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-5xl text-white drop-shadow hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://github.com/gabriel0794" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-5xl text-white drop-shadow hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="mailto:lacar.johngabriel1@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaGoogle className="text-5xl text-white drop-shadow hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
          <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2">
            <a href="#about" aria-label="Scroll to About">
              <FaArrowCircleDown className="text-5xl text-white drop-shadow hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* // About section */}
      <section id="about" className="h-screen w-full scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col mr-24">
            <h2 className="text-4xl font-bold">My Name is:</h2>
            <h1 className="text-7xl font-bold text-[#9DB2BF] mt-2">
              John Gabriel M. Lacar
            </h1>
          </div>
          <div className="flex flex-col md:flex-row items-start max-w-6xl mx-auto mt-1 gap-12 px-6">
            <div className="ml-8 mt-8 text-justify">
              <p className="max-w-lg">
                Hello! My name is John Gabriel M. Lacar, a recent Bachelor of
                Science in Information Technology graduate from the University
                of Science and Technology of Southern Philippines (USTP).
              </p>
              <p className="max-w-lg mt-4">
                I discovered coding by chance through a random post on social
                media — what started as a joke quickly became a real passion.
                Since then, I’ve fallen in love with solving problems and
                building meaningful solutions through code. I enjoy transforming
                ideas into functional, real-world applications that make life
                easier and more efficient.
              </p>
              <p className="max-w-lg mt-4">
                I’m especially interested in back-end development, where I can
                focus on logic, data management, and system functionality. I
                thrive in team environments — sharing ideas, collaborating
                effectively, and contributing to a shared vision. I’m a fast
                learner, detail-oriented, adaptable, and always eager to grow as
                a developer.
              </p>
              <p className="max-w-lg mt-4">
                When I’m not coding, you’ll find me playing video games and
                instruments, vibing to music, singing, dancing, watching movies,
                or practicing the violin — hobbies that help keep me creative,
                focused, and balanced.
              </p>
              <p className="max-w-lg mt-4">
                I’m currently seeking opportunities to apply and further develop
                my back-end skills, front-end skills, contribute to impactful
                projects, and grow as a software developer.
              </p>
            </div>

            <div className="w-full md:w-1/3 flex justify-center mt-40 ml-12">
              <img
                src={MyPhoto}
                alt="John Gabriel M. Lacar"
                className="rounded-2xl size-svh object-cover shadow-lg"
              />
            </div>
          </div>

          {/* other content */}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="h-screen w-full scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-6xl font-bold text-[#9DB2BF] mt-12">
            Tech Stack
          </h2>
        </div>

        <div className="flex mt-20 justify-evenly flex-wrap text-[#DDE6ED]">
          {/* Front-end */}
          <div>
            <h3 className="text-4xl font-bold mb-4">Front-end</h3>
            <ul className="list-disc list-inside marker:text-[#DDE6ED] space-y-2">
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">React</span>
                <StarRating level={5} />
              </li>
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">HTML</span>
                <StarRating level={3} />
              </li>
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">Vite React</span>
                <StarRating level={5} />
              </li>
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">
                  Tailwind CSS
                </span>
                <StarRating level={4} />
              </li>
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">CSS</span>
                <StarRating level={4} />
              </li>
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">JavaScript</span>
                <StarRating level={4} />
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-4xl font-bold mb-4">Back-end</h3>
            <ul className="list-disc list-inside marker:text-[#DDE6ED] space-y-2">
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">Django</span>
                <StarRating level={4} />
              </li>
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">Laravel</span>
                <StarRating level={3} />
              </li>
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">Node.js</span>
                <StarRating level={4} />
              </li>
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">Python</span>
                <StarRating level={4} />
              </li>
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">JAVA</span>
                <StarRating level={3} />
              </li>
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">PHP</span>
                <StarRating level={2} />
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-4">Database</h3>
            <ul className="list-disc list-inside marker:text-[#DDE6ED] space-y-2">
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">MySQL</span>
                <StarRating level={3} />
              </li>
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">PostgreSQL</span>
                <StarRating level={5} />
              </li>
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">MongoDB</span>
                <StarRating level={4} />
              </li>
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">Oracle</span>
                <StarRating level={2} />
              </li>
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">SQL Server</span>
                <StarRating level={3} />
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-4">Tools</h3>
            <ul className="list-disc list-inside marker:text-[#DDE6ED] space-y-2">
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">Git</span>
                <StarRating level={4} />
              </li>
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">GitHub</span>
                <StarRating level={5} />
              </li>
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">Figma</span>
                <StarRating level={5} />
              </li>
              <li className="flex justify-between items-center">
                <span className="text-2xl font-thin list-item">Canva</span>
                <StarRating level={4} />
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 mt-24">
          <p className="">Note:</p>
          <p className="mt-2 font-thin">
            My current tech stack is based on my recent experiences and
            projects. I'm always learning and updating my skills to stay current
            with the latest trends and technologies.
          </p>
          <p className="mt-2 font-thin">
            Also, the tech stack I use to code this website is: React, Vite,
            Tailwind CSS, and GitHub.
          </p>
          <a
            href="https://github.com/gabriel0794/My_Portfolio.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-500 underline"
          >
            Source Code Here
          </a>
        </div>
        {/* other content */}
      </section>

      {/* Resume Section */}
      <section id="resume" className="min-h-screen w-full scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-6xl font-bold text-[#9DB2BF] mt-12">Resume</h2>
          <div
            className="border border-gray-300 p-6 mt-14 rounded-2xl hover:scale-105 transition-transform duration-300"
            style={{ boxShadow: "0 0 20px rgba(255, 255, 255, 0.6)" }}
          >
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold">John Gabriel M. Lacar</h2>
              <p className="font-bold">
                Front-end Developer | Junior Full-stack Developer
              </p>
              <p className="font-thin mt-2">
                <MdEmail className="inline" /> lacar.johngabriel1@gmail.com
              </p>
              <p className="font-thin">
                <FaPhone className="inline" /> +63 991 772 9314
              </p>
              <p className="font-thin">
                <GoHomeFill className="inline" /> Zone 2 Maken Street, Barra,
                Opol, Misamis Oriental, Philippines
              </p>
            </div>
            <hr className="border-t border-gray-300 my-6" />
            <div>
              <h2 className="text-3xl font-bold">Professional Summary</h2>
              <p className="font-thin mt-2">
                Motivated and detail-oriented Front-End Developer with a strong
                foundation in React JS, HTML, CSS, and JavaScript. Experienced
                in designing responsive, user-centric interfaces and skilled in
                both programming and hardware troubleshooting. Recognized by
                DENR-MGB X with a Letter of Commendation for professional
                contribution. Eager to grow in a dynamic development environment
                and continuously expand my knowledge in full-stack development.
              </p>
            </div>
            <hr className="border-t border-gray-300 my-6" />
            <div>
              <h2 className="text-3xl font-bold">Education</h2>
              <p className="font-bold mt-2">
                University of Science and Technology of Southern Philippines
              </p>
              <p className="font-bold">
                Bachelor of Science in Information Technology
              </p>
              <p className="font-thin">Graduated: 2025</p>
              <p className="font-bold mt-2">Liceo de Cagayan University</p>
              <p className="font-bold">Senior High School – ICT Strand</p>
              <p className="font-thin">SY. 2019 – 2021</p>
              <p className="font-bold mt-2">
                Misamis Oriental General Comprehensive High School
              </p>
              <p className="font-bold">Junior High School</p>
              <p className="font-thin">SY. 2015 – 2019</p>
              <p className="font-bold mt-2">Gusa Elementary School</p>
              <p className="font-bold">Elementary School</p>
              <p className="font-thin">SY. 2009 – 2015</p>
            </div>
            <hr className="border-t border-gray-300 my-6" />
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold">Technical Skills</h2>

              <div className="flex flex-row gap-12 mt-4">
                {/* Left column */}
                <div className="flex flex-col space-y-4">
                  <div>
                    <h3 className="font-bold">Front-end Development</h3>
                    <ul className="list-disc list-inside font-thin">
                      <li>React JS, HTML, CSS, JavaScript</li>
                      <li>Figma (Web UI/UX Design)</li>
                      <li>Canva (Graphic Design)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold">Back-end Development</h3>
                    <ul className="list-disc list-inside font-thin">
                      <li>Node.js, Express.js, Python, Laravel, Django</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold">Database</h3>
                    <ul className="list-disc list-inside font-thin">
                      <li>MySQL, PostgreSQL, MongoDB, Oracle, SQL Server</li>
                    </ul>
                  </div>
                </div>

                {/* Right column */}
                <div className="flex flex-col">
                  <h3 className="font-bold">Tools</h3>
                  <ul className="list-disc list-inside font-thin">
                    <li>Git, GitHub</li>
                  </ul>

                  <div className="mt-4">
                    <h3 className="font-bold">Hardware Troubleshooting</h3>
                    <ul className="list-disc list-inside font-thin">
                      <li>
                        Able to diagnose and fix common hardware issues: RAM,
                        CPU, GPU, power supplies, BIOS, CMOS
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-bold">Microsoft Office</h3>
                    <ul className="list-disc list-inside font-thin">
                      <li>Word, Powerpoint, Excel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border-t border-gray-300 my-6" />
            <div>
              <h2 className="text-3xl font-bold">Achievements</h2>
              <ul className="list-disc list-inside font-thin flex flex-row mt-2">
                <li className="font-bold">Certificate of Commendation</li>
                <p className="ml-2">
                  - Received from DENR-MGB X for my professional contribution.
                </p>
              </ul>
              <ul className="list-disc list-inside font-thin flex flex-row">
                <li className="font-bold">Dean's Lister</li>
                <p className="ml-2">
                  - 4th Year, 1st semester and 2nd semester, USTP
                </p>
              </ul>
            </div>
            <hr className="border-t border-gray-300 my-6" />
            <div>
              <h2 className="text-3xl font-bold">Expertise</h2>
              <div className="flex flex-row gap-24">
                <ul className="list-disc list-inside font-thin mt-2">
                  <li>Computer Literate</li>
                  <li>Problem Solver</li>
                  <li>Team Player</li>
                  <li>Quick Learner</li>
                </ul>
                <ul className="list-disc list-inside font-thin mt-2">
                  <li>Organized</li>
                  <li>Detail-Oriented</li>
                  <li>Leadership</li>
                </ul>
              </div>
            </div>
            <hr className="border-t border-gray-300 my-6" />
            <div>
              <h2 className="text-3xl font-bold">Languages</h2>
              <ul className="list-disc list-inside font-thin mt-2">
                <li>English</li>
                <li>Tagalog</li>
                <li>Cebuano</li>
              </ul>
            </div>
            <hr className="border-t border-gray-300 my-6" />

            <div className="flex flex-col">
              <h2 className="text-3xl font-bold">References</h2>

              <div className="flex flex-row gap-24 mt-4">
                <div className="flex flex-col">
                  <h3 className="font-bold text-xl">Rev. David Mark Pestaño</h3>
                  <p>Host Pastor | UPC-MCARC</p>
                  <p>Former Professor – Xavier University Data Sciences</p>
                  <p>
                    <FaPhone className="inline" /> +63 905 785 6548
                  </p>
                  <p>
                    <MdEmail className="inline" /> davidmark1028@gmail.com
                  </p>
                </div>

                <div className="flex flex-col">
                  <h3 className="font-bold text-xl">Doc. Randy Barro</h3>
                  <p>Veterinarian</p>
                  <p>ABC Veterinary Clinic / CEO</p>
                  <p>
                    <FaPhone className="inline" /> +63 968 582 8653
                  </p>
                  <p>
                    <MdEmail className="inline" /> randybarro.rbg@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <a
              href="/John Lacar Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#0F215E] hover:bg-[#070F2B] hover:text-white w-52 border-2 border-[#00000] rounded-lg mt-14 py-4 box-shadow-lg/30">
                Download Resume <FaArrowRight className="inline ml-2" />
              </button>
            </a>
          </div>
          {/* other content */}
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="min-h-screen w-full scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 mt-28">
          <h2 className="text-6xl font-bold text-[#9DB2BF] mt-12">Project</h2>
        </div>

        <div className="flex flex-col justify-center mt-4">
          <div className="flex flex-row gap-4 justify-center">
            <a href="https://github.com/DENR-MGB-GIS/denr_mgb.git" target="_blank" rel="noopener noreferrer" >
            <div className="max-h-96 w-96 box-shadow-lg/30 bg-[#27374D] rounded-lg p-8 flex flex-col mt-8 hover:scale-105 transition-transform duration-300 cursor-default">
              <h2 className="text-2xl font-bold">DENR-MGB X GeoHub</h2>
              <p className="mt-2 text-sm">
                Web based request for Geohazard Certification for DENR-MGB X
              </p>
              <p className="font-thin mt-8">React Vite</p>
              <p className="font-thin">Django</p>
              <p className="font-thin">05-16-2025</p>
              <div className="mt-4 flex justify-end">
                <FaGithub className="text-3xl text-white" />
              </div>
            </div>
            </a>

            <a href="https://github.com/gabriel0794/capstone.git" target="_blank" rel="noopener noreferrer" >
            <div className="max-h-96 w-96 box-shadow-lg/30 bg-[#27374D] rounded-lg p-8 flex flex-col mt-8 hover:scale-105 transition-transform duration-300 cursor-default">
              <h2 className="text-2xl font-bold">CAPSTONE PROJECT PetVet</h2>
              <p className="mt-2 text-sm">
                Web and Mobile based Identification System for Pets that are registered in the City Veterinary Office 10
              </p>
              <p className="font-thin mt-2">TypeScript</p>
              <p className="font-thin">MongoDB</p>
              <p className="font-thin">01-17-2025</p>
              <div className="mt-4 flex justify-end">
                <FaGithub className="text-3xl text-white" />
              </div>
            </div>
            </a>


            <div className="max-h-96 w-96 box-shadow-lg/30 bg-[#27374D] rounded-lg p-8 flex flex-col mt-8 hover:scale-105 transition-transform duration-300 cursor-default">
              <h2 className="text-2xl font-bold">Le-Patissier</h2>
              <p className="mt-2">
                E-Commerce for a pastry shop especially cakes
              </p>
              <p className="font-thin mt-8">HTML, CSS, JavaScript</p>
              <p className="font-thin">06-27-2023</p>
              <div className="mt-4 flex justify-end">
                <FaGithub className="text-3xl text-white" />
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-4 justify-center -mt-4">
            <a href="https://gabriel0794@bitbucket.org/johngabriel15/mobappfrontback.git" target="_blank" rel="noopener noreferrer" >
            <div className="max-h-96 w-96 box-shadow-lg/30 bg-[#27374D] rounded-lg p-8 flex flex-col mt-8 hover:scale-105 transition-transform duration-300 cursor-default">
              <h2 className="text-2xl font-bold">Mobile Login System</h2>
              <p className="mt-2 text-sm">
                My first project in Login Authentication for mobile programming
              </p>
              <p className="font-thin mt-8">React Native</p>
              <p className="font-thin">Django</p>
              <p className="font-thin">10-08-2024</p>
              <div className="mt-4 flex justify-end">
                <FaBitbucket className="text-3xl text-white" />
              </div>
            </div>
            </a>

            <a href="https://gabriel0794@bitbucket.org/johngabriel15/reactdjangoauth.git" target="_blank" rel="noopener noreferrer" >
            <div className="max-h-96 w-96 box-shadow-lg/30 bg-[#27374D] rounded-lg p-8 flex flex-col mt-8 hover:scale-105 transition-transform duration-300 cursor-default">
              <h2 className="text-2xl font-bold">Web Login Auth</h2>
              <p className="mt-2 text-sm">
                Web Login Authentication using Django for my first PIT
              </p>
              <p className="font-thin mt-8">TypeScript</p>
              <p className="font-thin">MongoDB</p>
              <p className="font-thin">04-19-2024</p>
              <div className="mt-4 flex justify-end">
                <FaBitbucket className="text-3xl text-white" />
              </div>
            </div>
            </a>
          </div>

          


          {/* other content */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen w-full scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-6xl font-bold text-[#9DB2BF] mt-12">Contact Me</h2>
          {/* other content */}
        </div>
        <div className="flex flex-col">
        <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default App;
