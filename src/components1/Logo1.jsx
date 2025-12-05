
export const Logo1 = ({}) => {
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-20 py-12">
      <div className="flex flex-col items-center gap-4">
        <div className="w-[75px] h-7 bg-gray-200 rounded-xl flex items-center justify-center">
          <div className="text-[14px] font-medium">Skills</div>
        </div>
        <p className="text-sm md:text-base font-normal text-center max-w-xl">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="w-full flex flex-col gap-4 mt-8">
        <img
          src="row1.png"
          alt="row1"
          className="w-full max-w-[1216px] h-auto mx-auto"
        />
        <img
          src="Row.png"
          alt="row2"
          className="w-full max-w-[1216px] h-auto mx-auto"
        />
      </div>
    </div>
  );
};