import styled from "styled-components";

/* SITE NAVBAR CSS CODE START  */

const SiteHeader = styled.div`
  background-color: #0d263b;
`;

const SiteNav = styled.div`
  background-color: #0d263b;
  height: 64px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  max-width: 1270px;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

const Logo = styled.img`
  padding: 21px;
`;

const NavList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
`;

const NavItem = styled.div`
  :not(:first-child) {
    margin-left: 64px;
  }
`;

const NavLink = styled.a`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  text-decoration: none;
`;

const NavBtn = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  background-color: #0d263b;
  border: 1px solid #fff;
  border-radius: 2px;
  padding: 12px 40px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export {
  SiteHeader,
  SiteNav,
  NavContent,
  Logo,
  NavList,
  NavItem,
  NavLink,
  NavBtn,
};
