import React, { useState } from "react";
import FormHeader from "../globalcomponent/FormHeader";
import SubCard from "../sub/SubCard";
import styled from "styled-components";
import { MainContainer } from "../globalcomponent/Utils";
import Checkbox from "../sub/Checkbox";
import { BackBtn } from "../globalcomponent/BackBtn";
import GlobalBtn from "../globalcomponent/GlobalBtn";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

type CardData = {
  id: number;
  img: string;
  amount: number;
  text: string;
};

const Plan: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<{
    subPlanId?: number;
    subType?: string;
    amount?: number;
  } | null>(null);

  const [duration, setDuration] = useState<{
    monthly?: string;
    yearly?: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const cardData: CardData[] = [
    {
      id: 1,
      img: "./images/icon-arcade.svg",
      amount: 9,
      text: "Arcade",
    },
    {
      id: 2,
      img: "./images/icon-advanced.svg",
      amount: 12,
      text: "Advanced",
    },
    {
      id: 3,
      img: "./images/icon-pro.svg",
      amount: 15,
      text: "Pro",
    },
  ];

  const onSuccess = () => {
    enqueueSnackbar("You have successfully subscribed", {
      variant: "success",
      preventDuplicate: true,
    });
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!selectedPlan || !duration) {
      setError("Please select a plan and a duration.");
      return;
    }

    const payload = {
      subTypeId: selectedPlan?.subPlanId,
      subType: selectedPlan?.subType,
      monthly: duration?.monthly,
      yearly: duration?.yearly,
      amount: selectedPlan?.amount,
    };
    sessionStorage.setItem("subscription", JSON.stringify(payload));
    const subData = sessionStorage.getItem("subscription");
    if (subData) {
      JSON.parse(subData);
      onSuccess();
      navigate("/add-on");
    }
  };

  const handleCardClick = (id: number, text: string, amount: number) => {
    setSelectedPlan({
      subPlanId: id,
      subType: text,
      amount: amount,
    });
    setError(null); // Clear any existing error when a plan is selected
  };

  return (
    <PlanContainer>
      <FormHeader
        title="Select your plan"
        subHeading="You have the option of monthly or yearly billing"
      />
      <div className="card-container">
        {cardData.map((card) => (
          <SubCard
            key={card.id}
            cardData={card}
            action={handleCardClick}
            isActive={selectedPlan?.subPlanId === card.id}
          />
        ))}
      </div>
      <Checkbox duration={duration} setDuration={setDuration} />
      {error && <ErrorText>{error}</ErrorText>}
      <div className="nav-btn">
        <BackBtn />
        <GlobalBtn
          size="small"
          onClick={handleSubmit}
          disabled={!selectedPlan || !duration}
        >
          Next
        </GlobalBtn>
      </div>
    </PlanContainer>
  );
};

export default Plan;

const ErrorText = styled.p`
  color: red;
  text-align: center;
  margin-top: 1rem;
`;
const PlanContainer = styled.div`
  background-color: #fff;
  position: relative;
  padding: 1rem;

  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 20px;
  }
  @media screen and (max-width: 768px) {
    background-color: #fff;
    border-radius: 20px;
    position: relative;
    top: -30px;

    .card-container {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;
