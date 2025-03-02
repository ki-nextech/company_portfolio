import "./style.css";
import top_tech_value from "./assets/top_tech_value.png";
import top_tech_value_mobile from "./assets/top_tech_value_mobile.png";
import background_marble from "./assets/background_marble.jpeg";
import background_marble_white from "./assets/background_marble_white.jpeg";
import strength01 from "./assets/strength01.png";
import strength02 from "./assets/strength02.png";
import strength03 from "./assets/strength03.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import "./components/custom_underline.css";
import { FadeAnimation } from "./FadeAnimation";
import { useState, useEffect } from "react";
import CompanySidebar from "./components/CompanySidebar";
import { COLORS } from "./constants/colors";
import { SectionId } from "./types/SkillSheet";
import skillSheetExamples from "./data/skillSheetExamples";
import SkillSheetCarousel from "./components/SkillSheetCarousel";
import GoogleFonts from "./components/GoogleFonts";

function Company() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<Record<SectionId, boolean>>({
    achievements: false,
    concerns: false,
    skill_analysis: false,
    why_choose_us: false,
    service_details: false,
    company_support: false,
    contact_form: false,
    solution_section: false,
  });

  // Tech Value用のタイトルとファビコンを設定
  useEffect(() => {
    // タイトルを「Tech Value」に設定
    document.title = "Tech Value";

    // ファビコンをTech Value用に設定
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.setAttribute("href", "/favicon_tech_value.png");
    }

    return () => {
      // コンポーネントのアンマウント時には元の設定に戻さない
      // App.tsxコンポーネントが自身の設定を行うため
    };
  }, []);

  // 画面サイズの検出
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // mdのブレークポイントは768px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    // スクロールアニメーション用の監視
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id as SectionId]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // 監視対象の要素
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      if (section.id) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.id) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const closeModal = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsSidebarOpen(true);
  };

  return (
    <div
      className="text-luxury-800"
      style={{
        fontFamily:
          "'Noto Serif JP', 'Hiragino Mincho ProN', 'YuMincho', serif",
      }}
    >
      <GoogleFonts />
      <CompanySidebar isOpen={isSidebarOpen} closeModal={closeModal} />

      {/* ヘッダーセクション */}
      <header className="bg-luxury-800 py-4 px-6 flex justify-between items-center sticky top-0 z-30 shadow-md border-b border-luxury-900">
        <div className="flex items-center">
          <div
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            Tech Value
          </div>
        </div>
        <button
          className="p-2 rounded-full hover:bg-luxury-800 transition-colors duration-300"
          onClick={openModal}
        >
          <Bars3Icon className="w-8 h-8 text-white" />
        </button>
      </header>

      {/* トップセクション */}
      <section className="relative" id="company_top">
        <FadeAnimation>
          <div className="w-full">
            <img
              src={isMobile ? top_tech_value_mobile : top_tech_value}
              alt="Tech Value - ハイクラスエンジニア集団が運営するフリーランス人材サービス"
              className="w-full"
            />
          </div>
        </FadeAnimation>
      </section>

      {/* バリューセクション（新規追加） */}
      <section className="bg-luxury-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center gap-6 md:gap-12 md:px-16 lg:px-24">
            <div className="flex items-center">
              <span
                className="text-lg tracking-wider"
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  letterSpacing: "0.08em",
                }}
              >
                現役エンジニアによる厳格な選考
              </span>
            </div>
            <div className="flex items-center">
              <span
                className="text-lg font-bold tracking-wider"
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  letterSpacing: "0.08em",
                }}
              >
                厳選されたエンジニアのみをご紹介
              </span>
            </div>
            <div className="flex items-center">
              <span
                className="text-lg font-bold tracking-wider"
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  letterSpacing: "0.08em",
                }}
              >
                技術的知見に基づくサポート
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 実績セクション */}
      <section
        className="bg-white py-12"
        id="achievements"
        style={{
          backgroundImage: `url(${background_marble_white})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`container mx-auto px-4 transition-all duration-700 transform ${
            isVisible.achievements
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
            <div className="flex flex-col items-center">
              <p
                className="text-4xl md:text-5xl font-bold text-luxury-800"
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  letterSpacing: "0.02em",
                }}
              >
                10,000+
              </p>
              <p
                className="text-lg"
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  letterSpacing: "0.05em",
                }}
              >
                ご紹介可能エンジニア数
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p
                className="text-4xl md:text-5xl font-bold text-luxury-800"
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  letterSpacing: "0.02em",
                }}
              >
                90+%
              </p>
              <p
                className="text-lg"
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  letterSpacing: "0.05em",
                }}
              >
                お客様満足度
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p
                className="text-4xl md:text-5xl font-bold text-luxury-800"
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  letterSpacing: "0.02em",
                }}
              >
                最短1日
              </p>
              <p
                className="text-lg"
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  letterSpacing: "0.05em",
                }}
              >
                紹介までの日数
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お悩みセクション */}
      <section
        className="py-16 relative"
        id="concerns"
        style={{
          backgroundImage: `url(${background_marble})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 背景オーバーレイ - テキスト読みやすさ確保のため */}
        <div className="absolute inset-0 bg-white bg-opacity-60"></div>

        <div
          className={`container mx-auto px-4 transition-all duration-700 transform relative z-10 ${
            isVisible.concerns
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-luxury-800"
            style={{
              fontFamily: "'Noto Serif JP', serif",
              letterSpacing: "0.05em",
              fontWeight: 600,
            }}
          >
            こんなお悩みありませんか？
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3
                className="text-xl font-bold mb-4 text-gold-dark"
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  letterSpacing: "0.03em",
                }}
              >
                今すぐエンジニアのリソースが欲しい
              </h3>
              <p>
                開発プロジェクトの納期が迫っているが、社内リソースだけでは対応できず、急ぎで即戦力となる人材が必要。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gold-dark">
                プロジェクトに合った人材が見つからない
              </h3>
              <p>
                採用活動を行っても、本当に技術力のあるエンジニアを見極めるのが難しく、採用後にミスマッチが発生している。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gold-dark">
                面談をする時間が取れない
              </h3>
              <p>
                多忙なスケジュールの中、候補者との面談時間を確保できず、採用が停滞。優秀な人材の見逃しや機会の損失が発生している。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 新しいTech Valueなら解決できますセクション */}
      <section className="bg-luxury-800 text-white py-12" id="solution_section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-gold-light"
              style={{
                fontFamily: "'Noto Serif JP', serif",
                letterSpacing: "0.05em",
              }}
            >
              Tech Valueなら解決できます
            </h2>

            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              <span className="font-bold text-gold-DEFAULT inline-block mb-2">
                現役でプロジェクトを率いるハイクラスエンジニア集団
              </span>
              <br />
              だからこそ、技術的な目線で厳選した即戦力人材をご紹介し、
              <br className="hidden md:block" />
              貴社の課題解決を支援します。
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdufVCW3eg8igfmdC0tJYFwzc1mPmiy57HkxagipUPWB4thtQ/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-DEFAULT hover:bg-gold-light text-white py-3 px-8 rounded-md font-bold transition-all duration-300 inline-flex items-center hover:scale-105 relative overflow-hidden group contact-button-animation"
              >
                問い合わせる
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="absolute inset-0 contact-button-shine"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* スキル分析セクション */}
      <section
        className="bg-white py-16"
        id="skill_analysis"
        style={{
          backgroundImage: `url(${background_marble})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingBottom: 0,
        }}
      >
        <div
          className={`w-full transition-all duration-700 transform ${
            isVisible.skill_analysis
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {/* セクションタイトル */}
          <div className="container mx-auto mb-10 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-luxury-800 mb-4"
              style={{
                fontFamily: "'Noto Serif JP', serif",
                letterSpacing: "0.05em",
              }}
            >
              Tech Valueの３つの特徴
            </h2>
            <div className="w-24 h-1 bg-gold-DEFAULT mx-auto"></div>
          </div>

          {/* 01 セクション */}
          <div
            className="w-full overflow-hidden"
            style={{
              backgroundImage: `url(${strength01})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              borderBottom: "2px solid #C7AD94",
              borderTop: "2px solid #C7AD94",
            }}
          >
            <div className="container mx-auto relative z-10 py-16 md:py-20 lg:py-24 px-8 md:px-16 lg:px-24 flex flex-col items-center">
              {/* 01の見出し部分 */}
              <div className="flex flex-col md:flex-row items-center w-full max-w-5xl mx-auto">
                <div className="text-[8rem] md:text-[12rem] font-bold text-white leading-none md:mr-8 text-opacity-20 drop-shadow-lg">
                  01
                </div>
                <div className="w-full">
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gold-light mb-6 drop-shadow-lg"
                    style={{
                      fontFamily: "'Noto Serif JP', serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    現役のエンジニアが案件紹介を担当
                  </h2>
                  <p className="text-lg text-white drop-shadow-lg">
                    現役のエンジニアの感覚で案件に沿った最適なエンジニアを紹介します。
                    技術的な知見と経験を持つエンジニアだからこそできる、精度の高い人材紹介を実現します。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 02 セクション */}
          <div
            className="w-full overflow-hidden"
            style={{
              backgroundImage: `url(${strength02})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              borderBottom: "2px solid #C7AD94",
            }}
          >
            <div className="container mx-auto relative z-10 py-16 md:py-20 lg:py-24 px-8 md:px-16 lg:px-20 flex flex-col items-center">
              {/* 02の見出し部分 */}
              <div className="flex flex-col md:flex-row items-center w-full max-w-5xl mx-auto">
                <div className="text-[8rem] md:text-[12rem] font-bold text-white leading-none md:ml-8 text-opacity-20 drop-shadow-lg mb-4 md:mb-0 order-first md:order-last">
                  02
                </div>
                <div className="w-full">
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gold-light mb-6 drop-shadow-lg"
                    style={{
                      fontFamily: "'Noto Serif JP', serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    現役エンジニアが事前面談を実施
                  </h2>
                  <p className="text-lg text-white drop-shadow-lg">
                    ご紹介するエンジニアの詳細なスキル分析シートを作成します。
                    実務経験に基づいた視点から、エンジニアの技術力を正確に評価します。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 03 セクション */}
          <div
            className="w-full overflow-hidden"
            style={{
              backgroundImage: `url(${strength03})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div className="container mx-auto relative z-10 py-16 md:py-20 lg:py-24 px-8 md:px-16 lg:px-24 flex flex-col items-center">
              {/* 03の見出し部分 */}
              <div className="flex flex-col md:flex-row items-center w-full max-w-5xl mx-auto">
                <div className="text-[8rem] md:text-[12rem] font-bold text-white leading-none md:mr-8 text-opacity-20 drop-shadow-lg">
                  03
                </div>
                <div className="w-full">
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gold-light mb-6 drop-shadow-lg"
                    style={{
                      fontFamily: "'Noto Serif JP', serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    担当は専門性を持つエキスパート
                  </h2>
                  <p className="text-lg text-white drop-shadow-lg">
                    案件で求められるスキルの業務経験があるエキスパートが担当します。
                    実践的な知識を持つエンジニアだからこそ、精度の高いマッチングが可能になります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 選ばれる理由セクション */}
      <section
        className="bg-background-light py-16"
        id="why_choose_us"
        style={{
          backgroundImage: `url(${background_marble_white})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTop: "2px solid #C7AD94",
        }}
      >
        <div
          className={`container mx-auto px-4 transition-all duration-700 transform ${
            isVisible.why_choose_us
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-center text-gold-DEFAULT"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            Tech Valueの特典
          </h2>

          <div className="max-w-4xl mx-auto mb-10">
            <p className="text-center text-lg mb-4">
              職務経歴書とは別に、弊社のハイクラスエンジニアが案件の条件から作成した、
              <span className="text-xl font-bold text-gold-dark">
                スキル分析シート
              </span>
              をお渡しします。
            </p>

            <p className="text-center text-lg mb-6">
              <span className="font-semibold text-gold-dark">技術的な視点</span>
              から案件要件とエンジニアのスキルを精査し、
              <span className="font-semibold text-gold-dark">
                最適なマッチング
              </span>
              を実現します。
            </p>
          </div>

          {/* スキル分析シートカルーセル */}
          <SkillSheetCarousel sheets={skillSheetExamples} />
        </div>
      </section>

      {/* 問い合わせフォーム */}
      <section
        className="py-16 bg-gradient-to-b from-white to-luxury-100"
        id="contact_form"
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-luxury-800">
              お問い合わせ
            </h2>
            <p className="text-luxury-600 max-w-2xl mx-auto">
              ご質問、プロジェクトの相談、エンジニア採用のご相談など、
              <br className="hidden md:block" />
              お気軽にお問い合わせください。
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdufVCW3eg8igfmdC0tJYFwzc1mPmiy57HkxagipUPWB4thtQ/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-slow bg-luxury-800 hover:bg-luxury-700 text-white font-bold py-4 px-10 rounded-md transition-all duration-300 inline-flex items-center text-lg mt-10 shadow-lg hover:shadow-xl relative overflow-hidden contact-button-animation"
            >
              問い合わせフォームへ
              <ArrowRightIcon className="w-5 h-5 ml-2" />
              <span className="absolute inset-0 contact-button-shine"></span>
            </a>

            {/* ボタンアニメーション用のスタイル */}
            <style>{`
              @keyframes pulse-slow {
                0%, 100% {
                  transform: scale(1);
                }
                50% {
                  transform: scale(1.05);
                }
              }
              
              @keyframes shine {
                0% {
                  left: -100%;
                  opacity: 0;
                }
                50% {
                  opacity: 0.5;
                }
                100% {
                  left: 100%;
                  opacity: 0;
                }
              }
              
              @keyframes bounce-slow {
                0%, 100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-10px);
                }
              }
              
              .animate-bounce-slow {
                animation: bounce-slow 3s infinite ease-in-out;
              }
              
              .contact-button-animation {
                animation: pulse-slow 2s infinite;
              }
              
              .contact-button-shine {
                position: absolute;
                top: 0;
                left: -100%;
                width: 50%;
                height: 100%;
                background: linear-gradient(
                  to right,
                  rgba(255, 255, 255, 0) 0%,
                  rgba(255, 255, 255, 0.5) 50%,
                  rgba(255, 255, 255, 0) 100%
                );
                transform: skewX(-25deg);
                animation: shine 3s infinite;
                pointer-events: none;
                z-index: 2;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-luxury-900 text-luxury-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="text-2xl font-bold text-gold-light mb-4">
                Tech Value
              </div>
              <p className="mb-4 max-w-md">
                ハイクラスエンジニア集団が運営するフリーランス人材サービス。
                企業の技術力向上を全面的にサポートし、DX推進やプロジェクト成功をバックアップします。
              </p>
            </div>
          </div>
          <div className="border-t border-luxury-700 mt-12 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} Tech Value. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <div
        className="fixed z-50 bottom-4 right-4 md:bottom-6 md:right-6 border-2 rounded-full cursor-pointer w-16 h-16 xl:w-20 xl:h-20 flex justify-center items-center shadow-lg hover:shadow-xl transition-all duration-300 border-gold-light hover:scale-110 animate-bounce-slow overflow-hidden"
        style={{ backgroundColor: COLORS.BACKGROUND.DARK, position: "fixed" }}
        onClick={() => {
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSdufVCW3eg8igfmdC0tJYFwzc1mPmiy57HkxagipUPWB4thtQ/viewform?usp=sharing"
          );
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <div
            className="text-xs xl:text-sm text-gold-light font-semibold text-center"
            style={{ fontFamily: "Zen Maru Gothic" }}
          >
            問い合わせ
          </div>
        </div>
        <span
          className="absolute inset-0 contact-button-shine"
          style={{ zIndex: 1 }}
        ></span>
      </div>
    </div>
  );
}

export default Company;
