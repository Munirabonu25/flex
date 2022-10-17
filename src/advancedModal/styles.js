import styled from "styled-components";

const Modal = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  width: 100%;
  max-width: 940px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding-left: 30px;
  padding-top: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  position: absolute;
  top: 130px;
  left: 300px;
  z-index: 100;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;

const InputFeild = styled.div`
  width: 880px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Search = styled.input`
  border: 1px solid #e6e9ec;
  border-radius: 2px;
  padding: 12px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
`;

const ModalInfoFeild = styled.div`
  width: 660px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.div`
  width: 440px;
  margin-bottom: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalFooter = styled.div`
  background: #f6f8f9;
  border-radius: 0px 0px 5px 5px;
  padding: 20px 30px;
  margin-left: -30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const BtnClear = styled.div`
  background: #0061df;
  border-radius: 5px;
  padding: 12px 38px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  flex: none;
  order: 0;
  flex-grow: 0;
  border: 1px solid #fff;
`;

export {
  Modal,
  Title,
  InputFeild,
  Search,
  ModalInfoFeild,
  Price,
  ModalFooter,
  BtnClear,
};
