import { ReactNode, useState, useEffect  } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

//TypeScriptの型定義 (今回は無視してOK)
type fadeAnimationType = {
  children: ReactNode;
};

export const FadeAnimation = (props: fadeAnimationType) => {
  const { children } = props;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { ref, inView } = useInView({
    rootMargin: isMobile ? "0px" : "-200px",
    triggerOnce: true,
  });

  return (
    <SFadeElem inView={isMobile ? true : inView} ref={ref}>
      {children}
    </SFadeElem>
  );
};

/**
 * ★inView(trueかfalse)で受け取り、それに応じてcssを切り替える
 */
const SFadeElem = styled.span<{ inView: boolean }>`
  display: block;
  transition: opacity 0.5s cubic-bezier(0.47, 0, 0.745, 0.715);
  
  //opacityをtrueなら1、falseなら0とする
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;