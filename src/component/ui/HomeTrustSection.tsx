import React from "react";
import { motion, type Variants } from "framer-motion";

const creators = [
    { name: "John Doe", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=75" },
    { name: "Robert Johnson", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=60" },
    { name: "Jane Smith", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=60" },
    { name: "Emily Davis", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=60" },
    { name: "Tyler Durden", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" },
    { name: "Dora", img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" },
];


// Avatar animation
const avatarVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        rotate: (Math.random() - 0.5) * 20,
        transition: { delay: i * 0.1, type: "spring", stiffness: 120 },
    }),
    hover: { scale: 1.2, zIndex: 10 },
};

// Star animation
const starVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
        scale: 1,
        opacity: 1,
        transition: { delay: 0.6 + i * 0.1, duration: 0.3 },
    }),
};

const HomeTrustSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center mt-10 mb-10">


            {/* Avatars */}
            <div className="flex -space-x-4 mb-4">
                {creators.map((creator, index) => (
                    <motion.div
                        key={index}
                        className="relative"
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        variants={avatarVariants}
                    >
                        <div className="rounded-xl overflow-hidden border-2 border-neutral-100 border-solid relative">
                            {/* Tooltip */}
                            <motion.span
                                initial={{ opacity: 0, y: 5 }}
                                whileHover={{ opacity: 1, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-[-3rem] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded w-full text-center pointer-events-none"
                            >
                                {creator.name}
                            </motion.span>

                            <img
                                src={creator.img}
                                alt={creator.name}
                                className="h-14 w-14 object-cover"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Stars */}
            <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                    <motion.svg
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={starVariants}
                        className={`h-4 w-4 mx-1 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </motion.svg>
                ))}
            </div>

            <p className="text-neutral-400 text-sm text-center">
                Trusted by 100+ users
            </p>
        </div>
    );
};

export default HomeTrustSection;