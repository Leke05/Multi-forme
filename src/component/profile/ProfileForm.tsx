import React, { useState } from "react";
import GlobalInput from "../globalcomponent/GlobalInput";
import GlobalBtn from "../globalcomponent/GlobalBtn";
import { Fields, FormGroup } from "../globalcomponent/Utils";
import FormHeader from "../globalcomponent/FormHeader";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type FormProps = {
  name: string;
  email: string;
  phoneNumber: string;
};

type FormErrorProps = {
  name?: string;
  email?: string;
  phoneNumber?: string;
};

const ProfileForm: React.FC = () => {
  const [formInput, setFormInput] = useState<FormProps>({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [error, setError] = useState<FormErrorProps>({});

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const onSuccess = () => {
    enqueueSnackbar("Personal Info is submitted successfully", {
      variant: "success",
      preventDuplicate: true,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormInput((prevFormData) => ({ ...prevFormData, [name]: value }));

    // Clear the error for the specific field
    setError((prevError) => ({ ...prevError, [name]: "" }));
  };

  const newError: FormErrorProps = {};

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!formInput.name) {
      newError.name = "This field is required";
    }
    if (!formInput.email) {
      newError.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(formInput.email)) {
      newError.email = "Enter a valid email";
    }
    if (!formInput.phoneNumber) {
      newError.phoneNumber = "This field is required";
    } else if (!/^\d{11}$/.test(formInput.phoneNumber)) {
      newError.phoneNumber = "Phone Number must be 11 digits";
    }
    setError(newError);

    if (Object.keys(newError).length === 0) {
      sessionStorage.setItem("user", JSON.stringify(formInput));
      const sessionData = sessionStorage.getItem("user");
      if (sessionData) {
        const getSession: FormProps = JSON.parse(sessionData);
        console.log(getSession);
      }
      onSuccess();
      navigate("./selected-plan");
    }
  };

  return (
    <FormContainer>
      <FormHeader
        title="Personal Info"
        subHeading="Please provide your name, email address, and phone number"
      />

      <Fields>
        <FormGroup columns={1} mb="20px">
          <GlobalInput
            inputName={"name"}
            inputValue={formInput.name}
            labelText="Name"
            labelColor="#687683"
            inputPlaceholder="Gideon Kelvin"
            inputType="text"
            handleChange={handleChange}
            errorMessage={error.name}
            error={error.name}
          />
        </FormGroup>
        <FormGroup columns={1} mb="20px">
          <GlobalInput
            inputType="email"
            inputName={"email"}
            inputValue={formInput.email}
            labelText="Email Address"
            labelColor="#687683"
            inputPlaceholder="fas@gmail.com"
            handleChange={handleChange}
            errorMessage={error.email}
            error={error.email}
          />
        </FormGroup>
        <FormGroup columns={1} mb="20px">
          <GlobalInput
            inputName={"phoneNumber"}
            inputValue={formInput.phoneNumber}
            labelText="Phone Number"
            labelColor="#687683"
            inputPlaceholder="+2347069002726"
            handleChange={handleChange}
            errorMessage={error.phoneNumber}
            error={error.phoneNumber}
            maxLength={11}
          />
        </FormGroup>
      </Fields>
      <div className="nav-btn">
        <GlobalBtn
          size="small"
          onClick={handleClick}
          disabled={
            !formInput.name || !formInput.email || !formInput.phoneNumber
          }
          className="btn"
        >
          Next Step
        </GlobalBtn>
      </div>
    </FormContainer>
  );
};

export default ProfileForm;

const FormContainer = styled.form`
  background-color: #fff;
  .nav-btn {
    display: flex;
    justify-content: flex-end;
  }

  @media screen and (max-width: 768px) {
    background-color: #fff;
    border-radius: 20px;
    position: relative;
    top: -40px;
    .btn {
      width: 120px;
    }
  }
`;
