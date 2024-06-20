import styled from "styled-components";
import { FC } from "react";

type TextProps = {
  fullWidth?: string;
  labelColor?: string;
  labelFontW?: string;
  width?: string;
  inputPadding?: string;
  border?: string;
  inputFont?: string;
  labelFont?: string;
  inputRadius?: string;
  inputBgColor?: string;
  height?: string;
  placeholderColor?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderBottom?: string;
  labelText?: string;
  descriptionText?: string;
  inputType?: string;
  inputName?: string;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  inputPlaceholder?: string;
  inputValue?: string;
  iconSrc?: string;
  error?: string;
  errorMessage?: string;
  required?: boolean;
  isNotShowing?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

type ErrorProps = {
  mt?: string;
  ml?: string;
  mb?: string;
  mr?: string;
  align?: string;
  fs?: string;
};

const GlobalInput: FC<TextProps & ErrorProps> = ({
  placeholderColor,
  fullWidth,
  labelColor,
  labelFontW,
  width,
  inputPadding,
  inputBgColor,
  inputFont,
  inputRadius,
  height,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  labelFont,
  labelText,
  inputName,
  inputType,
  descriptionText,
  iconSrc,
  error,
  errorMessage,
  required,
  isNotShowing,
  maxLength,
  inputPlaceholder,
  inputValue,
  handleBlur,
  handleChange,
  mt,
  mb,
  fs,
  mr,
  align,
  ...props
}) => {
  return (
    <InputGroup
      width={width}
      height={height}
      fullWidth={fullWidth}
      color={labelColor}
      inputPadding={inputPadding}
      inputRadius={inputRadius}
      inputFont={inputFont}
      inputBgColor={inputBgColor}
      borderLeft={borderLeft}
      borderRight={borderRight}
      borderTop={borderTop}
      borderBottom={borderBottom}
      placeholderColor={placeholderColor}
      labelFontW={labelFontW}
      labelFont={labelFont}
      labelText={labelText}
      descriptionText={descriptionText}
      type={inputType}
      name={inputName}
      error={error}
      errorMessage={errorMessage}
      required={required}
      isNotShowing={isNotShowing}
    >
      <div className="error-text">
        {labelText && <label htmlFor={inputName}>{labelText}</label>}
        {error && (
          <FieldError mt={mt} mb={mb} mr={mr} fs={fs} align={align}>
            {errorMessage}
          </FieldError>
        )}
      </div>
      {descriptionText && (
        <p className="description text-muted">{descriptionText}</p>
      )}
      <div className="input-block">
        <input
          type={inputType || "text"}
          placeholder={inputPlaceholder}
          name={inputName}
          id={inputName}
          value={inputValue}
          onBlur={handleBlur}
          onChange={handleChange}
          className={error ? "invalid" : ""}
          maxLength={maxLength}
          autoComplete={inputType === "password" ? "false" : "true"}
          required={required}
          style={{ display: isNotShowing ? "none" : "block" }}
          {...props}
        />
        {iconSrc && <img className="icon" src={iconSrc} alt="" />}
      </div>
    </InputGroup>
  );
};

export default GlobalInput;

const InputGroup = styled.div<TextProps>`
  grid-column: ${({ fullWidth }) => (fullWidth ? "1 / -1" : "")};
  .error-text {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 200px;
    & label {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 8px;
      color: ${({ labelColor }) => labelColor || "#696f79"};
      font-family: "Ubuntu Sans";
      font-style: normal;
      font-weight: ${({ labelFontW }) => labelFontW || "400"};
      font-size: ${({ labelFont }) => labelFont || "16px"};
      line-height: 20px;
    }
  }

  input,
  select,
  textarea {
    width: ${({ width }) => width || "100%"};
    padding: ${({ inputPadding }) => inputPadding || "10px"};
    border: ${({ border }) => border || "2px solid #a1a1a1"};
    border-radius: ${({ inputRadius }) => inputRadius || "8px"};
    font-size: ${({ inputFont }) => inputFont || "16px"};
    background-color: ${({ inputBgColor }) => inputBgColor || "#ffffff"};
    line-height: 1.25;
    resize: none;

    &::-webkit-calendar-picker-indicator {
      color: var(--clr-primary);
    }

    &:disabled {
      background-color: #d4d4d4;
      cursor: not-allowed;
    }
  }

  input,
  select {
    height: ${({ height }) => height || "48px"};
  }

  .invalid {
    border-color: red;
    outline-color: red;
  }

  input::placeholder {
    color: ${({ placeholderColor }) => placeholderColor || "#8c8c8c"};
  }

  input:-ms-input-placeholder {
    color: ${({ placeholderColor }) => placeholderColor || "#8c8c8c"};
  }

  input::-ms-input-placeholder {
    color: ${({ placeholderColor }) => placeholderColor || "#8c8c8c"};
  }

  p.description {
    font-size: 0.8rem;
    color: #4a4a4a;
  }

  .input-block {
    position: relative;

    .icon {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export const FieldError = styled.div<ErrorProps>`
  margin-left: ${({ ml }) => ml || "none"};
  margin-right: ${({ mr }) => mr || "none"};
  margin-bottom: ${({ mb }) => mb || 0};
  text-align: ${({ align }) => align || "left"};
  color: red;
  font-size: ${({ fs }) => fs || "16px"};
  font-weight: 200px;
`;
