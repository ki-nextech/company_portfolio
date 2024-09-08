import "./style.css";
import ummImage from "./assets/umm.png";
import reiImage from "./assets/reiImage.png";
import kengoImage from "./assets/kengoImage.png";
import checkImage from "./assets/checkImage.png";
import useImage from "./assets/useImage.png";
import quickImage from "./assets/quickImage.png";
import kengoPicture from "./assets/kengoPicture.png";
import compnayIcon from "./assets/compnayIcon.png";
import dot from "./assets/dot.png";
import triangle from "./assets/triangle.png";
import { Bars3Icon } from "@heroicons/react/24/solid";

// import { Link } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import UserInfo from './UserInfo';
// import mettoForDoctorLogo from '../../assets/metto_for_doctor_logo.png';

// import { FadeAnimation } from "./FadeAnimation";
import "./components/custom_underline.css";
import { FadeAnimation } from "./FadeAnimation";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
// import HamburgerMenuIcon from './components/HamburgerMenuIcon.tsx';
// import { hookstate, useHookstate } from "@hookstate/core";
// import { useState } from "react";
// import styled from "styled-components";
// const hexagonCenterYState = hookstate(0);

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsSidebarOpen(true);
  };
  return (
    <>
      <header className="text-gray-700 border-b border-gray-500">
      <BrowserRouter>
        <div className="flex flex-row" style={{ backgroundColor: "#7E969A" }}>
          <div
            className="ml-0 xl:ml-10  w-full mx-auto"
            style={{ backgroundColor: "#F9F8F4" }}
          >
            <div className=" container mx-auto max-w-7xl p-5 ">
              <div className="flex flex-row">
                <img
                  src={compnayIcon}
                  alt="compnayIcon"
                  className="object-cover"
                />

                <a
                  href="#"
                  className=" text-gray-900 flex items-center justify-center"
                >
                  <span
                    className="text-xl xl:text-2xl whitespace-nowrap ml-2"
                    style={{
                      //全丸ゴシック
                      fontFamily: "Zen Maru Gothic",
                    }}
                  >
                    合同会社 アプリ製作所
                  </span>
                </a>
                <button className=" ml-auto"  onClick={openModal}>
                  <Bars3Icon className="w-9 h-9 text-primary hover:bg-gray-300/30 hover:rounded-full" />
                </button>
              </div>

              {/* <nav className="xl:ml-auto text-base">
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
              </nav> */}
            </div>
          </div>
        </div>
        
          <Sidebar isOpen={isSidebarOpen} closeModal={closeModal} />
        </BrowserRouter>
      </header>

      <div
        className="fixed z-10 bottom-2 right-2 md:top-20 md:right-20 
  border-2 rounded-full cursor-pointer w-20 h-20 xl:w-28 xl:h-28 flex justify-center items-center "
        style={{ backgroundColor: "#FFB6B9" }}
        onClick={() => {
          window.open(
            "https://docs.google.com/forms/d/1Qpt3GTKAA8UNbi9u48SF_ebxJ9K586Qgulha-0U-Uo8/edit"
          );
        }}
      >
        <div className="flex flex-col items-center ">
          <div
            className="text-sm xl:text-xl "
            style={{ fontFamily: "Zen Maru Gothic" }}
          >
            CONTACT
          </div>
          <div className="w-1/4">
            <img src={triangle} alt="triangle" className="object-cover " />
          </div>
        </div>
      </div>

      <section
        className="flex flex-col xl:flex-row"
        id="top"
        style={{ backgroundColor: "#7E969A" }}
      >
        {/* <div className=" mx-auto" style={{ backgroundColor: "#7E969A" }}></div> */}
        <div
          className="ml-0 xl:ml-10  w-full mx-auto"
          style={{ backgroundColor: "#F9F8F4" }}
        >
          <FadeAnimation>
            <div className="container mx-auto max-w-sm xl:max-w-7xl">
              <div className="container   mt-5 mb-2 mx-auto ">
                <div className="flex flex-wrap justify-center ">
                  {/* left side */}
                  <div className="flex-col justify-center items-center xl:w-1/2">
                    <h1
                      className="mb-10 text-4xl xl:text-5xl text-center mt-20 xl:mt-0"
                      style={{
                        fontFamily: "Yellowtail",

                        textDecoration: "underline",
                        textDecorationThickness: "1px",
                        textDecorationColor: "#80999C",
                      }}
                    >
                      Technology <span style={{ color: "#FFB6B9" }}>&</span>{" "}
                      Design
                    </h1>
                    <div className="text-sm xl:text-3xl text-center">
                      手軽なアプリ開発を私たちが実現します。
                      <br />
                      あなたのアイデアを形にしましょう
                      <br />
                      Let’s develop an app without worrying.
                    </div>
                    <div className="hidden xl:block mt-10 w-full">
                      <img src={dot} alt="dot" className="object-cover" />
                    </div>
                  </div>
                  {/* right side */}
                  <div className="flex flex-col items-center justify-center ">
                    <div className="w-4/5 mt-5 xl:mt-0">
                      <img
                        src={ummImage}
                        alt="Umm"
                        className="full-width-image"
                      />
                    </div>
                    <div className="block xl:hidden w-full  mt-5 xl:mt-0">
                      <img src={dot} alt="dot" className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeAnimation>
        </div>
      </section>

      <section
        className=""
        id="aboutus"
        style={{ backgroundColor: "#E1F0F0", paddingTop: "2rem" }}
      >
        <FadeAnimation>
          <div className="container mx-auto  max-w-sm xl:max-w-7xl">
            <h1
              className="text-3xl mb-5 xl:text-6xl custom-underline text-center"
              style={{
                fontFamily: "Zen Maru Gothic",
              }}
            >
              ABOUT US
            </h1>
            <div className="container  px-10 py-5 mx-auto ">
              <div className="flex flex-col xl:flex-row ">
                {/* left side */}
                <div className="hidden xl:block w-1/4 justify-center">
                  <img src={kengoImage} alt="kengo" />
                </div>
                {/* central side */}

                <div
                  className="flex w-full xl:w-1/2 text-sm xl:text-2xl text-center"
                  style={{
                    fontFamily: "Zen Maru Gothic",
                  }}
                >
                  私たちはMVP（Minimum Viable Product）開発に特化した
                  デザイナーとエンジニアの技術者集団です。
                  <br />
                  <br />
                  全てのメンバーが企画から担当することができるため、
                  お客さまと一緒にアイデアを練り上げ、開発を進めることで
                  夢を共に実現するパートナーとなります。
                </div>

                {/* right side */}
                <div className="flex xl:flex-row mt-10 xl:mt-0 w-full xl:w-1/4 justify-center">
                  <div className="block xl:hidden w-2/5 mr-5 xl:mr-0 ">
                    <img
                      src={kengoImage}
                      alt="kengo"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex w-2/5  ml-5 xl:ml-0  xl:w-full justify-center ">
                    <img src={reiImage} alt="rei" className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeAnimation>
      </section>

      <section
        className=""
        id="supportsystem"
        style={{ backgroundColor: "#DCE3E3", paddingTop: "2rem" }}
      >
        <FadeAnimation>
          <div
            className="container mx-auto  max-w-sm xl:max-w-7xl "
          
          >
            <h1
              className="text-3xl xl:text-6xl custom-underline text-center "
              style={{
                fontFamily: "Zen Maru Gothic",
              }}
            >
              SUPPORT SYSTEM
            </h1>
            <div className="container  px-5 py-10 xl:py-20  mx-auto ">
              <div className="flex flex-wrap justify-center">
                {/* left side */}
                <div className="xl:w-1/4 mr-0 xl:mr-5  mb-10 xl:mb-0">
                  <h1
                    className="text-3xl xl:text-6xl text-center font-bold"
                    style={{
                      fontFamily: "Zen Maru Gothic",
                    }}
                  >
                    1
                  </h1>
                  <p
                    className="text-sm xl:text-base  text-center mt-3 xl:mt-10 px-10 xl:px-0"
                    style={{
                      fontFamily: "Zen Maru Gothic",
                    }}
                  >
                    モックを用いて機能ごとに確認いただくことにより
                    あなたのアイデアに沿ったアプリ開発が行えます。
                  </p>
                  <div className="flex flex-wrap justify-center mt-5">
                    <img
                      src={checkImage}
                      alt="check"
                      className="object-cover "
                    />
                  </div>
                </div>
                {/* central side */}
                <div className="xl:w-1/4 mb-10 xl:mb-0">
                  <h1
                    className="text-3xl xl:text-6xl text-center font-bold"
                    style={{
                      fontFamily: "Zen Maru Gothic",
                    }}
                  >
                    2
                  </h1>
                  <p
                    className="text-sm xl:text-base  text-center mt-3 xl:mt-10 px-10 xl:px-0"
                    style={{
                      fontFamily: "Zen Maru Gothic",
                    }}
                  >
                    機能ごとに使用感を見ながら あなたのアイデアに沿った
                    アプリ開発を進めることが出来ます。
                  </p>
                  <div className="flex flex-wrap justify-center mt-5 ">
                    <img src={useImage} alt="use" className="object-cover " />
                  </div>
                </div>
                {/* right side */}
                <div className="xl:w-1/4 ml-0 xl:ml-5  xl:mb-0">
                  <h1
                    className="text-3xl xl:text-6xl text-center font-bold"
                    style={{
                      fontFamily: "Zen Maru Gothic",
                    }}
                  >
                    3
                  </h1>
                  <p
                    className="text-sm xl:text-base  text-center mt-3 xl:mt-10 px-10 xl:px-0"
                    style={{
                      fontFamily: "Zen Maru Gothic",
                    }}
                  >
                    最新の技術（flutter + firebase）を
                    使用することにより、早く安く
                    アプリを生み出すことが出来ます。
                  </p>
                  <div className="flex flex-wrap justify-center mt-5">
                    <img
                      src={quickImage}
                      alt="quick"
                      className="object-cover "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeAnimation>
      </section>

      <section
        className=""
        id="representative"
        style={{ backgroundColor: "#F9F8F4", paddingTop: "2rem" }}
      >
        <FadeAnimation>
          <div className="flex flex-col">
            <h1
              className="text-3xl mb-5 xl:text-6xl custom-underline text-center"
              style={{
                fontFamily: "Zen Maru Gothic",
              }}
            >
              REPRESENTATIVE
            </h1>

            <div className=" flex flex-col xl:flex-row container mx-auto  max-w-sm xl:max-w-7xl items-end xl:items-start px-10 xl:px-0 mt-10">
              <div
                className="w-full xl:w-2/3 text-sm xl:text-xl "
                style={{
                  fontFamily: "Zen Maru Gothic",
                }}
              >
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <div className="w-1/8">1992年：</div>
                    <div className="flex flex-7" style={{ maxWidth: "80.0%" }}>
                      群馬県で生まれる
                    </div>
                  </div>
                  <br />
                  <div className="flex flex-row">
                    <div className="w-1/8">2018年：</div>
                    <div className="flex flex-7" style={{ maxWidth: "80.0%" }}>
                      埼玉大学院電気電子システム工学コース卒業
                    </div>
                  </div>
                  <br />
                  <div className="flex flex-row">
                    <div className="w-1/8">2021年：</div>
                    <div className="flex flex-7" style={{ maxWidth: "80.0%" }}>
                      大手医療機器メーカでハードウェアエンジニアとして働きつつ、
                      <br />
                      個人でフリマアプリの販促ツールを作成する。月２０万円の収益を得る。
                    </div>
                  </div>

                  <br />
                  <div className="flex flex-row">
                    <div className="w-15">2023年：</div>
                    <div className="flex flex-7" style={{ maxWidth: "80.0%" }}>
                      医療機器ベンチャーに就職し、治療用スマホアプリとwebアプリの責任者をする。
                      <br />
                      good design賞、baby tech
                      awards優秀賞を受賞し、23病院に導入される。
                    </div>
                  </div>

                  <br />
                  <div className="flex flex-row">
                    <div className="w-1/8">2023年：</div>
                    <div className="flex flex-7" style={{ maxWidth: "80.0%" }}>
                      フリーランスエンジニアになる。対応できる領域は
                      <br />
                      ・スマホアプリ開発
                      <br />
                      ・SaaS開発
                      <br />
                      ・業務効率化ツール開発
                      <br />
                      ・薬機法対応
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="absolute  w-40 h-40 top-16 right-16 bg-green-300"></div> */}
              <div className=" w-2/3 flex justify-center items-center ">
                <img
                  src={kengoPicture}
                  alt="kengoPicture"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </FadeAnimation>
      </section>

      {/* フッダー */}

      <section>
        <footer>
          <div className="h-32" style={{ backgroundColor: "#7E969A" }}>
            <div className="flex  container mx-auto max-w-7xl flex-wrap">
              <div className="flex flex-col">
                <h1
                  className=" mt-5 text-sm xl:text-xl "
                  style={{
                    fontFamily: "Zen Maru Gothic",
                    color: "#FFFFFF",
                  }}
                >
                  合同会社 アプリ製作所
                </h1>
                <div
                  className="text-sm xl:text-xl "
                  style={{
                    fontFamily: "Zen Maru Gothic",
                    color: "#FFFFFF",
                  }}
                >
                  電話番号 / 080−1075−5168
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>

      {/* <FadeAnimation>
        <section
          className="text-gray-700 border-t border-gray-200"
          id="service"
        >
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
      </FadeAnimation> */}

      {/* <FadeAnimation>
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
      </FadeAnimation> */}
    </>
  );
}

export default App;
