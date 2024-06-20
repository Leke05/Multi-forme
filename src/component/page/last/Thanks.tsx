import styled from "styled-components";

const ThanksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fe;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    background-color: #fff;
    border-radius: 20px;
    position: relative;
    top: -40px;
  }
`;

const ThankYouImage = styled.img`
  margin: 1rem 0;
`;

const ThankYouText = styled.div`
  h2 {
    color: #002958;
    margin-bottom: 1rem;
  }

  p {
    color: #6c757d;
    font-size: 1rem;
  }
`;

const Thanks = () => {
  return (
    <ThanksContainer>
      <ThankYouImage src="./images/icon-thank-you.svg" alt="Thank you" />
      <ThankYouText>
        <h2>Thank you!</h2>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </ThankYouText>
    </ThanksContainer>
  );
};

export default Thanks;
