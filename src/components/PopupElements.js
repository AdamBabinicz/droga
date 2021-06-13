import styled from "styled-components";

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  z-index: 999;
`;

export const PopupInner = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 640px;
  background: #fff;
`;

export const Button = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  img {
    max-width: 100%;
  }
`;
