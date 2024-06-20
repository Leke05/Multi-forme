import { useNavigate } from "react-router-dom";
import { Back, BackProps } from "./Utils";

export const BackBtn = ({ inset }: BackProps) => {
  const navigate = useNavigate();

  return (
    <Back inset={inset} onClick={() => navigate(-1)}>
      Go Back
    </Back>
  );
};
