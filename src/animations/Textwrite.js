import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import CursorBlinker from './Cursorblinker';


export default function TextAnim(props) {
  const baseText = props.text;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 1.5,
      ease: "linear",
    });
    return controls.stop;
  }, []);

  return (
    <span>
      <motion.span>{displayText}</motion.span>
      <CursorBlinker />
    </span>
  );
}