// import { useState } from "react";
// import Hamburger from "../../assets/hamburger.svg";
// import { motion } from "framer-motion";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
//       <header className="bg-[#161b1b] text-white px-6 py-4 relative z-50">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="flex items-center gap-18">
//             <a href="#" className="text-2xl font-black tracking-wider">
//               <motion.h1
//                 initial={{ opacity: 0, x: -100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 BKR
//               </motion.h1>
//             </a>

//             <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300 dm-sans_p">
//               <a href="#" className="hover:text-white transition-colors">
//                 About
//               </a>
//               <a href="#" className="hover:text-white transition-colors">
//                 Products
//               </a>
//               <a href="#" className="hover:text-white transition-colors">
//                 Recipes
//               </a>
//             </nav>
//           </div>

//           <div className="hidden md:block oswald-p font-normal text-[16px]">
//             <a
//               href="#"
//               className="border border-gray-600 px-6 py-2.5 text-xs font-semibold tracking-widest uppercase hover:border-white transition-colors"
//             >
//               Contact
//             </a>
//           </div>

//           <button
//             type="button"
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden w-10 h-10 rounded-full bg-[#F4A261] flex items-center justify-center text-black focus:outline-none"
//             aria-label="Toggle Menu"
//           >
//             {isOpen ? (
//               <svg
//                 className="w-5 h-5 text-[white]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <img src={Hamburger} alt="hamburger-icon" className="w-5 h-5" />
//             )}
//           </button>
//         </div>

//         {isOpen && (
//           <nav className="md:hidden absolute top-full left-0 w-full bg-[#191C1B] border-t border-gray-800 px-6 py-6 flex flex-col gap-4 text-center z-50">
//             <a
//               href="#"
//               onClick={() => setIsOpen(false)}
//               className="text-gray-300 hover:text-white py-1"
//             >
//               About
//             </a>
//             <a
//               href="#"
//               onClick={() => setIsOpen(false)}
//               className="text-gray-300 hover:text-white py-1"
//             >
//               Products
//             </a>
//             <a
//               href="#"
//               onClick={() => setIsOpen(false)}
//               className="text-gray-300 hover:text-white py-1"
//             >
//               Recipes
//             </a>
//             <a
//               href="#"
//               onClick={() => setIsOpen(false)}
//               className="inline-block mt-2 border border-gray-600 px-6 py-2.5 text-xs font-semibold tracking-widest uppercase hover:border-white text-center"
//             >
//               Contact
//             </a>
//           </nav>
//         )}
//       </header>
//     </>
//   );
// }

import { useState } from "react";
import Hamburger from "../../assets/hamburger.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#161b1b] text-white px-6 py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-18">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-black tracking-wider"
          >
            <motion.h1
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              BKR
            </motion.h1>
          </motion.a>

          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center gap-8 text-sm text-gray-300 dm-sans_p"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2, color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="transition-colors"
            >
              About
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2, color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="transition-colors"
            >
              Products
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2, color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="transition-colors"
            >
              Recipes
            </motion.a>
          </motion.nav>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden md:block oswald-p font-normal text-[16px]"
        >
          <motion.a
            href="#"
            whileHover={{
              scale: 1.05,
              borderColor: "#fff",
              backgroundColor: "#F4A261",
              color: "#000",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="border border-gray-600 px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-colors"
          >
            Contact
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="md:hidden"
        >
          <motion.button
            type="button"
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.9,
              rotate: 90,
            }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-full bg-[#F4A261] flex items-center justify-center text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <motion.svg
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            ) : (
              <motion.img
                src={Hamburger}
                alt="hamburger-icon"
                className="w-5 h-5"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#191C1B] border-t border-gray-800 px-6 py-6 flex flex-col gap-4 text-center z-50"
          >
            <motion.a
              href="#"
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 10, color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 py-1"
            >
              About
            </motion.a>

            <motion.a
              href="#"
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 10, color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 py-1"
            >
              Products
            </motion.a>

            <motion.a
              href="#"
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 10, color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 py-1"
            >
              Recipes
            </motion.a>

            <motion.a
              href="#"
              onClick={() => setIsOpen(false)}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#F4A261",
                color: "#000",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-2 border border-gray-600 px-6 py-2.5 text-xs font-semibold tracking-widest uppercase text-center"
            >
              Contact
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
