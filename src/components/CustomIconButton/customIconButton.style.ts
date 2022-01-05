import styled from "styled-components";
 const CreateButtonUI = styled.div`
  --b: 2px;
  width: 30px;
  aspect-ratio: 1/1;
  margin-right: 1vw;
  border: 10px solid green;
  background: conic-gradient(
      from 90deg at var(--b) var(--b),
      green 90deg,
      #fff 0
    )
    calc(100% + var(--b) / 2) calc(100% + var(--b) / 2) / calc(50% + var(--b))
    calc(50% + var(--b));
  display: inline-block;
  border-radius: 50%;
`;

 const ButtonContainer = styled.div`
  align-self: center;
  transition: background-color 1s;
  margin: 1vh 1vw 1vh 1vw;
  border: 1px solid #1c0662;
  &:hover {
    background-color: #1c0662;
  }
`;

 const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: transparent;
`;

 const Text = styled.p`
  color: white;
`;

export {CreateButtonUI, ButtonContainer,Button,Text}