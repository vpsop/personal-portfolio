import { ConnectCard } from "@/components/ConnectCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCard } from "@/components/SkillCard";
import { TopNav } from "@/components/TopNav";
import { barlow, barlowSemiCondensed } from "@/fonts";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { IoArrowForward } from "react-icons/io5";


export default function Home() {
  return (
    <div className="px-6 md:px-12 lg:px-20">
      <TopNav />

      {/* divide page in 2 sections */}

      <div className="place-items-center lg:place-items-start gap-6 grid grid-cols-1 lg:grid-cols-8 mt-16">

        {/* Left Section for the card */}
        <div className="lg:top-10 lg:sticky lg:col-span-3 bg-[#d9d9d9] lg:mx-20 px-4 py-10 rounded-lg max-w-[400px] md:max-w-[350px] max-h-fit">
          <div className="relative bg-[#AD2903] rounded-lg aspect-square">
            <img className="-top-2 -left-2 absolute aspect-square scale-105" src="/profile-pic.png" alt="varun pratap singh" />
          </div>
          <p className="mt-8 font-bold text-[#141311] text-3xl text-center uppercase">Varun Pratap Singh</p>
          <p className={`mt-6 px-2 font-light text-[#6f7074] text-center ${barlow.className}`}>A developer dedicated to develop scalable and reliable solutions</p>

          <div className="flex justify-around items-center mt-8 px-8">
            <a href="mailto:vpsop544@gmail.com">
              <MdOutlineEmail color="#AD2903" size={26} />
            </a>

            <a href="https://instagram.com/varunpratap_13">
              <FaInstagram color="#AD2903" size={24} />
            </a>

            <a href="https://linkedin.com/in/vpsop">
              <LiaLinkedin color="#AD2903" size={28} />
            </a>
          </div>
        </div>




        {/* Right Section for the info */}
        <div className="lg:col-span-5 md:mt-12 lg:mt-0 max-w-full">
          <h3 className={`font-extrabold text-6xl leading-[57px]  lg:text-9xl uppercase lg:leading-[114px] ${barlowSemiCondensed.className}`}>Software <br />
            <span className="text-[#353334]">
              Developer
            </span>
          </h3>
          <p className={`mt-2 lg:mt-6 px-0 lg:px-2 font-light text-[#6f7074] text-xl ${barlow.className}`}>
            Passionate about developing scalable and reliable solutions. Specialized in web application development.
          </p>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mt-12 ml-0 lg:ml-2 max-w-full">
            <div className="flex flex-col bg-[#f46c38] lg:mr-10 p-4 pl-8 rounded-lg">
              <img src="/layout-icon.png" alt="projects-icon" height="30px" width="30px" className="mt-4" />
              <p className={`${barlowSemiCondensed.className} uppercase font-bold text-4xl tracking-wide mt-2`}>Projects</p>
              <p className={`${barlow.className} mt-1 text-[#e2e3e5]`}>Explore my work</p>
              <div className="border-[#e2e3e5] border-2 hover:bg-[#e2e3e5] mt-4 px-4 py-2 rounded-lg hover:text-[#353334] transition-all duration-300 cursor-pointer self-end">
                <a href="#projects"><IoArrowForward /></a>
              </div>
            </div>


            <div className="flex flex-col bg-[#c4ff41] lg:mr-10 p-4 pl-8 rounded-lg">
              <img src="/stack-icon.png" alt="projects-icon" height="30px" width="30px" className="mt-4" />
              <p className={`${barlowSemiCondensed.className} uppercase font-bold text-4xl tracking-wide mt-2 text-[#353334]`}>Resume</p>
              <p className={`${barlow.className} mt-1 text-[#474d36]`}>Skills and Experience</p>
              <div className="border-[#353334] border-2 hover:bg-[#353334] mt-4 px-4 py-2 rounded-lg text-[#353334] hover:text-[#e2e3e5] transition-all duration-300 cursor-pointer group self-end">
                <a href="https://drive.google.com/file/d/1Af8eSYzKXlytu30tVgMhHG80sh192Xn_/view?usp=sharing"><IoArrowForward/></a>
                
              </div>
            </div>
          </div>


          {/* TECH STACK & TOOLS SECTION */}

          <div className="mt-12 lg:mt-20">
            <h3 className={`font-extrabold text-6xl leading-[57px] lg:text-9xl uppercase lg:leading-[114px] ${barlowSemiCondensed.className} whitespace-nowrap`}>Tech stack
              <br />
              <span className="text-[#353334]">
                & Tools
              </span>
            </h3>
          </div>


          <div className="gap-x-2 gap-y-8 grid grid-cols-1 md:grid-cols-2 mt-12">

            <SkillCard
              logoURL="/skill-logos/nodejs-logo.png"
              skillName="Node"
              skillType="Backend Framework"
            />

            <SkillCard
              logoURL="/skill-logos/nextjs-logo.png"
              skillName="NextJS"
              skillType="Full Stack Framework"
            />


            <SkillCard
              logoURL="/skill-logos/flutter-logo.png"
              skillName="Flutter"
              skillType="App Development"
            />


            <SkillCard
              logoURL="/skill-logos/firebase-logo.png"
              skillName="Firebase"
              skillType="Managed Backend"
            />


            <SkillCard
              logoURL="/skill-logos/mongodb-logo.png"
              skillName="MongoDB"
              skillType="Database"
            />

            <SkillCard
              logoURL="/skill-logos/postgresql-logo.png"
              skillName="PostgreSQL"
              skillType="Database"
            />

          </div>


          {/* PROJECT WORK SECTION */}

          <div className="mt-12 lg:mt-20" id="projects">
            <h3 className={`font-extrabold text-6xl leading-[57px] lg:text-9xl uppercase lg:leading-[114px] ${barlowSemiCondensed.className} whitespace-nowrap`}>Project
              <br />
              <span className="text-[#353334]">
                Work
              </span>
            </h3>
          </div>


          <div className="space-y-12 mt-12">
            <ProjectCard
              name="Personal Portfolio"
              description="A modern and responsive personal portfolio designed to showcase my skills, projects, and professional journey. Developed using Next.js for its powerful server-side rendering capabilities, seamless routing, and exceptional performance."
              url="/"
              date="February 2025"
            />

            <ProjectCard
              name="CommentSure"
              description="An Instagram Comment-to-DM Automation Tool using Next.js and Supabase. This tool streamlines lead generation by automatically sending personalized DMs to users who comment on Instagram posts."
              url="https://commentsure.com"
              date="November 2024 - Ongoing"
            />

          </div>




          {/* Connect With Me SECTION */}

          <div className="mt-20" id="contact">
            <h3 className={`font-extrabold text-6xl leading-[57px] lg:text-9xl uppercase lg:leading-[114px] ${barlowSemiCondensed.className} whitespace-nowrap`}>Connect
              <br />
              <span className="text-[#353334]">
                With Me
              </span>
            </h3>
          </div>


          <div className="space-y-12 mt-12">
            <ConnectCard
              Icon={MdOutlineEmail}
              url="mailto:vpsop544@gmail.com"
              platform="Mail"
              handle="vpsop544@gmail.com"
            />

            <ConnectCard
              Icon={FaInstagram}
              url="https://instagram.com/varunpratap_13"
              platform="Instagram"
              handle="varunpratap_13"
            />


            <ConnectCard
              Icon={LiaLinkedin}
              url="https://linkedin.com/in/vpsop"
              platform="Linkedin"
              handle="linkedin.com/in/vpsop"
            />
          </div>


        </div>
      </div>


      {/* FOOTER */}

      <div className="h-20">

      </div>
    </div>
  );
}
