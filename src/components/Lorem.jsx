import React from "react";
import {Rubik_Mono_One} from "next/font/google";

const rubik = Rubik_Mono_One({
    subsets:["latin"],
    weight:"400",
})

export const Lorem=({})=>{
    return(
        <div className="w-full flex flex-col bg-amber-700 items-center">
            <div class="bg-#FFFFFF w-full h-27 pr-8 pl-8">
            <div className="flex justify-between">
                 <div className={rubik.className}>TOM</div>
                   <div className="flex gap-[15px]">
             <div className="text-black text-2xl">About</div>
             <div className=" text-black text-2xl">Work</div>
             <div className="text-black text-2xl">Testimonials</div>
             <div className="text-black text-2xl">contact</div>
           </div>
            </div>
            </div>
            <div className="w-wdh h-[556px] bg-purple-150 flex justify-between gap-12">
                <div>
                          <div className="w-[600px] h-[364px] pr-8 pl-8">
                    <p className="text-[60px] text-#111827">Hi, I`m Orgil👋</p>
                    <p className="text-[16px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores architecto dolor cumque dicta. Earum amet eum ad et asperiores delectus hic fugit pariatur?</p>
                    <div className="flex">
                      <img src="/Vector.png" alt="icon w-4 h-5 items-center" />
                        <p>Ulaanbaatar, Mongolia</p>
                    </div>
                     <div className="flex h-6">
                        <div className="bg-green-700 w-3 h-3 rounded-full flex items-center justify-center"></div>
                        <p>Available for new projects</p>
                    </div>
                    <img src="/Actions.png" alt="action w-[600px] h-[36px]" />
                   
                </div>
                </div>
                 <div>
                        <img src="/hoh.jpg" alt="pic w-70 h-80 relative left-248px" />
                </div>
            </div>
        </div>
    )
}



