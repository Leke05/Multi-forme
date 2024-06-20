import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SidebarMenu from "../sidebar/SidebarMenue";

type MenuItemProps = {
  id: number;
  link: string;
  step: string;
  title: string;
};

const SharedLayout = () => {
  const navData: MenuItemProps[] = [
    {
      id: 1,
      link: "/",
      title: "Your Info",
      step: "step 1",
    },
    {
      id: 2,
      link: "/selected-plan",
      title: "Selected Plan",
      step: "step 2",
    },
    {
      id: 3,
      link: "/add-on",
      title: "Add On",
      step: "step 3",
    },
    {
      id: 4,
      link: "/summary",
      title: "Summary",
      step: "step 4",
    },
  ];

  return (
    <ContainerWrapper>
      <SidebarWrapper>
        <SidebarMenu navData={navData} />
      </SidebarWrapper>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </ContainerWrapper>
  );
};

export default SharedLayout;

const ContainerWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 20px;
  background-color: #fff;
  border: 5px solid #fff;
  border-radius: 1rem;
  width: 100%;
  max-width: 1000px;
  gap: 2.8rem;

  @media (max-width: 746px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0;
    padding: 0;
  }
`;

const SidebarWrapper = styled.div`
  position: relative;
  z-index: 1;

  @media (max-width: 746px) {
    position: relative;
    z-index: 1;
    padding: 1rem;
    background: #fff;
    border-bottom: 5px solid #fff;
  }
`;

const OutletWrapper = styled.div`
  position: relative;
  z-index: 2;

  @media (max-width: 746px) {
    position: relative;
    top: -2rem; /* Adjust the value as needed for the overlap */
    z-index: 2;
    background: #f0f0f0;
    padding: 0 1.5rem;
  }
`;
