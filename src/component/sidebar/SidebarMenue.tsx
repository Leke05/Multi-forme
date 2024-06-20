import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";
import { ReactNode } from "react";

type MenuProps = {
  navData: {
    id: number;
    link: string;
    step: string;
    title: string;
  }[];
};

const SidebarMenu = ({ navData }: MenuProps) => {
  const navTemplate = navData?.map((nav) => (
    <CustomNavLink to={nav.link} key={nav.id}>
      <span className="nav-numb">{nav.id}</span>

      <div className="nav-text">
        <span className="step">{nav.step}</span>
        <span className="title">{nav.title}</span>
      </div>
    </CustomNavLink>
  ));

  return <Container>{navTemplate}</Container>;
};

export default SidebarMenu;

const Container = styled.nav`
  background-image: url(./images/bg-sidebar-desktop.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  border-radius: 10px;

  .nav-numb {
    width: 40px;
    aspect-ratio: 1;
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin: 0.5rem;
    border: 1px solid #bbb;
  }

  @media (max-width: 746px) {
    background-image: url(./images/bg-sidebar-mobile.svg);
    background-size: cover;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    min-height: 35vh;
    width: 100%;
    justify-content: center;
    gap: 20px;
    .nav-numb {
      width: 30px;
    }
  }
`;

interface CustomNavLinkProps {
  to: string;
  children: ReactNode;
}

const CustomNavLink = ({ to, children }: CustomNavLinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <StyledNavLink to={to} className={match ? "active" : ""}>
      {children}
    </StyledNavLink>
  );
};

const StyledNavLink = styled(NavLink)`
  display: flex;
  gap: 1em;
  text-decoration: none;

  &.active {
    .nav-numb {
      border: 1px solid #000;
      background-color: #bbe0fe;
    }
  }

  .nav-text {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    gap: 0.1rem;
    place-items: center;

    .step {
      text-transform: uppercase;
      color: #a5a5fe;
    }
    .title {
      text-transform: uppercase;
      color: #fff;
      font-weight: bold;
    }
  }

  @media (max-width: 746px) {
    padding: 1rem;
    .nav-text {
      display: none;
      .title {
        font-size: 0.875rem;
      }
    }
  }
`;
