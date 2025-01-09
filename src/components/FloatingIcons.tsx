import React from "react";
import { motion } from "framer-motion";

// New set of colorful and varied icons (mix of emojis and SVGs)
const icons = [
  "💻", // Laptop
  "🚀", // Rocket
  "📱", // Mobile
  "🖌️", // Brush
  "🛠️", // Tools
  "🌟", // Star
  "📂", // Folder
  "🎨", // Palette
  "⚙️", // Gear
  "🔗", // Link
  "🏏 ",
  "🏃‍♂️‍➡️",
  "🏋️‍♀️",
  "🎯",
  "🌐",
  "🌎",
  "🥇",
  "🏆",
];

const FloatingIcons: React.FC = () => {
  const generateRandom = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  return (
    <>
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{
            x: generateRandom(-200, 200),
            y: generateRandom(-200, 200),
          }}
          animate={{
            x: generateRandom(-200, 200),
            y: generateRandom(-200, 200),
            rotate: 360,
          }}
          transition={{
            duration: generateRandom(5, 10),
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            position: "absolute",
            fontSize: `${generateRandom(30, 50)}px`, // Bigger size for variety
            top: generateRandom(0, 100) + "%",
            left: generateRandom(0, 100) + "%",
            color: `hsl(${generateRandom(0, 360)}, 70%, 70%)`, // Dynamic vibrant colors
          }}
        >
          {icon}
        </motion.div>
      ))}
    </>
  );
};

export default FloatingIcons;
