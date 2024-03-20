import { motion } from "framer-motion";

function TypingText(props) {
  const text = `${props.text}`.split(" ");

  return (
    <div className="">
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 5 }}
          transition={{
            duration: 3,
            delay: i / 2,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
}

export default TypingText;
