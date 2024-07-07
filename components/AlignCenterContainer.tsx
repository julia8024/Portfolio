import { ReactNode, CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  left?: Boolean;
  right?: Boolean;
  width?: string | number;
  height?: string | number;
  gap?: string | number;
  margin?: string | number;
  background?: string;
  style?: CSSProperties; // 추가적인 스타일 속성 허용
  [key: string]: any; // 이 줄은 추가적인 props를 허용하기 위함
}

const AlignCenterContainer = ({ children, left = false, right = false, width, height, gap, margin, background, style, ...props }: Props) => {

    // 스타일 객체 생성
    const computedStyle: CSSProperties = {
        display: "flex",
        justifyContent: left ? "flex-start" : right ? "flex-end" : "center",
        alignItems: "center",
        width: width,
        height: height,
        gap: gap,
        margin: margin,
        background: background,
        ...style, // 다른 스타일 속성들을 병합
      };
    
    
    return (
        <div style={computedStyle} {...props}>
            {children}
        </div>)
};


export default AlignCenterContainer;