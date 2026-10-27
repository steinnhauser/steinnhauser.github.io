import styled from "styled-components";
import { colors } from "../theme";

// A screenshot in a slim browser window, so light app UIs sit calmly on the
// dark glass. Lazy-loaded with fixed dimensions (no layout shift).
const Frame = styled.figure`
  margin: 0;
  border-radius: 14px;
  overflow: hidden;
  background: ${colors.primary};
  box-shadow:
    0 18px 50px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(255, 255, 255, 0.1);

  /* Window bar with three muted dots. */
  &::before {
    content: "";
    display: block;
    height: 22px;
    background:
      radial-gradient(circle, #ffffff40 3px, transparent 3.5px) 12px 50% / 14px
        14px no-repeat,
      radial-gradient(circle, #ffffff2a 3px, transparent 3.5px) 28px 50% / 14px
        14px no-repeat,
      radial-gradient(circle, #ffffff1a 3px, transparent 3.5px) 44px 50% / 14px
        14px no-repeat,
      rgba(255, 255, 255, 0.06);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

function Screenshot({ src, alt, width, height, className }: Props) {
  return (
    <Frame className={className}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    </Frame>
  );
}

export default Screenshot;
