import styled from "styled-components";

interface SubCardProps {
  cardData: {
    id: number;
    img: string;
    amount: number;
    text: string;
  };
  action: (id: number, text: string, amount: number) => void;
  isActive: boolean;
}

const SubCard: React.FC<SubCardProps> = ({ cardData, action, isActive }) => {
  const handleClick = () => {
    action(cardData.id, cardData.text, cardData.amount);
  };

  return (
    <Container isActive={isActive} onClick={handleClick}>
      <img src={cardData.img} alt={cardData.text} />
      <div className="content">
        <h4>{cardData.text}</h4>
        <p>{`$${cardData.amount}/mo`}</p>
      </div>
    </Container>
  );
};

export default SubCard;

const Container = styled.div<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? "#f0f0f0" : "#fff")};
  border-radius: 10px;
  border: 2px solid #958dee;
  padding: 2rem;
  cursor: pointer;

  img {
    width: 40px;
    aspect-ratio: 1;
  }
  .content {
    margin-top: 2rem;

    p {
      margin-top: 0.2rem;
    }
  }
`;
