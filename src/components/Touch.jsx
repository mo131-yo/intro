export const Touch=({})=>{
    return(
<div className="relative top-24 p-12">
   <div className="flex flex-col items-center">
       <div className="w-[122px] h-7 bg-ff rounded-xl">
          <p className="text-[14px] font-medium flex justify-center">Get in touch</p>
      </div>
      <p className="text-5 md:4 font-normal w-full h-14 md:h-28 text-center pt-6">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
      <div className="pt-12 ">
       <div className="flex flex-row p-3 w-[380px] h-11 justify-center">
        <img src="icon1.png" alt="icon w-8 h-8 " />
        <p className="font-semibold text-9 text-saaral">tom@pinecone.mn</p>
        <img src="icon3.png" alt="icon3 w-8 h-8 " />
      </div>
      <div className="flex flex-row p-3 w-[380px] h-11 justify-center">
        <img src="icon2.png" alt="icon2 w-8 h-8" />
        <p className="font-semibold text-9 text-saaral">+976 88112233</p>
        <img src="icon3.png" alt="icon3 w-8 h-8 " />
      </div>
      </div>
      <p className="font-normal text-4 pt-12">You may also find me on these platforms!</p>
      <div className="flex flex-row w-[312px] h-9 justify-center ">
        <img src="cat.png" alt="cat w-8 h-8" />
        <img src="bird.png" alt="bird w-3 h-3" />
        <img src="breed.png" alt="w-8 h-8" />
      </div>
  </div>
</div>
    )
}