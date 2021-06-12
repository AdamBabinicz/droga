import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
      box-sizing:border-box;
      margin:0;
      padding:0;
      font-family: 'Source Sans Pro', sans-serif;
   }
   body {
     overflow-x: hidden;
   }
`;
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? " #858585" : "#e7e7e7")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: rgba(255, 255, 255, 0.911);
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.911);
    background: ${({ primary }) => (primary ? "#e7e7e7" : " #858585")};
    color: #858585;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
