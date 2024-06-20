import styled from "styled-components";
import GlobalCheckbox from "../globalcomponent/GlobalCheckBox";

type CardProps = {
  subData: { id: number; title: string; text: string; amount: number };
  subPlans: { [key: string]: number };
  handleChanges: (
    event: React.ChangeEvent<HTMLInputElement>,
    title: string,
    id: number
  ) => void;
};

const SingleAdd: React.FC<CardProps> = ({
  subData,
  subPlans,
  handleChanges,
}) => {
  const isChecked = subPlans[subData.title] !== undefined;

  return (
    <SingleContainer isChecked={isChecked}>
      <div className="check-content" key={subData.id}>
        <GlobalCheckbox
          name="subPlan"
          inputValue={subData.id.toString()}
          isChecked={isChecked}
          onChange={(e) => handleChanges(e, subData.title, subData.id)}
        />
        <div>
          <h4>{subData.title}</h4>
          <span>{subData.text}</span>
        </div>
      </div>
      <div className="earning">
        <p>{`+$${subData.amount}/month`}</p>
      </div>
    </SingleContainer>
  );
};

export default SingleAdd;

const SingleContainer = styled.div<{ isChecked: boolean }>`
  background-color: ${(props) => (props.isChecked ? "#f0f0f0" : "#fff")};
  border: 2px solid #e8e8e9;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1rem;

  .check-content {
    display: flex;
    align-items: center;
    gap: 1rem;

    > div {
      h4 {
        color: #243a67;
        font-weight: bold;
        margin-bottom: 5px;
      }
      span {
        color: #a3a4ad;
      }
    }
  }

  .earning {
    p {
      color: #4a3efd;
    }
  }
`;
