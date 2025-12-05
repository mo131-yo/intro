export const Logo= ({})=>{
    return(
    <div className="">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="w-[75px] h-7 bg-gray-200 rounded-xl">
          <div className="text-[14px] font-medium flex justify-center ">Skills</div>
        </div>
          <p className="text-5 font-normal flex justify-center">The skills, tools and technologies I am really good at:</p>
       </div>
      <div className="pl-20 pr-20 pt-px-24">
        <img src="row1.png" alt="row1 w-[1216px] h-25 flex justify-center"/>
        <img src="Row.png" alt="row w-[1216px] h-25  flex justify-center"/>
      </div>
    </div>
      )
};
