import styled from "styled-components";

type CheckboxProp = {
  isChecked?: boolean;
  label?: string;
  name?: string;
  inputValue?: string;
  subLabel?: string;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const GlobalCheckBox = ({
  isChecked,
  label,
  name,
  inputValue,
  onChange,
  subLabel,
  id,
}: CheckboxProp) => {
  return (
    <CheckContainer>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          name={name}
          value={inputValue}
          onChange={onChange}
          id={id}
        />
        <span>{label}</span>
        {subLabel && <SubLabel>{subLabel}</SubLabel>}
      </label>
    </CheckContainer>
  );
};

export default GlobalCheckBox;

const CheckContainer = styled.div`
  label {
    display: flex;
    align-items: center;
  }

  input[type="checkbox"] {
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none;
    /* creating a custom design */
    width: 1em;
    aspect-ratio: 1;
    border-radius: 0.15em;
    margin-right: 0.5em;
    border: 0.15em solid #463cee;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  input[type="checkbox"]:disabled {
    border-color: #c0c0c0;
    background-color: #c0c0c0;
    cursor: not-allowed;
  }

  input[type="checkbox"]:checked {
    background-color: #463cee;
    border-color: #463cee;
  }

  input[type="checkbox"]:checked::before {
    content: "\\2714"; /* Unicode character for checkmark */
    font-size: 0.8em;
    color: white;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    margin-left: 0.5em;
  }
`;

const SubLabel = styled.div`
  font-size: 0.8em;
  color: #888;
  margin-left: 1.5em; /* Aligns the sublabel with the main label text */
`;
