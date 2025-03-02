import { useRef, useEffect } from "react";
import { SkillSheet } from "../types/SkillSheet";
import SkillAnalysisSheet from "./SkillAnalysisSheet";

type SkillSheetCarouselProps = {
  sheets: SkillSheet[];
};

const SkillSheetCarousel = ({ sheets }: SkillSheetCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 連続のなスクロールアニメーション
  useEffect(() => {
    if (!carouselRef.current || !containerRef.current) return;

    let animationId: number;
    let position = 0;
    const scrollSpeed = 0.2; // スクロール速度（ピクセル/フレーム）- 小さい値ほど遅くなる

    const animate = () => {
      if (!carouselRef.current || !containerRef.current) return;

      position += scrollSpeed;

      // コンテンツの幅の半分をスクロールしたら、位置をリセット
      const containerWidth = containerRef.current.scrollWidth;
      if (position >= containerWidth / 2) {
        position = 0;
      }

      carouselRef.current.scrollLeft = position;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  // シートの複製を作成して、スムーズな無限スクロールを実現
  const duplicatedSheets = [...sheets, ...sheets];

  return (
    <>
      <h3 className="text-2xl font-bold text-center text-luxury-800 mb-8">
        スキル分析シート事例
      </h3>

      {/* カルーセルコンテナ - 横幅いっぱいに表示 */}
      <div
        className="w-screen relative mb-16 overflow-hidden"
        style={{
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      >
        <div
          className="overflow-x-auto w-full"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          ref={carouselRef}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div
            ref={containerRef}
            className="flex"
            style={{ width: "fit-content" }}
          >
            {duplicatedSheets.map((sheet, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] sm:w-[550px] md:w-[650px] px-2"
              >
                <SkillAnalysisSheet data={sheet} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillSheetCarousel;
