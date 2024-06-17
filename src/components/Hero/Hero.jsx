
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col items-center lg:items-start">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-6xl font-thin tracking-tight pb-16 lg:mt-16 lg:text-8xl">
              Hi, I am Hien
            </h1>
            <span className="bg-gradient-to-r from-orange-300 via-gray-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent">
                Full Stack Developer
            </span>
            <p className="my-2 py-6 tracking-tighter max-w-xl font-light">
            I am a passionate full-stack developer with a strong passion for building robust and scalable web applications. My fast learning ability and eagerness to explore have driven me to hone my skills in front-end technologies such as React and Next.js, as well as mastering back-end technologies including Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to deliver innovative and effective solutions, contributing value to businesses and users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
