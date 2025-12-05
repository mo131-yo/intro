export const Work=({})=>{
    return(
        <div className="  flex flex-col justify-center">
            <div className="flex flex-col items-center p-12">
                <div className="w-[75px] h-7 bg-gray-200 rounded-xl">
                    <p className="text-[14px] font-medium flex justify-center">Work</p>
                </div>
                <p className="text-5 font-normal ">Some of the noteworthy projects I have built:</p>
           </div>
            <div className="flex flex-row w-100% h-120 justify-center shadow-[0px_2px_2px_0px_#0000000F,0px_4px_3px_0px_#00000012] ">
                <div className="bg-gray-100 w-xl h-120 p-12 ">
                   <img src="ubcab.png" alt="ubcab w-120 h-96 rounded-3 flex justify-center items-center " />
                </div>
                <div className="flex flex-col w-160 h-120 gap-6 p-12 ">
                    <p className="text-5 font-semibold">UBCAB</p>
                    <p className="text-4 font-normal pt-12px">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora incidunt deserunt repudiandae reprehenderit perspiciatis, est accusantium consequatur aperiam distinctio nemo velit inventore. Quasi!</p>
                    <div className="w-9 h-9 p-1.5">
                         <img src="/button.png" alt="buton" />
                    </div>
                </div>
            </div>
            <div>
                  <div className="w-100% h-120 flex flex-row-reverse justify-center relative top-12 rounded-3 shadow-[0px_2px_2px_0px_#0000000F,0px_4px_3px_0px_#00000012]">
               <div className="bg-gray-100 w-xl h-120 p-12">
                   <img src="Picture.png" alt="pic w-120 h-96 rounded-3 flex justify-center items-center " />
                </div>
                   <div className="flex flex-col w-160 h-120 gap-6 p-12 ">
                       <p className="font-semibold text-5 text-Gray/900">Mentorhub</p>
                      <p className="font-normal text-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                       <div className="w-9 h-9 p-1.5">
                           <img src="/button.png" alt="buton" />
                      </div>
                   </div>
             </div>
            </div>
             <div className="flex flex-row relative top-12 h-120 justify-center shadow-[0px_2px_2px_0px_#0000000F,0px_4px_3px_0px_#00000012]">
                <div className="bg-gray-100 w-xl h-120 p-12">
                   <img src="pic1.png" alt="pic1 w-120 h-96 rounded-3 flex justify-center items-center " />
                </div>
                <div className="flex flex-col w-160 h-120 gap-6 p-12 ">
                    <p className="text-5 font-semibold">iToim</p>
                    <p className="text-4 font-normal pt-12px">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora incidunt deserunt repudiandae reprehenderit perspiciatis, est accusantium consequatur aperiam distinctio nemo velit inventore. Quasi!</p>
                    <div className="w-9 h-9 p-1.5">
                         <img src="/button.png" alt="buton" />
                    </div>
                </div>
            </div>
        </div>
    )
}