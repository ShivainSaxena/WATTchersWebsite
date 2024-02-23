import { motion } from "framer-motion";
import '../App.css';


const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1, 0],
    transition: {
      duration: 1,
      repeat: 2,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 0.5, 1]
    }
  }
};

export default function CursorBlinker() {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="cursor"
    />
  );
}