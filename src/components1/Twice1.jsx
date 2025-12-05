
export const Twice1 = ({}) => {
  return (
    <div className="bg-[#F9FAFB] w-full flex justify-center px-4 py-12 md:px-20 md:py-24">
      <div className="flex flex-col gap-8 md:gap-12 items-start w-full max-w-6xl">
        <div className="w-[105px] h-7 bg-gray-200 rounded-xl ">
          <p className="text-[14px] font-medium flex justify-center ">About me</p>
        </div>
        <div className="flex justify-center  ">
          <img src="/hoh.jpg" alt="hoh" className="w-[250px] sm:w-full h-auto rounded-lg "/>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-black text-lg md:text-[30px] font-semibold">
            Me? Here you have it:
          </p>

          <div className="flex flex-col gap-4 text-sm md:text-base text-gray-700">
            <p>
              I'm a designer turned full stack developer, passionate about React.js
              and Node.js. I excel in blending technical and visual aspects to craft
              exceptional digital products, prioritizing user experience, precise
              design, and optimized code.
            </p>
            <p>
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my early
              thirties, seven years in, I'm building cutting-edge web apps using
              Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
            </p>
            <p>
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for tech
              insights and public project updates on Twitter or GitHub.
            </p>
            <p>Finally, some quick bits about me.</p>
            <p>Full time freelancer.</p>
            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};