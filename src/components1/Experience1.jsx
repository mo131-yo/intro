

export const Experience1 = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-12 py-12">
      <div className="flex flex-col items-center gap-4">
        <div className="w-[115px] h-7 bg-gray-200 rounded-xl flex items-center justify-center">
          <p className="text-[14px] font-medium">Experience</p>
        </div>
        <p className="text-base md:text-lg font-normal text-center">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-6xl mt-8 gap-6 md:gap-12 shadow-[0px_2px_2px_0px_#0000000F 0px_4px_3px_0px_#00000012] p-4 md:p-6 rounded-lg">
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          <img src="/Column.png" alt="column" className="w-[102px] h-7 "/>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <p className="text-lg md:text-xl font-semibold text-gray-900">Sr. Frontend Developer</p>
           <div className="flex lg:flex-row-reverse ">
             <p className="sm:text4 font-normal text-#374151">Nov 2021 - Present</p>
          </div>
          <div className="text-sm md:text-base font-normal text-gray-600">
            <ul className="list-disc pl-5 space-y-1">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
