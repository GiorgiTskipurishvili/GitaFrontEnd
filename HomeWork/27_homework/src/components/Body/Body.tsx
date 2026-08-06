import { AnimatePresence, motion } from "framer-motion";
import Bitmap from "../../assets/Bitmap.png";
import Drop from "../../assets/drop.svg";
import Up from "../../assets/up.svg";
import Down from "../../assets/down.svg";
import GreenShape from "../../assets/greenOfShape.png";
import CombinedShaped from "../../assets/CombinedShape.png";
import Fresh from "../../assets/FreshIcon.svg"
import Natural from "../../assets/NaturalIcon.svg"
import Tasty from "../../assets/TastyIcon.svg"
import OrangeCombinedShape from "../../assets/OrangeCombinedShape.svg"
import Triangle from "../../assets/Triangle.svg"
import GoldStars from "../../assets/goldStars.svg"
import LocationAdress from "../../assets/location.svg"
import Phone from "../../assets/phone.svg"
import Facebook from "../../assets/facebook.svg"
import Twitter from "../../assets/twitter.svg"
import Instagram from "../../assets/instagram.svg"

import { useState } from "react";


const testimonials = [
  {
    title: "Very, Very Delicious",
    text: "Nothing the copy said could convince her and so it didn't take long. A small river named Duden flows by their",
  },
  {
    title: "Best Bakery in Town",
    text: "Copy Writers ambushed her, made her drunk with Longe and Parole. A small river named Duden flows by their place",
  },
  {
    title: "Well Organized",
    text: "And if she hasn't been rewritten, then they are still using her. A small river named Duden flows by their place",
  },
];


export default function Body() {
    const [activeIndex, setActiveIndex] = useState(1);
  return (
    <>
<section className="bg-[#161b1b] relative">
  <div className="w-[92%] max-w-7xl m-auto flex flex-col">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pt-16 md:pt-24">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-start text-left order-2 md:order-1 md:max-w-md"
      >
        <p className="oswald-p text-[14px] tracking-[3px] uppercase text-white font-normal mb-4">
          Sience 1984
        </p>
        <h1 className="text-white leading-tight mb-4 text-[32px] md:text-[40px]">
          Fresh Bakery Every Day
        </h1>
        <p className="dm-sans_p text-gray-300 mb-8">
          Even the all-powerful Pointing has no control about the blind
          texts it is an almost.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="order-1 md:order-2 md:w-1/2 flex justify-center"
      >
        <img src={Bitmap} alt="bitmap" />
      </motion.div>
    </div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ amount: 0.3 }}
  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
  className="flex justify-center py-10 md:py-16"
>
  <motion.div
    whileHover={{ scale: 1.1, borderColor: "#ffffff" }}
    whileTap={{ scale: 0.9 }}
    className="border-2 rounded-full w-16 h-16 flex justify-center items-center border-[#F5AE5C] cursor-pointer"
  >
    <img src={Drop} alt="drop" />
  </motion.div>
</motion.div>
  </div>
</section>

      <section className="bg-[#f6d4af] py-16 md:py-24">
        <div className="w-[92%] max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-[420px] h-[430px]">
              <img
                src={GreenShape}
                alt="greenShape"
                className="absolute bottom-0 left-0 w-[320px] z-0"
              />
              <img
                src={CombinedShaped}
                alt="dotes"
                className="absolute top-0 right-0 w-[80px] z-30"
              />
              <div className="absolute top-0 left-0 bg-black w-[207px] h-[207px] z-10"></div>
              <div className="absolute top-[125px] left-[95px] bg-[#CCCCCC] w-[210px] h-[230px] z-20"></div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <p className="oswald-p text-[14px] tracking-[3px] uppercase text-[#171B1B] font-normal mb-3">
              About Us
            </p>
            <h2
              className="text-[#171B1B] text-[28px] md:text-[36px] leading-tight mb-8"
              style={{ fontFamily: '"Ultra", serif' }}
            >
              Baking Special Moments
            </h2>

            <div className="flex gap-6">
              <div className="flex flex-col gap-3 shrink-0">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-black flex justify-center items-center"
                >
                  <img src={Up} alt="up-icon" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-black flex justify-center items-center"
                >
                  <img src={Down} alt="down-icon" />
                </motion.button>
              </div>

              <div className="flex flex-col gap-3">
                <p className="oswald-p text-[16px] font-normal text-[#171B1B]">
                  01
                </p>
                <p className="oswald-p text-[20px] font-normal text-[#171B1B]">
                  Last view back
                </p>
                <p className="dm-sans_p text-[#3333337F] text-[16px] font-normal">
                  She packed her seven versalia, put her initial into the belt
                  and made herself on the way. When she reached the first hills
                  of the Italic.
                </p>
                <p className="dm-sans_p text-[#171B1B] text-[16px] font-normal mt-2">
                  On the skyline
                </p>
                <p className="dm-sans_p text-[#171B1B] text-[16px] font-normal">
                  Pityful a rethoric
                </p>
                <p className="dm-sans_p text-[#171B1B] text-[16px] font-normal">
                  On her way she
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


<section className="bg-[#f6d4af] py-16 md:py-24">
  <div className="w-[92%] max-w-7xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <p className="oswald-p text-[14px] tracking-[3px] uppercase text-[#171B1B] font-normal mb-3">
        Our Features
      </p>
      <h2 className="text-[#171B1B] text-[28px] md:text-[36px] leading-tight" style={{ fontFamily: '"Ultra", serif' }}>
        Baked With Love
      </h2>
    </motion.div>

    <div className="relative bg-white flex flex-col md:flex-row items-stretch">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex-1 p-10 md:p-12 flex flex-col gap-4"
      >
        <img src={Fresh} alt="fresh-icon" className="w-10 h-10" />
        <h3 className="text-[22px] font-bold" style={{ fontFamily: '"Ultra", serif' }}>Fresh</h3>
        <span className="dm-sans_p font-normal text-[16px] text-[#3333337F]">
          Nothing the copy said could convince her and so it didn't take long.
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex-1 p-10 md:p-12 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-gray-100"
      >
        <img src={Natural} alt="natural-icon" className="w-10 h-10" />
        <h3 className="text-[22px] font-bold" style={{ fontFamily: '"Ultra", serif' }}>Natural</h3>
        <span className="dm-sans_p font-normal text-[16px] text-[#3333337F]">
          Copy Writers ambushed her, made her drunk with Longe and Parole.
        </span>
      </motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ amount: 0.3 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="relative md:-my-6 md:mr-[-1px] w-full md:w-[332px] bg-[#9EAD8D] p-10 md:p-12 flex flex-col gap-4 shadow-xl overflow-hidden"
>
  <div className="absolute -top-16 -right-16 w-[220px] h-[220px] bg-[#F5AE5C] rounded-full z-0"></div>

  <img src={Tasty} alt="tasty-icon" className="relative w-12 h-12 z-10 mt-2" />

  <h3 className="relative z-10 text-[22px] font-bold text-[#171B1B] mt-6" style={{ fontFamily: '"Ultra", serif' }}>
    Tasty
  </h3>
  <span className="relative z-10 dm-sans_p font-normal text-[16px] text-[#33333380]">
    And if she hasn't been rewritten, then they are still using her.
  </span>
</motion.div>

    </div>
  </div>
</section>

<section className="bg-[#171B1B] py-16 md:py-24 overflow-hidden relative">
  <div className="w-[92%] max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="relative w-full md:w-1/2 flex justify-center md:justify-start"
>
  <div className="relative w-[240px] h-[240px] flex items-center justify-center">
    <img
      src={OrangeCombinedShape}
      alt="orange-dotes"
      className="absolute top-0 left-0 w-[130px] z-10"
    />
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="absolute bottom-0 right-0 bg-white w-[160px] h-[160px] flex justify-center items-center rounded-full z-0 shadow-lg"
    >
      <img src={Triangle} alt="triangle-icon" />
    </motion.button>
  </div>
</motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left"
    >
      <p className="oswald-p text-[14px] tracking-[3px] uppercase text-white font-normal">
        Our Video
      </p>
      <h2 className="text-white text-[28px] md:text-[36px] leading-tight" style={{ fontFamily: '"Ultra", serif' }}>
        Story Behind Every Piece
      </h2>
    </motion.div>

  </div>
</section>

<section className="bg-[#f6d4af] py-16 md:py-24">
  <div className="w-[92%] max-w-7xl mx-auto">

    {/* სათაური */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <p className="oswald-p text-[14px] tracking-[3px] uppercase text-[#171B1B] font-normal mb-3">
        Our Products
      </p>
      <h2 className="text-[#171B1B] text-[28px] md:text-[36px] leading-tight" style={{ fontFamily: '"Ultra", serif' }}>
        Baked Fresh Every Morning
      </h2>
    </motion.div>

    {/* პროდუქტების ბადე */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Homemade Bread - დიდი ბარათი, 2 სვეტი, ტექსტი overlay-ით */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="md:col-span-2 relative overflow-hidden bg-gray-500 h-[448px] md:h-[448px]"
      >
        <div className="absolute inset-0 flex items-end justify-between p-8">
          <div className="flex flex-col gap-2 max-w-[70%]">
            <p className="oswald-p text-[13px] tracking-[2px] uppercase text-white/70 font-normal">
              Bakery
            </p>
            <h1 className="text-white leading-tight" style={{ fontFamily: '"Ultra", serif' }}>
              Homemade Bread
            </h1>
            <p className="dm-sans_p text-[#FFFFFF80] text-[16px] font-normal">
              Flows by their place and supplies it with the necessary regelialia.
            </p>
          </div>
          <h1 className=" text-white font-normal shrink-0">$9</h1>
        </div>
      </motion.div>

      {/* Bread - მარტივი ბარათი, სურათი + თეთრი ინფო ბლოკი */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="overflow-hidden bg-white flex flex-col h-[448px] md:h-[448px]"
      >
        <div className="bg-gray-400 flex-1"></div>
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <p className="oswald-p text-[16px] tracking-[2px] uppercase text-[#171B1B] font-normal">Bakery</p>
            <p className="oswald-p text-[24px] text-[#171B1B] font-normal ">Bread</p>
          </div>
          <h1 className=" text-[#171B1B]">$5</h1>
        </div>
      </motion.div>

      {/* Cupcake */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className=" overflow-hidden bg-white flex flex-col h-[448px]"
      >
        <div className="bg-gray-400 flex-1"></div>
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <p className="oswald-p text-[16px] tracking-[2px] uppercase text-[#171B1B] font-normal">Pastry</p>
            <p className="oswald-p text-[24px] text-[#171B1B] font-normal ">Cupcake</p>
          </div>
          <h1 className="text-[#171B1B]">$3</h1>
        </div>
      </motion.div>

      {/* Biscuits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className=" overflow-hidden bg-white flex flex-col h-[448px]"
      >
        <div className="bg-gray-400 flex-1"></div>
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <p className="oswald-p text-[16px] tracking-[2px] uppercase text-[#171B1B] font-normal">Sweet</p>
            <p className="oswald-p text-[24px] text-[#171B1B] font-normal ">Biscuits</p>
          </div>
          <h1 className="text-[#171B1B]">$2</h1>
        </div>
      </motion.div>

      {/* Brioche */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className=" overflow-hidden bg-white flex flex-col h-[448px]"
      >
        <div className="bg-gray-400 flex-1"></div>
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <p className="oswald-p text-[16px] tracking-[2px] uppercase text-[#171B1B] font-normal">Pastry</p>
            <p className="oswald-p text-[24px] text-[#171B1B] font-normal ">Brioche</p>
          </div>
          <h1 className="text-[#171B1B]">$5</h1>
        </div>
      </motion.div>

    </div>

    {/* Explore ღილაკი */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex justify-center mt-12"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="oswald-p border border-[#171B1B] px-8 py-3 text-xs font-semibold tracking-widest uppercase text-[#171B1B] hover:bg-[#171B1B] hover:text-white transition-colors"
      >
        Explore
      </motion.button>
    </motion.div>

  </div>
</section>

<section className="bg-[#171B1B] py-16 md:py-24 overflow-hidden">
  <div className="w-[92%] max-w-7xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className="oswald-p text-[14px] tracking-[3px] uppercase text-white font-normal mb-3">
        Our Process
      </p>
      <h2 className="text-white text-[28px] md:text-[36px] leading-tight" style={{ fontFamily: '"Ultra", serif' }}>
        How We Work
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0 items-center">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 h-[260px] flex flex-col gap-3"
      >
        <p className="oswald-p text-[13px] text-[#3333337F] font-normal">01</p>
        <h3 className="text-[22px] font-bold text-[#171B1B]" style={{ fontFamily: '"Ultra", serif' }}>
          Contact
        </h3>
        <p className="dm-sans_p text-[15px] text-[#3333337F]">
          Nothing the copy said could convince her and so it didn't take long.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative bg-[#9EAD8D] p-8 h-[300px] md:-my-6 flex flex-col gap-3 overflow-hidden z-10"
      >
        <div className="absolute -top-10 right-0 w-[130px] h-[130px] bg-[#F5AE5C] rounded-full"></div>
        <p className="oswald-p text-[13px] text-[#171B1B] font-normal relative z-10">02</p>
        <h3 className="text-[22px] font-bold text-[#171B1B] relative z-10" style={{ fontFamily: '"Ultra", serif' }}>
          Baking
        </h3>
        <p className="dm-sans_p text-[15px] text-[#171B1B]/70 relative z-10">
          The copy said could convince her and so it didn't take long.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white p-8 h-[260px] flex flex-col gap-3"
      >
        <p className="oswald-p text-[13px] text-[#3333337F] font-normal">03</p>
        <h3 className="text-[22px] font-bold text-[#171B1B]" style={{ fontFamily: '"Ultra", serif' }}>
          Delivery
        </h3>
        <p className="dm-sans_p text-[15px] text-[#3333337F]">
          Nothing the copy said could convince her and so it didn't take.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white p-8 h-[260px] flex flex-col gap-3"
      >
        <p className="oswald-p text-[13px] text-[#3333337F] font-normal">04</p>
        <h3 className="text-[22px] font-bold text-[#171B1B]" style={{ fontFamily: '"Ultra", serif' }}>
          Tasty
        </h3>
        <p className="dm-sans_p text-[15px] text-[#3333337F]">
          Copy said could convince her and so it didn't take long.
        </p>
      </motion.div>

    </div>
  </div>
</section>

<section className="bg-[#171B1B] py-16 md:py-24 relative overflow-hidden">
  <div className="w-[92%] max-w-7xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <p className="oswald-p text-[14px] tracking-[3px] uppercase text-white font-normal mb-3">
        Our Recipes
      </p>
      <h2 className="text-white text-[28px] md:text-[36px] leading-tight" style={{ fontFamily: '"Ultra", serif' }}>
        Explore Sweet & Delicious Recipes
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-[570px_270px_270px] gap-6 justify-center md:justify-start">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-[570px] h-auto md:h-[736px] overflow-hidden bg-white flex flex-col md:row-span-2"
      >
        <div className="bg-gray-400 h-[280px] md:h-[420px]"></div>
        <div className="flex items-center justify-between px-6 py-5">
          <div className="flex flex-col gap-2">
            <p className="oswald-p text-[12px] tracking-[2px] uppercase text-[#3333337F] font-normal">Bakery</p>
            <h3 className="text-[22px] font-bold text-[#171B1B]" style={{ fontFamily: '"Ultra", serif' }}>Delicious Bread</h3>
            <p className="dm-sans_p text-[14px] text-[#3333337F] max-w-[220px]">
              Flows by their place and supplies it with the necessary regelialia.
            </p>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <span className="dm-sans_p text-[14px] text-[#3333337F]">5 min</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full md:w-[270px] h-[200px] md:h-[352px] overflow-hidden bg-white flex flex-col"
      >
        <div className="bg-gray-400 flex-1"></div>
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-2">
            <p className="oswald-p text-[12px] uppercase text-[#3333337F] font-normal">Bakery</p>
            <div className="flex items-center gap-1">
              <span className="dm-sans_p text-[13px] text-[#3333337F]">10 min</span>
            </div>
          </div>
          <p className="dm-sans_p text-[15px] text-[#171B1B]">Malted wheat flake bread</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="w-full md:w-[270px] h-[200px] md:h-[352px] overflow-hidden bg-white flex flex-col"
      >
        <div className="bg-gray-400 flex-1"></div>
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-2">
            <p className="oswald-p text-[12px] uppercase text-[#3333337F] font-normal">Bakery</p>
            <div className="flex items-center gap-1">
              <span className="dm-sans_p text-[13px] text-[#3333337F]">7 min</span>
            </div>
          </div>
          <p className="dm-sans_p text-[15px] text-[#171B1B]">Biscoff cake with lotus biscuits</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-[270px] h-[200px] md:h-[352px] overflow-hidden bg-white flex flex-col"
      >
        <div className="bg-gray-400 flex-1"></div>
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-2">
            <p className="oswald-p text-[12px] uppercase text-[#3333337F] font-normal">Bakery</p>
            <div className="flex items-center gap-1">
              <span className="dm-sans_p text-[13px] text-[#3333337F]">5 min</span>
            </div>
          </div>
          <p className="dm-sans_p text-[15px] text-[#171B1B]">Peanut butter and chocolate cake</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="w-full md:w-[270px] h-[200px] md:h-[352px] overflow-hidden bg-white flex flex-col"
      >
        <div className="bg-gray-400 flex-1"></div>
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-2">
            <p className="oswald-p text-[12px] uppercase text-[#3333337F] font-normal">Bakery</p>
            <div className="flex items-center gap-1">
              <span className="dm-sans_p text-[13px] text-[#3333337F]">15 min</span>
            </div>
          </div>
          <p className="dm-sans_p text-[15px] text-[#171B1B]">Malted wheat flake bread</p>
        </div>
      </motion.div>

    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex justify-center mt-12"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="oswald-p border border-white/30 px-8 py-3 text-xs font-semibold tracking-widest uppercase text-white hover:bg-white hover:text-[#171B1B] transition-colors"
      >
        Explore
      </motion.button>
    </motion.div>

  </div>
</section>
<section className="bg-[#f6d4af] py-16 md:py-24">
  <div className="w-[92%] max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center">

    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full md:w-1/2"
    >
      <p className="oswald-p text-[14px] tracking-[3px] uppercase text-[#171B1B] font-normal mb-3">
        Our Baker
      </p>
      <h2 className="text-[#171B1B] text-[28px] md:text-[36px] leading-tight mb-8" style={{ fontFamily: '"Ultra", serif' }}>
        Meet Our Professional Baker
      </h2>

      <div className="flex gap-6">
        <div className="flex flex-col gap-3 shrink-0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-black flex justify-center items-center"
          >
            <img src={Up} alt="up-icon" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-black flex justify-center items-center"
          >
            <img src={Down} alt="down-icon" />
          </motion.button>
        </div>

        <div className="flex flex-col gap-3">
          <p className="oswald-p text-[16px] font-normal text-[#171B1B]">Baker</p>
          <p className="oswald-p text-[20px] font-normal text-[#171B1B]">Stina Gunnarsdottir</p>
          <p className="dm-sans_p text-[#3333337F] text-[16px] font-normal">
            She packed her seven versalia, put her initial into the belt and made herself on the way.
          </p>
          <p className="dm-sans_p text-[#171B1B] text-[16px] font-normal mt-2">Jaquon Hart</p>
          <p className="dm-sans_p text-[#171B1B] text-[16px] font-normal">Oluchi Mazi</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      className="w-full md:w-1/2 flex justify-center"
    >
      <div className="relative w-[280px] h-[340px] md:w-[340px] md:h-[400px] flex items-start justify-center">

        <div className="absolute -top-6 w-[70px] h-[70px] border-[3px] border-[#F5AE5C] rounded-full z-30"
             style={{ clipPath: "inset(0 0 50% 0)" }}>
        </div>


        <img
          src={GreenShape}
          alt="greenShape"
          className="absolute bottom-0 right-0 w-[260px] z-0"
        />

        <img
          src={CombinedShaped}
          alt="dotes"
          className="absolute top-16 left-0 w-[70px] z-10"
        />

        <div className="absolute top-6 bg-white w-[280px] h-[300px] md:w-[330px] md:h-[350px] z-20 shadow-lg"></div>

      </div>
    </motion.div>

  </div>
</section>

    <section className="bg-[#f6d4af] py-16 md:py-24 overflow-hidden">
      <div className="w-[92%] max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="oswald-p text-[14px] tracking-[3px] uppercase text-[#171B1B] font-normal mb-3">
            Testimonials
          </p>
          <h2 className="text-[#171B1B] text-[28px] md:text-[36px] leading-tight" style={{ fontFamily: '"Ultra", serif' }}>
            People Say About Our Bakery
          </h2>
        </motion.div>

        <div className="hidden md:flex items-stretch justify-center">
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={index}
                animate={{
                  scale: isActive ? 1.05 : 1,
                  zIndex: isActive ? 10 : 1,
                }}
                transition={{ duration: 0.4 }}
                className={`w-[340px] p-10 flex flex-col gap-4 ${
                  isActive ? "bg-[#9EAD8D]" : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <img src={GoldStars} alt="rating" className="h-4" />
                  <div className="w-16 h-16 rounded-full bg-gray-300 shrink-0"></div>
                </div>
                <h3 className="text-[20px] font-bold text-[#171B1B]" style={{ fontFamily: '"Ultra", serif' }}>
                  {item.title}
                </h3>
                <p className="dm-sans_p text-[15px] text-[#3333337F]">
                  "{item.text}"
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="md:hidden flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[340px] p-8 flex flex-col gap-4 bg-[#9EAD8D]"
            >
              <div className="flex items-center justify-between">
                <img src={GoldStars} alt="rating" className="h-4" />
                <div className="w-14 h-14 rounded-full bg-gray-300 shrink-0"></div>
              </div>
              <h3 className="text-[20px] font-bold text-[#171B1B]" style={{ fontFamily: '"Ultra", serif' }}>
                {testimonials[activeIndex].title}
              </h3>
              <p className="dm-sans_p text-[15px] text-[#3333337F]">
                "{testimonials[activeIndex].text}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className={`rounded-full transition-colors ${
                index === activeIndex
                  ? "w-3 h-3 bg-[#171B1B]"
                  : "w-2.5 h-2.5 bg-[#9EAD8D]/60"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>


<section className="bg-[#f6d4af] py-16 md:py-24">
  <div className="w-[92%] max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center">

    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full md:w-1/2 flex justify-center"
    >
<div className="relative w-[280px] h-[380px] md:w-[350px] md:h-[470px] flex items-start">

  <img
    src={GreenShape}
    alt="green"
    className="absolute bottom-0 right-[-40px] w-[220px] z-0"
  />

  <img
    src={CombinedShaped}
    alt="dotes"
    className="absolute top-[110px] right-[-50px] w-[60px] z-10"
  />

  <div className="absolute top-6 left-0 bg-white w-[280px] h-[370px] md:w-[350px] md:h-[465px] z-20 shadow-lg"></div>

  <div
    className="absolute -top-2 left-1/2 -translate-x-1/2 w-[70px] h-[70px] border-[3px] border-[#F5AE5C] rounded-full z-30"
    style={{ clipPath: "inset(0 0 50% 0)" }}
  ></div>

</div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      className="w-full md:w-1/2"
    >
      <p className="oswald-p text-[14px] tracking-[3px] uppercase text-[#171B1B] font-normal mb-3">
        Get In Touch
      </p>
      <h2 className="text-[#171B1B] text-[28px] md:text-[36px] leading-tight mb-10" style={{ fontFamily: '"Ultra", serif' }}>
        Contact With Us
      </h2>

      <div className="flex flex-col sm:flex-row gap-10 sm:gap-12 mb-10">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-black flex justify-center items-center shrink-0">
            <img src={LocationAdress} alt="location-icon" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="oswald-p text-[13px] text-[#3333337F] font-normal">01</p>
            <h3 className="text-[18px] font-bold text-[#171B1B]" style={{ fontFamily: '"Ultra", serif' }}>Address</h3>
            <span className="dm-sans_p text-[14px] text-[#3333337F]">
              764 Richardson Rd. Bethpage, NY 11714
            </span>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-black flex justify-center items-center shrink-0">
            <img src={Phone} alt="phone-icon" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="oswald-p text-[13px] text-[#3333337F] font-normal">02</p>
            <h3 className="text-[18px] font-bold text-[#171B1B]" style={{ fontFamily: '"Ultra", serif' }}>Phone</h3>
            <span className="dm-sans_p text-[14px] text-[#3333337F]">
              +1 (234) 567-89-02
            </span>
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="oswald-p border border-[#171B1B] px-8 py-3 text-xs font-semibold tracking-widest uppercase text-[#171B1B] hover:bg-[#171B1B] hover:text-white transition-colors"
      >
        Contact Us
      </motion.button>
    </motion.div>

  </div>
</section>


    <footer className="bg-[#171B1B] pt-16 pb-8 relative overflow-hidden">
      <div className="w-[92%] max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-8 text-center md:text-left items-center md:items-start"
        >

          <div>
            <h2 className="text-white text-[24px] font-black tracking-wider">BKR</h2>
          </div>

          <div className="flex flex-col gap-4">
            <p className="oswald-p text-[13px] tracking-[3px] uppercase text-white font-normal">
              Menu
            </p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="dm-sans_p text-[15px] text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#" className="dm-sans_p text-[15px] text-gray-300 hover:text-white transition-colors">Product</a>
              <a href="#" className="dm-sans_p text-[15px] text-gray-300 hover:text-white transition-colors">Recipes</a>
              <a href="#" className="dm-sans_p text-[15px] text-gray-300 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <p className="oswald-p text-[13px] tracking-[3px] uppercase text-white font-normal">
              Service
            </p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="dm-sans_p text-[15px] text-gray-300 hover:text-white transition-colors">Bakery</a>
              <a href="#" className="dm-sans_p text-[15px] text-gray-300 hover:text-white transition-colors">Delivery</a>
              <a href="#" className="dm-sans_p text-[15px] text-gray-300 hover:text-white transition-colors">Catering</a>
              <a href="#" className="dm-sans_p text-[15px] text-gray-300 hover:text-white transition-colors">Corporate</a>
            </nav>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-start">
            <p className="oswald-p text-[13px] tracking-[3px] uppercase text-white font-normal">
              Social
            </p>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-11 h-11 rounded-full bg-[#F5AE5C] flex justify-center items-center"
              >
                <img src={Facebook} alt="facebook-icon" className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-11 h-11 rounded-full bg-[#F5AE5C] flex justify-center items-center"
              >
                <img src={Twitter} alt="twitter-icon" className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-11 h-11 rounded-full bg-[#F5AE5C] flex justify-center items-center"
              >
                <img src={Instagram} alt="instagram-icon" className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-700/60 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="dm-sans_p text-[14px] text-gray-500 text-center">
            Copyright © 2020 Laaqiq. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="dm-sans_p text-[14px] text-gray-300 hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="dm-sans_p text-[14px] text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </motion.div>

      </div>
    </footer>



    </>
  );
}
