import styled, { css } from "styled-components";

export const PaginationList = styled.div`
  align-self: center;
  display:flex;
`;

export const PaginationItem = styled.button`
  padding: 8px 16px;
  transition: background-color 0.3s;
  border: ${(props: { active: boolean }) =>
    props.active ? "1px solid #4CAF50" : "1px solid #ddd"};
  margin: 0 4px;
  background-color: ${(props) => (props.active ? "#4CAF50" : "transparent")};
  color: white;
  ${(props) =>
    !props.active &&
    css`
      &:hover {
        background-color: #ddd;
        color: black;
      }
    `}
`;
