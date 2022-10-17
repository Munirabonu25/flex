import styled, { css } from "styled-components";

/* CARD CSS CODE START  */
const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 381px;
  height: 429px;
  border-radius: 3px;
  margin-bottom: 30px;
  transition: transform 0.4s ease 0s;
  background-color: #fff;
  border: 1px solid #e6e9ec;

  :hover {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 17px 47px 8px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 17px 47px 8px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 17px 47px 8px rgba(34, 60, 80, 0.2);
  }
`;

const CardBody = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 380px;
  height: 220px;
`;

const HouseImg = styled.img`
  display: flex;
  width: 381px;
  height: 220px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

const btn = css`
  position: absolute;
  top: 25px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: #fff;
  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 6px 12px;
  text-align: center;
  border: 0;
  border-radius: 3px;
`;
const BtnBlue = styled.button`
  ${btn};
  position: absolute;
  left: 25px;
  background-color: #5061df;
`;

const BtnBlack = styled.button`
  ${btn};
  position: absolute;
  right: 25px;
  background-color: #0d263b;
`;

const CardMain = styled.div`
  position: relative;
  padding-top: 24px;
  border-top: 0;
`;

const UserImg = styled.img`
  position: absolute;
  top: -19px;
  right: 23px;
  border: 2px solid #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  object-fit: cover;
`;

const TextContent = styled.div`
  margin-left: 20px;
  font-family: "Montserrat";
  font-style: normal;
`;
const CardHeading = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #0d263b;
  margin-bottom: 4px;
`;

const City = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #302f2f;
  margin-bottom: 17px;
`;

const Desc = styled.strong`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-bottom: 17px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  margin-bottom: 16px;
`;

const IconTextWrapper = styled.div`
  text-align: center;
  font-family: "Montserrat";
  color: #696969;
  margin-left: 35px;
`;

const IconText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const CardFooter = styled.div`
  border-top: 2px solid #e6e9ec;
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const PriceContent = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  margin-left: 20px;
`;

const Through = styled.div`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-decoration: line-through;
  color: #696969;
`;

const Price = styled.div`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;

const CardIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -13px;
`;

const TopBottomWrapper = styled.div`
  margin-right: 20px;
  margin-top: 3px;
`;

const BottomIcon = styled.img`
  margin-top: 7px;
`;

const TopIcon = styled.img`
  margin-bottom: 7px;
`;

const LikeIcon = styled.img`
  margin: 12px;
  border: 1px solid #f6f8f9;
  padding: 10px;
  border-radius: 50%;
  background-color: #f6f8f9;
  color: #fff;
`;

const CardBtnWrapper = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 48px;
  margin-bottom: 96px;
`;

const BtnPrimaryCard = styled.button`
  ${btn};
  background: #0061df;
  border-radius: 2px;
  font-family: "Montserrat";
  padding: 12px 84px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  flex: none;
  order: 0;
  flex-grow: 0;
  border: 0;
`;

export {
  CardContent,
  Card,
  CardBody,
  HouseImg,
  BtnBlue,
  BtnBlack,
  CardMain,
  UserImg,
  TextContent,
  CardHeading,
  City,
  Desc,
  IconWrapper,
  IconTextWrapper,
  IconText,
  CardFooter,
  PriceContent,
  Through,
  Price,
  CardIconWrapper,
  TopBottomWrapper,
  BottomIcon,
  TopIcon,
  LikeIcon,
  CardBtnWrapper,
  BtnPrimaryCard,
};
