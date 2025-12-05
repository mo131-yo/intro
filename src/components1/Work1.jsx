
export const Work1 = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center p-8 gap-4">
        <div className="w-[75px] h-7 bg-gray-200 rounded-xl flex items-center justify-center">
          <p className="text-[14px] font-medium">Work</p>
        </div>
        <p className="text-base md:text-lg font-normal text-center max-w-xl">Some of the noteworthy projects I have built:</p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full max-w-6xl mb-8 shadow-lg rounded-lg overflow-hidden md:pl-8">
        <div className="bg-gray-100 w-full md:w-1/3 flex justify-center p-4 md:p-8">
          <img src="ubcab.png" alt="ubcab" className="w-full h-auto rounded-md"/>
        </div>
        <div className="flex flex-col w-full md:w-2/3 gap-4 p-4 md:p-8">
          <p className="text-lg md:text-2xl font-semibold">UBCAB</p>
          <p className="text-sm md:text-base text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            incidunt deserunt repudiandae reprehenderit perspiciatis, est
            accusantium consequatur aperiam distinctio nemo velit inventore.
            Quasi!
          </p>
          <div className="w-9 h-9">
            <img src="/button.png" alt="button" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-12 w-full max-w-6xl mb-8 shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-100 w-full md:w-1/3 flex justify-center p-4 md:p-8">
          <img src="Picture.png" alt="mentorhub" className="w-full h-auto rounded-md"/>
        </div>
        <div className="flex flex-col w-full md:w-2/3 gap-4 p-4 md:p-8">
          <p className="text-lg md:text-2xl font-semibold text-gray-900">
            Mentorhub
          </p>
          <p className="text-sm md:text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className="w-9 h-9">
            <img src="/button.png" alt="button" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full max-w-6xl mb-8 shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-100 w-full md:w-1/3 flex justify-center p-4 md:p-8">
          <img
            src="pic1.png"
            alt="itoim"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="flex flex-col w-full md:w-2/3 gap-4 p-4 md:p-8">
          <p className="text-lg md:text-2xl font-semibold">iToim</p>
          <p className="text-sm md:text-base text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora incidunt deserunt repudiandae reprehenderit perspiciatis, est accusantium consequatur aperiam distinctio nemo velit inventore. Quasi!</p>
          <div className="w-9 h-9">
            <img src="/button.png" alt="button" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};