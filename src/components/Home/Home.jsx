import React from "react";
import { Link } from "react-router-dom";
import bgOne from "/assets/Home/bg-1.png";
import bgTwo from "/assets/Home/bg-2.png";
import bgThree from "/assets/Home/bg-3.png";
import figureOne from "/assets/Home/girdOne/figure-1.png";
import figureTwo from "/assets/Home/girdOne/figure-2.png";
import figureThree from "/assets/Home/girdOne/figure-3.png";
import figureFour from "/assets/Home/girdOne/figure-4.png";
import figureFive from "/assets/Home/divSecond/figure-1.png";
import figureSix from "/assets/Home/divSecond/figure-2.png";
import appleBlackLogo from "/assets/Home/appleblacklogo.png";
import CarouselHome from "./CarouselHome";
import { motion, MotionConfig } from "framer-motion";

const Home = () => {
  const slides = [<div>Slide 1</div>, <div>Slide 2</div>, <div>Slide 3</div>];
  return (
    <>
      <section className="bg-[#F5F5F7]">
        <div>
          {/* bg-1 */}
          <div
            style={{
              backgroundImage: `url(${bgOne})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="h-screen text-white text-center pt-20 shadow-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold">Apple Shopping Event</h1>
              <h2 className="mt-4 mb-3 text-gray-500 leading-tight">
                From November 25 to 28, get an Apple Gift <br /> Card when you
                buy an eligible product.1
              </h2>
              <Link className="text-[#2997FF] " to="">
                Get an early look
              </Link>
            </motion.div>
          </div>
          {/* bg-1 */}

          {/* bg-2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: `url(${bgTwo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="h-screen text-white text-center my-6 shadow-2xl mb-6"
          ></motion.div>
          {/* bg-2 */}

          {/* bg-3 Iphone Sections starts here */}
          <div className=" text-center shadow-xl bg-[#fbfbfa] items-center justify-center flex flex-col pt-20 mb-6">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="pb-9"
            >
              <h1 className="text-5xl font-bold">iPhone 15</h1>
              <h2 className="mt-4 mb-3 text-gray-500 leading-tight">
                Big and bigger.
              </h2>
              <Link className="text-[#2997FF] " to="">
                Learn more &nbsp; &nbsp; Buy
              </Link>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              src={bgThree}
              alt=""
            />
          </div>
          {/* bg-3 Iphone Sections starts here */}

          {/* bg-4 Grid starts here */}
          <div className="px-20 h-auto shadow-xl bg-white mb-6 grid grid-cols-2 gap-5 py-7">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.03 }}
              className="relative shadow-md"
            >
              <img className="z-0 w-[49vw] rounded" src={figureOne} alt="" />
              <div className="z-10 absolute inset-0 flex flex-col text-center -translate-y-40 justify-center items-center text-white">
                <h3 className="text-3xl font-bold">iPhone 15 Pro</h3>
                <Link className="text-gray-400" to="">
                  Pro. Beyond.
                </Link>
                <Link className="text-[#2997FF] text-sm" to="">
                  Learn more
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.03 }}
              className="relative shadow-md"
            >
              <img className="z-0 w-[49vw] rounded" src={figureTwo} alt="" />
              <div className="z-10 absolute inset-0 flex flex-col text-center -translate-y-40 justify-center items-center text-white">
                <h3 className="text-black text-3xl font-bold">iPad</h3>
                <Link className="text-gray-800" to="">
                  Lovable. Drawable. Magical.
                </Link>
                <Link className="text-[#2997FF] text-sm" to="">
                  Learn more
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.03 }}
              className="relative shadow-md"
            >
              <img className="z-0 w-[49vw] rounded" src={figureThree} alt="" />
              <div className="z-10 absolute inset-0 flex flex-col text-center -translate-y-40 justify-center items-center text-white">
                <h3 className="text-black text-3xl font-bold">AirPods</h3>
                <Link className="text-gray-800" to="">
                  Share the joy.
                </Link>
                <Link className="text-[#2997FF] text-sm" to="">
                  Shop
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.03 }}
              className="relative shadow-md"
            >
              <img className="z-0 w-[49vw] rounded" src={figureFour} alt="" />
              <div className="z-10 absolute inset-0 flex flex-col text-center -translate-y-40 justify-center items-center text-white">
                <h3 className="text-3xl font-bold">Apple Watch Series 8</h3>
                <Link className="text-gray-400" to="">
                  A healthy leap ahead.
                </Link>
                <Link className="text-[#2997FF] text-sm" to="">
                  Learn more
                </Link>
              </div>
            </motion.div>
          </div>
          {/* bg-4 Grid ends here */}

          {/* bg-5 Grid ends here */}
          <div className="px-20 h-auto shadow-xl bg-white mb-6 grid grid-cols-2 gap-3 py-7">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.03 }}
              className="relative"
            >
              <img className="z-0 w-[49vw] rounded" src={figureFive} alt="" />
              <div className="z-10 absolute inset-0 flex flex-col text-center -translate-y-40 justify-center items-center">
                <motion.h3
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-3xl font-bold flex items-center mb-2"
                >
                  <img
                    className="inline w-[40px]"
                    src={appleBlackLogo}
                    alt=""
                  />
                  WATCH
                </motion.h3>
                <Link className="text-gray-400" to="">
                  Adventure awaits.
                </Link>
                <Link className="text-[#2997FF] text-sm" to="">
                  Learn more
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.03 }}
              className="relative"
            >
              <img className="z-0 w-[49vw] rounded" src={figureSix} alt="" />
              <div className="z-10 absolute inset-0 flex flex-col text-center -translate-y-40 justify-center items-center">
                <motion.h3
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="mb-2 text-3xl font-bold flex items-center"
                >
                  <img
                    className="inline w-[40px]"
                    src={appleBlackLogo}
                    alt=""
                  />
                  Card
                </motion.h3>
                <Link className="text-gray-400" to="">
                  Get up to 3% Daily Cash back with every purchase.
                </Link>
                <Link className="text-[#2997FF] text-sm" to="">
                  Learn more
                </Link>
              </div>
            </motion.div>
          </div>
          {/* bg-5 Grid ends here */}
        </div>

        <div className="px-4 flex justify-center shadow-lg bg-white">
          <CarouselHome />
        </div>
      </section>
    </>
  );
};

export default Home;
