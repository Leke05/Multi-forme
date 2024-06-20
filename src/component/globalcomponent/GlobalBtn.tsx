import styled from "styled-components";

interface ButtonProps {
  display?: string;
  size?: "small" | "medium" | "large";
  width?: string;
  height?: string;
  mx?: string;
  my?: string;
  py?: string;
  px?: string;
  border?: string;
  bdRad?: string;
  bgClr?: string;
  fw?: string;
  fs?: string;
  color?: string;
  hoverBg?: string;
  hoverClr?: string;
  iconWidth?: string;
  iconHeight?: string;
}

const sizes = {
  small: {
    normalWidth: "150px",
    smallWidth: "100px",
  },
  medium: {
    normalWidth: "300px",
    smallWidth: "200px",
  },
  large: {
    normalWidth: "402px",
    smallWidth: "250px",
  },
};

const GlobalBtn = styled.button<ButtonProps>`
  box-sizing: border-box;
  display: ${({ display }) => display || "flex"};
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: ${({ size, width }) =>
    size ? sizes[size].normalWidth : width ? width : "402px"};
  height: ${({ height }) => height || "auto"};
  margin-inline: ${({ mx }) => mx || "0"};
  margin-block: ${({ my }) => my || "0"};
  padding-block: ${({ py }) => py || "1rem"};
  padding-inline: ${({ px }) => px || "0"};
  border: ${({ border }) => border || "none"};
  border-radius: ${({ bdRad }) => bdRad || "8px"};

  background-color: ${({ bgClr }) => bgClr || "#022958"};

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: ${({ fw }) => fw || "700"};
  font-size: ${({ fs }) => fs || "18px"};
  line-height: 18px;
  text-decoration: none;
  text-align: center;
  color: ${({ color }) => (color ? color : "white")};

  transition: 0.3s ease;
  cursor: pointer;

  &:disabled {
    filter: opacity(60%);
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${({ hoverBg }) => hoverBg || "#022958"};
    color: ${({ hoverClr }) => hoverClr || "#fff"};
  }

  img {
    width: ${({ iconWidth }) => iconWidth};
    height: ${({ iconHeight }) => iconHeight};
  }

  @media only screen and (max-width: 768px) {
    width: ${({ size, width }) =>
      size ? sizes[size].smallWidth : width ? width : "250px"};
    font-size: 16px;
    padding-inline: 1rem;
    padding-block: 0.8rem;
  }
`;

export default GlobalBtn;
