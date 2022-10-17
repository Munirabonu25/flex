import styled, { css } from "styled-components";

const SearchInpField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  margin-bottom: 64px;
`;

const InpAddressWrapper = styled.div`
  position: relative;
`;

const InpAddressIcon = styled.img`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const SearchInpAddress = styled.input`
  width: 830px;
  height: 44px;
  padding: 12px 0 12px 44px;
  border: 1px solid #e6e9ec;
  border-radius: 2px;
`;

const icon = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const inp = css`
  padding: 12px 0;
  width: 131px;
  height: 44px;
  border: 1px solid #e6e9ec;
  border-radius: 2px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
`;

const StatusIcon = styled.img`
  ${icon};
  left: 29px;
`;

const PriceIcon = styled.img`
  ${icon};
  left: 34px;
`;

const AdvansedIcon = styled.img`
  ${icon};
  left: 14px;
`;

const LoupeIcon = styled.img`
  ${icon};
  left: 54px;
`;

const InpStatus = styled.input`
  ${inp};
  padding-left: 57px;
`;

const InpPrice = styled.input`
  ${inp};
  padding-left: 62px;
`;

const BtnAdvanced = styled.div`
  ${inp};
  padding-left: 40px;
  background-color: #fff;
  cursor: pointer;
`;

const BtnSearch = styled.div`
  ${inp};
  width: 180px;
  padding-left: 40px;
  background-color: #0061df;
  border: 1px solid #0061df;
  color: #fff;
  text-align: center;
`;

// export const inpStatusWrapper = styled.div`
// position: relative;
// `

const HeaderTextWrapper = styled.div`
  text-align: center;
  font-family: "Montserrat";
  font-style: normal;
  margin-bottom: 160px;
`;

const HeaderHeading = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0d263b;
  margin-bottom: 8px;
`;

const HeaderText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;

export {
  SearchInpField,
  InpAddressWrapper,
  InpAddressIcon,
  SearchInpAddress,
  StatusIcon,
  PriceIcon,
  AdvansedIcon,
  LoupeIcon,
  InpStatus,
  InpPrice,
  BtnAdvanced,
  BtnSearch,
  HeaderTextWrapper,
  HeaderHeading,
  HeaderText,
};
