export const Experience=({})=>{
   return (
    <div>
       <div className="flex flex-col items-center p-12">
                <div className="w-[115px] h-7 bg-gray-200 rounded-xl">
                    <p className="text-[14px] font-medium flex justify-center">Experience</p>
                </div>
                <p className="text-5 font-normal ">Some of the noteworthy projects I have built:</p>
           </div>
       <div className="flex w-4xl h-72 relative left-42 md:shadow-[0px_2px_2px_0px_#0000000F ,0px_4px_3px_0px_#00000012]">
         <div>
            <img src="/Column.png" alt="column w-51.5 h-7" />
         </div>
         <div className="w-4xl h-74  flex  flex-col">
            <p className="text-5 font-semibold text-gray-900">Sr.Frontend Developer</p>
            <div className="text-4 font-normal text-gray-600">
              <ul className="list-disc">
               <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
               <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
               <li>Sed quis justo ac magna.</li>
               <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              </div>
           </div>
         </div>
       </div>
    )}