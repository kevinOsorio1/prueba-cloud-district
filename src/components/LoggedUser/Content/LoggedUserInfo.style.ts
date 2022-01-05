import styled  from 'styled-components';

export const UserContainer = styled.div`
  display:flex;
  flex-direction: row;
`;

export const UserImage = styled.img`
  height: ${(props)=>props.height || "50px"};
  width: ${(props)=>props.width || "50px"};
  margin-right: 8px;
`

export const UserName = styled.b`
  color: white;
  align-self: center;
  margin-right: 8px;
`