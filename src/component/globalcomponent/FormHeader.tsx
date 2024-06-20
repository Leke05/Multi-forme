import { Header, PageHeading } from "./Utils";

type Formheaderprops = {
  subHeading?: string;
  title?: string;
};
const FormHeader = ({ subHeading, title }: Formheaderprops) => {
  return (
    <Header>
      <PageHeading>{title}</PageHeading>
      {subHeading && <p>{subHeading}</p>}
    </Header>
  );
};

export default FormHeader;
