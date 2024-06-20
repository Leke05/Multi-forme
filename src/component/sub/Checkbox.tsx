import React from "react";
import styled from "styled-components";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

type CheckboxProps = {
  duration: { monthly?: string; yearly?: string } | null;
  setDuration: React.Dispatch<
    React.SetStateAction<{ monthly?: string; yearly?: string } | null>
  >;
};

const Checkbox: React.FC<CheckboxProps> = ({ duration, setDuration }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setDuration((prev) => ({ ...prev, [name]: checked ? name : undefined }));
  };

  return (
    <CheckboxContainer>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              name="monthly"
              checked={!!duration?.monthly}
              onChange={handleChange}
            />
          }
          label="Monthly"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              name="yearly"
              checked={!!duration?.yearly}
              onChange={handleChange}
            />
          }
          label="Yearly"
        />
      </FormGroup>
    </CheckboxContainer>
  );
};

export default Checkbox;

const CheckboxContainer = styled.div`
  background-color: #f8f9fe;
  border: 1px solid #f8f8f8;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
`;
