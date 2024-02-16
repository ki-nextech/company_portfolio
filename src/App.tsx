import "./App.css";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdComputer } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { motion } from "framer-motion";
import { FadeAnimation } from "./FadeAnimation";

function App() {
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span
              className="text-xl"
              style={{
                //全丸ゴシック
                fontFamily: "Zen Maru Gothic",
                color: "#595757",
         
              }}
            >
              合同会社 アプリ製作所
            </span>
          </a>
          <nav className="md:ml-auto text-base">
            <a
              href="#service"
              className="mr-5 hover:text-blue-400 duration-1000"
              style={{ fontFamily: "Noto Serif JP", color: "#595757" }}
            >
              CONCEPT
            </a>

            <a
              href="#about"
              className="mr-5 hover:text-blue-400 duration-1000"
              style={{ fontFamily: "Noto Serif JP", color: "#595757" }}
            >
              SERVICE＆PRICE
            </a>
            <a
              href="#skills"
              className="mr-5 hover:text-blue-400 duration-1000"
              style={{ fontFamily: "Noto Serif JP", color: "#595757" }}
            >
              WORK
            </a>
            <a
              href="#awards"
              className=" hover:text-blue-400 duration-1000"
              style={{ fontFamily: "Noto Serif JP", color: "#595757" }}
            >
              CONTACT
            </a>
          </nav>
        </div>
      </header>
      <section className="text-gray-700" style={{ backgroundColor: '#E1F0F0'}}>
        
      
        <div className="ml-3">
          合同会社 アプリ製作所
        </div>
        <div className="md:w-1/2 lg:max-w-lg w-5/6">
          合同会社 アプリ製作所
        </div>

          {/* <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1
              className="text-3xl sm:text-5x  ,mb-4"
              style={{
                fontFamily: "Noto Serif JP",
                color: "#595757",
                letterSpacing: "0.5em",
              }}
            >
              今村謙吾
            </h1>
            <p
              className="mb-8   leading-relaxed mt-8 text-lg"
              style={{
                fontFamily: "Noto Serif JP",
                color: "#595757",
                letterSpacing: "0.2em",
              }}
            >
              KI.nextech合同会社代表
              <br />
              スマホ、webアプリエンジニア
            </p>
            <a href="https://docs.google.com/forms/d/1Qpt3GTKAA8UNbi9u48SF_ebxJ9K586Qgulha-0U-Uo8/edit">
              <button
                className=" text-white py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300 font-bold ,font-mono"
                style={{
                  backgroundColor: "#B7B7B7",
                  fontFamily: "Noto Serif JP",
                  letterSpacing: "0.15em",
                }}
              >
                contact me
              </button>
            </a>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="./img/portfolio.jpg" alt="" />
          </div> */}
        
      </section>
      <FadeAnimation>
        <section className="text-gray-700 border-t border-gray-200" id="service">
          <div className="container px-5 py-20 mx-auto ">
            <div
              className="text-2xl sm:text-3xl mb-20"
              style={{
                fontFamily: "Noto Serif JP",
                color: "#595757",
                letterSpacing: "0.5em",
              }}
            >
              できること
            </div>
            <div className="w-full ">
              <div className="flex flex-wrap mb-10">
                <h2
                  className="pr-10 text-2xl sm:text-3xl font-medium text-gray-900 mb-2 text-left"
                  style={{ fontFamily: "Noto Serif JP", color: "#B7B7B7" }}
                >
                  1.
                </h2>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <h2
                    className=" text-2xl sm:text-3xl font-medium text-gray-900 mb-2 text-left"
                    style={{ fontFamily: "Noto Serif JP", color: "#595757" }}
                  >
                    スマホアプリ開発
                  </h2>
                </div>
              </div>
              <div className="flex flex-wrap">
                <h2
                  className="pr-10 text-2xl sm:text-3xl font-medium text-gray-900 mb-2 text-left"
                  style={{ fontFamily: "Noto Serif JP", color: "#B7B7B7" }}
                >
                  2.
                </h2>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <h2
                    className=" text-2xl sm:text-3xl font-medium text-gray-900 mb-2 text-left"
                    style={{ fontFamily: "Noto Serif JP", color: "#595757" }}
                  >
                    webアプリ開発
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeAnimation>

      <FadeAnimation>
        <section className="text-gray-700 border-t border-gray-200" id="about">
          <div className="container px-5 py-20 mx-auto">
            <div className=" mb-10  ">
              <h1
                className="text-2xl sm:text-3xl mb-20"
                style={{
                  fontFamily: "Noto Serif JP",
                  color: "#595757",
                  letterSpacing: "0.5em",
                }}
              >
                About Me
              </h1>
              <p
                className=" text-s mb-5"
                style={{
                  fontFamily: "Noto Serif JP",
                  color: "#000000",
                  letterSpacing: "0.2em",
                }}
              >
                1992年群馬県生まれ。2018年埼玉大学院数理電子情報系専攻電気電子システム工学コース卒業。
                <br />
                多様なステークホルダーとの合意形成や、技術とビジネスの橋渡しを得意として、PM、企画立案、要求要件定義、コーディング、リリース、顧客への売り込みの経験を持つ。
                <br />
                2023年7月にリリースされた、自身がプロデュースした治療用アプリは、現在23病院に導入されている。また、good
                design賞、baby tech awards優秀賞を受賞した。
                <br />
                2023年12月からはフリーランスエンジニアに転身し、スマホアプリ、webアプリの開発を行っている。
              </p>
            </div>
            {/*カードのdivタグ*/}
            <div className="flex flex-wrap">
              <div className="md:w-1/3 lg:p-4 md:p-2">
                <div className="bg-gray-200 rounded-lg  p-4 lg:p-8">
                  <div className="flex items-center mb-3">
                    <div className="text-white rounded-full bg-black">
                      <div className="px-1 py-1">
                        <IoIosPhonePortrait size={50} color="#FFFFFF" />
                      </div>
                    </div>
                    <h2 className="text-lg font-medium ml-2 "style={{ fontFamily: "Noto Serif JP", color: "#000000" }}>
                      スマホアプリ開発
                    </h2>
                  </div>
                  <div>
                    <p className = 'text-sm' style={{ fontFamily: "Noto Serif JP", color: "#000000" }}>・体温計アプリ</p>
                    <p className = 'text-sm' style={{ fontFamily: "Noto Serif JP", color: "#000000" }}>・ヘルメット治療アプリ</p>
                    <div className="flex flex-row mt-4">
                      <motion.div
                        whileHover={{ scale: 1.0, rotate: 20 }}
                        // whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                      >
                        <a
                          href="https://apps.apple.com/jp/app/%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88%E6%B2%BB%E7%99%82%E6%94%AF%E6%8F%B4%E3%82%A2%E3%83%97%E3%83%AA-metto/id6450113230?platform=iphone"
                          className="flex mt-3items-center mr-2"
                        >
                          <img src="./img/appQR_ios.png" alt="" />
                        </a>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.0, rotate: 20 }}
                        // whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                      >
                        <a
                          href="https://apps.apple.com/jp/app/%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88%E6%B2%BB%E7%99%82%E6%94%AF%E6%8F%B4%E3%82%A2%E3%83%97%E3%83%AA-metto/id6450113230?platform=iphone"
                          className="flex mt-3items-center ml-2"
                        >
                          <img src="./img/appQR_ios.png" alt="" />
                        </a>
                      </motion.div>
                    </div>

                    <a
                      href="https://japanmedicalcompany.co.jp/app/metto/"
                      className="flex mt-3 text-blue-500 items-center"
                    >
                      もっと見る
                      <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3  pl-0 pr-4 pm-4 pt-4 lg:pl-4 ">
                <div className="bg-gray-200 rounded-lg p-4 lg:p-8">
                  <div className="flex items-center mb-3">
                    <div className="bg-black text-white rounded-full">
                      <div className="px-1 py-1">
                        <MdComputer size={50} xcolor="#FFFFFF" />
                      </div>
                    </div>
                    <h2 className="text-gray-900 text-lg font-medium ml-2">
                      webアプリ開発
                    </h2>
                  </div>
                  <div>
                  <p className = 'text-sm' style={{ fontFamily: "Noto Serif JP", color: "#000000" }}>・不動産ビッグデータ提供システム</p>
                  <p className = 'text-sm' style={{ fontFamily: "Noto Serif JP", color: "#000000" }}>・医師用ヘルメット治療システム</p>
                    <a
                      href="https://japanmedicalcompany.co.jp/app/metto/"
                      className="flex mt-3 text-blue-500 items-center"
                    >
                      もっと見る
                      <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 pl-0 pr-4 pm-4 pt-4 lg:pl-4 ">
                <div className="bg-gray-200 rounded-lg  p-4 lg:p-8">
                  <div className="flex items-center mb-3">
                    <div className="bg-black text-white rounded-full">
                      <div className="px-1 py-1">
                        <FaHeartbeat size={50} color="#FFFFFF" />
                      </div>
                    </div>
                    <h2 className="text-gray-900 text-lg font-medium ml-2">
                      医療機器開発
                    </h2>
                  </div>
                  <div>
                  <p className = 'text-sm' style={{ fontFamily: "Noto Serif JP", color: "#000000" }}>・心電計の開発</p>
                    <a
                      href="https://www.fukuda.co.jp/medical/products/ecg/fcp_9800.html"
                      className=" flex mt-2 text-sm text-blue-500 items-center underline "
                    >
                      ・心電計①
                    </a>
                    <a
                      href="https://www.fukuda.co.jp/medical/products/ecg/fcp_9900.html"
                      className=" flex mt-1 text-sm text-blue-500 items-center underline "
                    >
                      ・心電計②
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeAnimation>
      <FadeAnimation>
        <section className="text-gray-700 border-t border-gray-200" id="skills">
          <div className="container px-5 py-20 mx-auto ">
            <h1
              className="text-2xl mb-20 text-gray-900"
              style={{
                fontFamily: "Noto Serif JP",
                color: "#595757",
                letterSpacing: "0.5em",
              }}
            >
              My skills
            </h1>
            <div className="flex flex-wrap">
              {/* left side */}
              <div className=" lg:py-6 w-full lg:w-1/2 pr-5">
                <h2
                  className="text-xl sm:text2xl font-medium text-gray-900 mb-5 text-left"
                  style={{
                    fontFamily: "Noto Serif JP",
                    color: "#595757",
                    letterSpacing: "0.2em",
                  }}
                >
                  ・flont-end
                </h2>
                <div
                  className="w-hull"
                  style={{
                    fontFamily: "Noto Serif JP",
                    color: "#595757",
                    letterSpacing: "0.1em",
                  }}
                >
                  <h2>Flutter/Dart</h2>
                  <div className="shadow bg-gray-300 mt-2 w-full">
                    <div
                      className="bg-gray-600 text-xs leading-none py-1 text-center text-white"
                      style={{ width: "85%" }}
                    >
                      85%
                    </div>
                  </div>
                  <div className="w-hull">
                    <h2>React/Typescript</h2>
                    <div className="shadow bg-gray-300 mt-2 w-full">
                      <div
                        className="bg-gray-600 text-xs leading-none py-1 text-center text-white"
                        style={{ width: "60%" }}
                      >
                        60%
                      </div>
                    </div>
                  </div>
                  <div className="w-hull"></div>
                  <div className="w-hull"></div>
                </div>
                <h2
                  className="text-xl sm:text2xl font-medium text-gray-900 mb-5 mt-10 text-left"
                  style={{
                    fontFamily: "Noto Serif JP",
                    color: "#595757",
                    letterSpacing: "0.2em",
                  }}
                >
                  ・back-end
                </h2>
                <h2
                  style={{
                    fontFamily: "Noto Serif JP",
                    color: "#595757",
                    letterSpacing: "0.2em",
                  }}
                >
                  Django/Python
                </h2>
                <div className="shadow bg-gray-300 mt-2 w-full">
                  <div
                    className="bg-gray-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "65%" }}
                  >
                    65%
                  </div>
                </div>

                <h2
                  style={{
                    fontFamily: "Noto Serif JP",
                    color: "#595757",
                    letterSpacing: "0.2em",
                  }}
                >
                  C++
                </h2>
                <div className="shadow bg-gray-300 mt-2 w-full">
                  <div
                    className="bg-gray-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "30%" }}
                  >
                    30%
                  </div>
                </div>
              </div>
            

              {/* right side */}
              <div className=" lg:py-6 w-full lg:w-1/2 lg:pl-5 sm:pl-0 mt-10 lg:mt-0" >
                <h2
                  className="text-xl font-medium text-gray-900 mb-5  text-left  lg:mt-0"
                  style={{
                    fontFamily: "Noto Serif JP",
                    color: "#595757",
                    letterSpacing: "0.2em",
                  }}
                >
                  ・infla
                </h2>
                <h2
                  style={{
                    fontFamily: "Noto Serif JP",
                    color: "#595757",
                    letterSpacing: "0.2em",
                  }}
                >
                  Firebase
                </h2>
                <div className="shadow bg-gray-300 mt-2 w-full">
                  <div
                    className="text-xs leading-none py-1 text-center text-white bg-gray-600"
                    style={{ width: "70%" }}
                  >
                    70%
                  </div>
                </div>
                <h2
                  style={{
                    fontFamily: "Noto Serif JP",
                    color: "#595757",
                    letterSpacing: "0.2em",
                  }}
                >
                  GCP
                </h2>
                <div className="shadow bg-gray-300 mt-2 w-full">
                  <div
                    className="bg-gray-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "40%" }}
                  >
                    40%
                  </div>
                </div>

                <h2
                  style={{
                    fontFamily: "Noto Serif JP",
                    color: "#595757",
                    letterSpacing: "0.2em",
                  }}
                >
                  AWS
                </h2>
                <div className="shadow bg-gray-300 mt-2 w-full">
                  <div
                    className="bg-gray-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "30%" }}
                  >
                    30%
                  </div>
                </div>

                <h2
                  className="text-xl  font-medium text-gray-900 mb-5 mt-10 text-left"
                  style={{
                    fontFamily: "Noto Serif JP",
                    color: "#595757",
                    letterSpacing: "0.2em",
                  }}
                >
                  ・database
                </h2>
                <h2
                  style={{
                    fontFamily: "Noto Serif JP",
                    color: "#595757",
                    letterSpacing: "0.2em",
                  }}
                >
                  Firestore Database
                </h2>
                <div className="shadow bg-gray-300 mt-2 w-full">
                  <div
                    className="text-xs leading-none py-1 text-center text-white bg-gray-600"
                    style={{ width: "85%" }}
                  >
                    70%
                  </div>
                </div>
                <h2
                  style={{
                    fontFamily: "Noto Serif JP",
                    color: "#595757",
                    letterSpacing: "0.2em",
                  }}
                >
                  PostgreSQL
                </h2>
                <div className="shadow bg-gray-300 mt-2 w-full">
                  <div
                    className="bg-gray-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "40%" }}
                  >
                    40%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeAnimation>
      <FadeAnimation>
        <section className="text-gray-700 border-t border-gray-200" id="awards">
          <div className="container px-5 py-20 mx-auto">
            <div className=" mb-20">
              <h1
                className="text-2xl mb-20 text-gray-900 "
                style={{
                  fontFamily: "Noto Serif JP",
                  color: "#595757",
                  letterSpacing: "0.5em",
                }}
              >
                Awards
              </h1>
              <p>
                <a
                  href="https://www.g-mark.org/gallery/winners/17359?companies=8c5bf0a9-96ec-487f-9af9-6e5bd29fcc72&years=2023"
                  className=" text-xl flex mt-10 text-blue-500 items-center underline "
                >
                  ・2023年度グッドデザイン賞受賞
                </a>
                <a
                  href="https://babytech.jp/2023/10/bta2023_winner/"
                  className="text-xl flex mt-5 text-blue-500 items-center underline"
                >
                  ・2023年度baby tech awards優秀賞受賞
                </a>
              </p>
            </div>
          </div>
        </section>
      </FadeAnimation>
    </>
  );
}

export default App;
