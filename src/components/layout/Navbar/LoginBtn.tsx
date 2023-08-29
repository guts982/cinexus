"use client"
import { motion } from "framer-motion";

const LoginBtn = () => {
    return (
        <motion.div whileHover={{ scale: 1.1 }}
        whileTap={{ y: 5, transition: { duration: 0.2, type: "ease" } }}
        className="text-primary-foreground cursor-pointer font-semibold ">
            Login
        </motion.div>
    );
};

export default LoginBtn;