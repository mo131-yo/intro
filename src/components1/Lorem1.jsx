import { Rubik_Mono_One } from "next/font/google";

const rubik = Rubik_Mono_One({
  subsets: ["latin"],
  weight: "400",
});

export const Lorem1 = () => {
  return (
    <div className="w-full flex flex-col bg-white items-center">
      <div className="bg-white w-full px-4 py-4 md:px-8 md:py-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 md:gap-0">
          <div className={`${rubik.className} text-xl md:text-2xl font-bold`}>TOM</div>
          <div className="flex flex-row gap-2 md:gap-6 text-black text-lg md:text-delete ">
            <div >About</div>
            <div>Work</div>
            <div>Testimonials</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-12 px-4 md:px-8 py-8 bg-purple-150">
        {/* <div className=" flex-1  justify-center  lg:justify-end mt-6 lg:mt-0">
          <img src="/hoh.jpg" alt="pic" className="w-[150px] sm:w-50 md:w-60 lg:w-[350px] h-auto rounded-lg "/>
        </div> */}
        <div className="flex-1 flex flex-col gap-4">
        <div className=" flex-1  justify-center  lg:justify-end mt-6 lg:mt-0">
          <img src="/hoh.jpg" alt="pic" className="w-[150px] sm:w-50 md:w-60 lg:w-[350px] h-auto rounded-lg "/>
        </div>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-saaral font-bold">
            Hi, I’m Orgil 👋
          </p>
          <p className="text-sm sm:text-base md:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            architecto dolor cumque dicta. Earum amet eum ad et asperiores
            delectus hic fugit pariatur?
          </p>

          <div className="flex items-center gap-2 text-sm sm:text-base">
            <img src="/Vector.png" alt="icon" className="w-4 h-5" />
            <p>Ulaanbaatar, Mongolia</p>
          </div>

          <div className="flex items-center gap-2 text-sm sm:text-base">
            <div className="bg-green-700 w-3 h-3 rounded-full"></div>
            <p>Available for new projects</p>
          </div>

          <img
            src="/Actions.png"
            alt="actions"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] h-9"
          />
        </div>
        {/* <div className="flex-1 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <img src="/hoh.jpg" alt="pic" className="w-[150px] sm:w-50 md:w-60 lg:w-[350px] h-auto rounded-lg"/>
        </div> */}
      </div>
    </div>
  );
};