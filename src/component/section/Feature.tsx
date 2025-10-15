import { HiOutlineCalendar, HiOutlineUsers, HiOutlineChatAlt, HiOutlineMap, HiOutlineStar, HiOutlineBell } from "react-icons/hi";
import Card from "../ui/Card";

const cards = [
  {
    icon: <HiOutlineCalendar className="text-white w-7 h-7" />,
    title: "Plan or Join Activities",
    content:
      "Create your own activities or discover exciting events happening around you. From sports to movies, find your tribe.",
  },
  {
    icon: <HiOutlineUsers className="text-white w-7 h-7" />,
    title: "Connect with People",
    content:
      "Meet like-minded people nearby who share your interests and hobbies. Build real-world friendships effortlessly.",
  },
  {
    icon: <HiOutlineChatAlt className="text-white w-7 h-7" />,
    title: "Instant Messaging",
    content:
      "Communicate with your friends and groups instantly, coordinate meetups, and share updates in real-time.",
  },
  {
    icon: <HiOutlineMap className="text-white w-7 h-7" />,
    title: "Discover Nearby Events",
    content:
      "Explore activities and events happening around you. Find trending sports, movies, or local meetups easily.",
  },
  {
    icon: <HiOutlineStar className="text-white w-7 h-7" />,
    title: "Trusted & Verified",
    content:
      "All users are verified to ensure a safe and friendly environment. Trust and authenticity are our top priorities.",
  },
  {
    icon: <HiOutlineBell className="text-white w-7 h-7" />,
    title: "Stay Notified",
    content:
      "Get instant notifications about events, friend requests, and activity updates so you never miss out.",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      {/* Heading Section */}
      <div className="text-center max-w-2xl mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-purple-700 via-pink-500 to-pink-500 bg-clip-text text-transparent">
            MeetMux?
          </span>
        </h2>

        <p className="text-gray-600 text-lg">
          Everything you need to discover, connect, and build meaningful relationships in the real world.
        </p>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default Features;