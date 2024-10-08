import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Part5() {
  AOS.init();
  return (
    <div className="mt-[0vh] md:flex" data-aos="fade-left">
      <div className="content1 order-1 ml-[17vw] mt-[0vh] w-[61.3828125vw] sm:ml-[28.5vw] md:order-2 md:ml-[19.5vw] md:mt-[3.7926675094816686vh] md:w-[27.799479166666668vw]">
        <p className="p1 w-[87.3828125vw] font-source-serif text-[1.463rem] font-bold leading-[145%] tracking-[0.3604166666666667vw] md:ml-[0] md:mt-[0.6321112515802781vh] md:w-[27.799479166666668vw] md:text-xl">
          <span className="t1 ml-[2.8vw] text-blurple">Date: </span>22nd
          September
        </p>
        <p className="p1 ml-[1.5vw] w-[87.3828125vw] font-source-serif text-2xl font-bold leading-[145%] tracking-[0.3604166666666667vw] md:ml-[0] md:mt-[0.6321112515802781vh] md:w-[27.799479166666668vw] md:text-xl">
          <span className="t1 ml-[2.8vw] text-blurple">Venue: </span>TT Voc
        </p>
        <p className="p1 w-[77.3828125vw] font-source-serif text-2xl font-bold leading-[145%] tracking-[0.3604166666666667vw] md:ml-[0] md:mt-[0.6321112515802781vh] md:w-[27.799479166666668vw] md:text-xl">
          <span className="t1 ml-[2.8vw] text-blurple">Price: </span>₹200
        </p>
      </div>

      <button className="!important flex items-center justify-center font-normal uppercase no-underline sm:mb-[5vh]">
        <a
          href="https://gravitas.vit.ac.in/events/5387f16e-b092-470a-b918-e89307526ebf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="order-2 ml-[7.5vw] mt-[2vw] h-[16.321112515802781vh] w-[85.182291666666668vw] md:order-1 md:ml-[10.067708333333334vw] md:mt-[9.578002528445005vh] md:h-[5vh] md:w-[40vw] lg:h-[6.826801517067004vh] lg:w-[35.807291666666664vw]"
            preserveAspectRatio="xMidYMid meet"
          >
            <image
              href="./reg.svg"
              width="100%"
              height="100%"
              className="glow-on-hover"
            />
            <text
              x="50%"
              y="50%"
              dx="4"
              dy="-3"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="white"
              className="font-rugen text-[3vh]"
            >
              Register Now
            </text>
          </svg>
        </a>
      </button>
    </div>
  );
}
