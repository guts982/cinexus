import { motion } from "framer-motion";

interface IToggleMenu {
  isOpen: boolean;
  toggle: () => void;
  classes?: string;
}

const ToggleMenu = ({ isOpen, toggle, classes }: IToggleMenu) => {
 

  const ham = {
    top: {
      hidden: {},
      show: {
        rotateZ: isOpen ? 45 : 0,
        y: isOpen ? "8px" : 0,
      },
    },

    middle: {
      hidden: {},
      show: {
        x: isOpen ? "30px" : 0,
        transition: { duration: 0.3 },
        opacity: isOpen ? 0 : 1,
      },
    },

    bottom: {
      hidden: {},
      show: {
        rotateZ: -1 * (isOpen ? 45 : 0),
        y: isOpen ? "-8px" : 0,
      },
    },
    transition :{
        type: "spring",
        mass:2,
        stiffness: 120,
      }
  };

  const defaultClasses = `
  sm:hidden flex justify-center items-center gap-[5px] flex-col h-[20px] outline-none`;

  return (
    <>
      <motion.button
        onClick={toggle}
        className={defaultClasses}
        whileHover={{
          scale: 1.1,
          transition:{type:"tween",duration:".1"}
        }}
        
      >
        <motion.div
          initial={ham.top.hidden}
          animate={ham.top.show}
          transition={ham.transition}
          className="h-[3px] w-[24px] rounded-md  bg-secondary-foreground dark:bg-accent"
        />

        <motion.div
          initial={ham.middle.hidden}
          animate={ham.middle.show}
          transition={ham.transition}
          className="h-[3px] w-[24px] rounded-md  bg-secondary-foreground dark:bg-accent"
        />

        <motion.div
          initial={ham.bottom.hidden}
          animate={ham.bottom.show}
          transition={ham.transition}
          className="h-[3px] w-[24px] rounded-md  bg-secondary-foreground dark:bg-accent"
        />
      </motion.button>
    </>
  );
};

export default ToggleMenu;
