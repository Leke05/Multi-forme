import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type DataProps = {
  id: number;
  title: string;
  text: string;
  amount: number;
};

type StorageProps = {
  storageData: DataProps[];
  planData: {
    subPlanId: number;
    subType: string;
    monthly: string;
    yearly: string;
    amount: number;
  };
};

const SummaryCard: React.FC<StorageProps> = ({ storageData, planData }) => {
  const navigate = useNavigate();
  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/selected-plan");
  };
  let planDataTransform: DataProps = {
    id: planData?.subPlanId,
    title: planData?.subType,
    text: `${planData?.monthly} ${planData?.yearly}`,
    amount: planData?.amount,
  };

  const arrayData = [...storageData, planDataTransform];

  const totalSub = arrayData.reduce((acc, curr) => {
    acc += curr.amount;
    return acc;
  }, 0);

  return (
    <>
      <SumContainer>
        <div className="content">
          <div>
            <h3>{planData?.subType}</h3>
            <span onClick={handleEdit}>Change</span>
          </div>
          <p>{`+$${planData?.amount}/mo`}</p>
        </div>
        <hr />

        {storageData.map((data) => (
          <div key={data.id}>
            <div className="sub-plan">
              <p>{data.title}</p>
              <span>{`+$${data.amount}/mo`}</span>
            </div>
            {/* <div className="sub-plan">
            <p>Online services</p>
            <span>+$37/mo</span>
          </div> */}
          </div>
        ))}
      </SumContainer>
      <Total>
        <p>Total (per month)</p>
        <span>{`+$${totalSub}/mo`}</span>
      </Total>
    </>
  );
};

export default SummaryCard;

const SumContainer = styled.div`
  background-color: #f8f9fe;
  border-radius: 10px;
  padding: 2rem 1rem;

  .content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    h3 {
      color: #002958;
      margin-bottom: 1rem;
    }
    p {
      color: #002958;
      font-weight: bold;
    }
    span {
      color: #b5b5bf;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .sub-plan {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-top: 20px;

    p {
      color: #b5b5bf;
      font-size: 16px;
    }
    span {
      color: #002958;
    }
  }
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  margin-top: 0.8rem;

  p {
    color: #b5b5b5;
    font-weight: 700px;
  }
  span {
    color: #463cee;
    font-weight: bold;
  }
`;
