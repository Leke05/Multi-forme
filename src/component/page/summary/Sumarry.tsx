import React from "react";
import FormHeader from "../../globalcomponent/FormHeader";
import { BackBtn } from "../../globalcomponent/BackBtn";
import GlobalBtn from "../../globalcomponent/GlobalBtn";
import SummaryCard from "../../summary/SummaryCard";
import { useNavigate } from "react-router-dom";
import { Container } from "../subscription/Subscription";
import styled from "styled-components";

type StorageData = {
  id: number;
  title: string;
  text: string;
  amount: number;
};

type PlanProps = {
  subPlanId: number;
  subType: string;
  monthly: string;
  yearly: string;
  amount: number;
};

const Sumarry = () => {
  const navigate = useNavigate();
  const sessionSub = sessionStorage.getItem("storage");
  let storageData: StorageData[] = [];

  if (sessionSub) {
    storageData = JSON.parse(sessionSub);
  }

  const sessionPlan = sessionStorage.getItem("subscription");

  let planData: PlanProps = {
    subPlanId: 0,
    subType: "",
    monthly: "",
    yearly: "",
    amount: 0,
  };

  if (sessionPlan) {
    planData = JSON.parse(sessionPlan);
  }

  const handleNavigate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/last-page");
  };

  return (
    <SummaryContainer>
      <FormHeader
        title="Finishing up"
        subHeading="ouble-check everything looks OK before confirming..  "
      />
      <SummaryCard storageData={storageData} planData={planData} />
      <div className="nav-btn">
        <BackBtn />
        <GlobalBtn size="small" onClick={handleNavigate}>
          Confirm
        </GlobalBtn>
      </div>
    </SummaryContainer>
  );
};

export default Sumarry;

const SummaryContainer = styled(Container)`
  @media screen and (max-width: 768px) {
    background-color: #fff;
    border-radius: 20px;
    position: relative;
    top: -30px;
  }
`;
