import styled from "styled-components";

const SiteFooter = styled.div`
  background-color: #0d263b;
  font-family: "Montserrat";
  font-style: normal;
`;

const SiteContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 48px;
`;

const FooterMain = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  max-width: 1270px;
`;

const ContactHeading = styled.div`
  padding-bottom: 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;

const ContactIconsContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const ContactIcon = styled.img`
  margin-right: 21px;
`;

const FooterText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
`;

const SocialList = styled.div`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 160px;
`;

const FooterList = styled.div`
  list-style-type: none;
`;

const FooterHeading = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin: 0;
  padding: 0;
  margin-bottom: 32px;
`;

const FooterItem = styled.div`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`;

const FooterItemLink = styled.a`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  text-decoration: none;
`;

const FooterBottom = styled.div`
  border-top: 2px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 130px;
`;

export {
  SiteFooter,
  SiteContent,
  FooterMain,
  ContactHeading,
  ContactIconsContent,
  ContactIcon,
  FooterText,
  SocialList,
  FooterList,
  FooterHeading,
  FooterItem,
  FooterItemLink,
  FooterBottom,
};
