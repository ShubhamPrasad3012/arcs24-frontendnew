import React from 'react';

export default function Part5() {
  return (
    <div className='lg:flex mt-[0vh]'>
      <div className="content1 ml-[17vw] mt-[0vh] lg:mt-[3.7926675094816686vh] lg:ml-[19.5vw] w-[61.3828125vw] lg:w-[27.799479166666668vw] order-1 lg:order-2">
        <p className='p1 ml-[5vw] lg:ml-[0] w-[57.3828125vw] lg:w-[27.799479166666668vw] font-source-serif lg:mt-[0.6321112515802781vh] text-[1.463rem] lg:text-3xl font-bold leading-[145%] tracking-[0.3604166666666667vw]'>
          <span className='t1 text-blurple ml-[2.8vw]'>Date: </span>12th June
        </p>
        <p className='p1 ml-[7vw] lg:ml-[0] w-[57.3828125vw] lg:w-[27.799479166666668vw] font-source-serif lg:mt-[0.6321112515802781vh] text-2xl lg:text-3xl font-bold leading-[145%] tracking-[0.3604166666666667vw]'>
          <span className='t1 text-blurple ml-[2.8vw]'>Venue: </span>Foodys
        </p>
        <p className='p1 ml-[5vw] lg:ml-[0] w-[77.3828125vw] lg:w-[27.799479166666668vw] font-source-serif lg:mt-[0.6321112515802781vh] text-2xl lg:text-3xl font-bold leading-[145%] tracking-[0.3604166666666667vw]'>
          <span className='t1 text-blurple ml-[2.8vw]'>Price: </span>Rs 200 Only
        </p>
      </div>
      

<button
    className="flex items-center justify-center no-underline font-normal uppercase"
  >
    <svg className="mt-[2vw] ml-[7.5vw] mb-[4vh] w-[85.182291666666668vw] h-[16.321112515802781vh] lg:mb-[8vh] lg:h-[6.826801517067004vh] lg:mt-[9.578002528445005vh] lg:ml-[10.067708333333334vw] lg:w-[35.807291666666664vw] order-2 lg:order-1 
        "   preserveAspectRatio="xMidYMid meet">
      <image href="./reg.svg" width="100%" height="100%" className="glow-on-hover"/>
      <text x="50%" y="50%" dx="4" dy="-3" dominantBaseline="middle" textAnchor="middle" fill="white" className="font-rugen text-[3vh]">Register Now</text>
    </svg>
  </button>

    </div>
  );
}