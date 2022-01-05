import styled from "styled-components";

const UserCard = styled.a`
  margin: 0 1rem 2rem 1rem;
  text-align: center;
  color: white;
`;

const UserImage = styled.img`
  display: inline-block;
  width: 128px;
  height: 128px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export { UserCard, UserImage, UserInfo };
