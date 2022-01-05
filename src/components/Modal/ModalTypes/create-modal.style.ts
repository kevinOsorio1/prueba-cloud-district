import styled from "styled-components";
export const ConfirmationButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FormContainer = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 1vw;
  h2 {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
export const Message = styled.div`
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 0.9rem;
  margin-bottom: 1vw;
  margin-top: 1vw;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
`;
export const YesButton = styled.button`
  width: 6rem;
  background-color: greenyellow;
  border: 1px solid gray;
  :hover {
    background-color: green;
  }
`;
export const NoButton = styled.button`
  width: 5rem;
  background-color: whitesmoke;
  border: 1px solid gray;
  :hover {
    background-color: red;
  }
`;
