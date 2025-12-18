import { Carousel } from './Carousel';

export const About: React.FC = () => {
  return (
    <div
      id="about"
      className="py-24 px-[10%] relative z-10"
    >
      {/* Section Heading */}
      <h4 className="autoShow font-['Roboto_Condensed'] text-[28px] font-light text-white uppercase tracking-[0.15em] mb-2.5">
        About Me
      </h4>

      {/* Divider */}
      <div className="autoShow mb-16">
        <img
          src="https://res.cloudinary.com/atelier22/image/upload/c_scale,w_10/v1499770011/divider_p5wiwx.svg"
          alt="divider"
          className="w-20 opacity-30 mx-auto"
        />
      </div>

      {/* Profile Image Card */}
      <div className="autoShow my-10 flex justify-center">
        <div className="relative group">
          {/* Card Container with gradient background */}
          <div className="relative w-[280px] h-[360px] rounded-[32px] overflow-hidden bg-gradient-to-b from-[#d4a574]/20 via-[#4a6278]/10 to-[#2d3e50]/20 shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 ease-out group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.25)] group-hover:scale-[1.02]">

            {/* Connecting Status Badge */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-[#d4a574] rounded-full animate-pulse"></div>
              <span className="text-xs font-light text-[#1a2332] tracking-wide">Available</span>
            </div>

            {/* Profile Image */}
            <div className="absolute inset-0 flex items-center justify-center pt-16">
              <div className="relative">
                <img
                  src="/ismail-graduation.jpg"
                  alt="Ismail Abdirahman"
                  className="w-[240px] h-[280px] object-cover rounded-[24px] transition-all duration-500 ease-out"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/30 via-transparent to-transparent rounded-[24px] pointer-events-none"></div>
              </div>
            </div>

            {/* Bottom Info Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl transition-all duration-300 ease-out group-hover:bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#d4a574]">
                    <img
                      src="/ismail-graduation.jpg"
                      alt="Ismail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1a2332]">Ismail Abdirahman</p>
                    <p className="text-xs text-[#8b9db0]">Community Leader</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#d4a574] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="autoShow max-w-[800px] mx-auto">
        <p className="my-5 text-base leading-relaxed text-gray-300">
          I am a dynamic community development professional with extensive experience in youth empowerment and operations management.
        </p>
        <p className="my-5 text-base leading-relaxed text-gray-300">
          I combine strategic leadership with hands-on project execution to drive sustainable social impact across Kenyan communities.
        </p>
        <p className="my-5 text-base leading-relaxed text-gray-300">
          My expertise spans from coordinating multi-faith youth initiatives to managing construction sites, always focusing on creating opportunities for marginalized groups.
        </p>
      </div>

      {/* Carousel */}
      <div className="autoShow mt-4">
        <Carousel />
      </div>
    </div>
  );
};
