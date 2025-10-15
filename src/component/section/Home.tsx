import HomeTrustSection from "../ui/HomeTrustSection";

const Home = () => {
    return (
        <div className="flex min-h-screen flex-col gap-7 text-gray-800 items-center   py-20 text-center">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-8xl 
               bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 
               bg-clip-text text-transparent">
                Discover New Connections Around You
            </h1>

            <p className="text-lg md:text-xl   max-w-2xl text-gray-600">
                Find people who are engaged in the activities happening around you.
                Discover everything you need in one app.
            </p>
            <HomeTrustSection />
        </div>
    );
};

export default Home;