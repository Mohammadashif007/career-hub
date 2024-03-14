import bannerImg from "../../assets/images/user.png";

const Hero = () => {
    return (
        <div className="flex items-center justify-center w-4/5 mx-auto">
            <div className="flex flex-col items-start  gap-5">
                <h1 className="text-6xl font-bold">
                    One Step Closer To Your{" "}
                    <span className="text-cyan-700 ">Dream Job</span>
                </h1>
                <p>
                    Explore thousands of job opportunities with all the
                    information you need. Its your future. Come find it. Manage
                    all your job application from start to finish.
                </p>
                <button className="px-10 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff] text-[18px] rounded-xl">
                    Get Started
                </button>
            </div>
            <div>
                <img width="100%" src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;
