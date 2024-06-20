import { useState } from "react";
import SingleAdd from "../../addon/SingleAdd";
import { BackBtn } from "../../globalcomponent/BackBtn";
import FormHeader from "../../globalcomponent/FormHeader";
import GlobalBtn from "../../globalcomponent/GlobalBtn";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Subscription = () => {
  const [subPlans, setSubPlans] = useState<{ [key: string]: number }>({});
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const onSuccess = () => {
    enqueueSnackbar("You have successfully added your storage plan", {
      variant: "success",
      preventDuplicate: true,
    });
  };

  const handleChanges = (
    event: React.ChangeEvent<HTMLInputElement>,
    title: string,
    id: number
  ) => {
    setSubPlans((prevPlans) => {
      const newPlans = { ...prevPlans };
      if (newPlans[title]) {
        delete newPlans[title];
      } else {
        newPlans[title] = id;
      }
      return newPlans;
    });
  };

  const subData = [
    {
      id: 1,
      title: "Online services",
      text: "Access to multiplayer games",
      amount: 1,
    },
    {
      id: 2,
      title: "Larger storage",
      text: "Extra 1TB of cloud save",
      amount: 2,
    },
    {
      id: 3,
      title: "Customizable profile",
      text: "Custom theme on your profile",
      amount: 2,
    },
  ];

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    sessionStorage.setItem("storage", JSON.stringify(initPay));
    const subData = sessionStorage.getItem("storage");
    if (subData) {
      onSuccess();
      navigate("/summary");
    }
  };
  // Filter the online services based on subPlans
  const initPay = subData.filter((data) => subPlans[data.title] !== undefined);
  return (
    <Container>
      <FormHeader
        title="Pick add-ons"
        subHeading="Add-ons help enhance your gaming experience"
      />
      {subData.map((data) => (
        <SingleAdd
          subData={data}
          key={data.id}
          subPlans={subPlans}
          handleChanges={handleChanges}
        />
      ))}
      <div className="nav-btn">
        <BackBtn />
        <GlobalBtn size="small" type="button" onClick={handleSubmit}>
          Next
        </GlobalBtn>
      </div>
    </Container>
  );
};

export default Subscription;

export const Container = styled.div`
  background-color: #fff;

  @media screen and (max-width: 768px) {
    background-color: #fff;
    border-radius: 20px;
    position: relative;
    top: -30px;
    padding: 1rem;
  }
`;
