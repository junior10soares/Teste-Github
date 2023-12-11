import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`
export const LoadingAnimation = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
`
export const Spinneer = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spinAnimation} 0.8s linear infinite;
`


