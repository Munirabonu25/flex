import React from "react";
import { cardObj } from "../mock";

import
{
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
} from "./styled"

class App extends React.Component
{
  render ()
  {
    return (
      <div className="container">
        <CardContent>
          { cardObj.map( ( item ) =>
          {
            return (
              /* CARD CODE START */
              <Card key={ item.id }>
                <CardBody>
                  <HouseImg src={ item.img } alt="" />
                  <BtnBlue>FEATURED</BtnBlue>
                  <BtnBlack>FOR SALE</BtnBlack>
                </CardBody>
                <CardMain>
                  <UserImg src={ item.userImg } alt="" />
                  <TextContent>
                    <CardHeading>{ item.title }</CardHeading>
                    <City>{ item.city }</City> /<Desc>{ item.description }</Desc>
                  </TextContent>
                  <IconWrapper>
                    <IconTextWrapper>
                      <img src={ item.icon1 } alt="svg" />
                      <IconText>{ item.iconTitle1 } Beds</IconText>
                    </IconTextWrapper>

                    <IconTextWrapper>
                      <img src={ item.icon2 } alt="svg" />
                      <IconText>{ item.iconTitle2 }</IconText>
                    </IconTextWrapper>

                    <IconTextWrapper>
                      <img src={ item.icon3 } alt="svg" />
                      <IconText>{ item.iconTitle3 }</IconText>
                    </IconTextWrapper>
                    <IconTextWrapper>
                      <img src={ item.icon4 } alt="svg" />
                      <IconText>{ item.iconTitle4 } Sq Ft</IconText>
                    </IconTextWrapper>
                  </IconWrapper>
                  <CardFooter>
                    <PriceContent>
                      <Through>{ item.price1 }</Through>
                      <Price>{ item.price2 }</Price>
                    </PriceContent>
                    <CardIconWrapper>
                      <TopBottomWrapper>
                        <BottomIcon src={ item.bottomIcon } alt="" />
                        <TopIcon src={ item.topIcon } alt="" />
                      </TopBottomWrapper>
                      <LikeIcon src={ item.like } alt="" />
                    </CardIconWrapper>
                  </CardFooter>
                </CardMain>
              </Card>
            );
          } ) }

        </CardContent>
        {/* <CardBtnWrapper>
          <BtnPrimaryCard>Show more</BtnPrimaryCard>
        </CardBtnWrapper> */}
      </div>
    );
  }
}

export default App;
