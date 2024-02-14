import { motion } from "framer-motion";

export const RotateAnimation = () => (
  <motion.div
  
    whileHover={{ scale: 1.0, rotate: 20 }}
    // whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
  >
    <a
      href="https://apps.apple.com/jp/app/%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88%E6%B2%BB%E7%99%82%E6%94%AF%E6%8F%B4%E3%82%A2%E3%83%97%E3%83%AA-metto/id6450113230?platform=iphone"
      className="flex mt-3items-center ml-4"
    >
      <img src="./img/appQR_ios.png" alt="" />
    </a>
  </motion.div>
);
