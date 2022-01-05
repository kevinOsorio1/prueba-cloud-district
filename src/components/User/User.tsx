import React from "react";

import { UserCard, UserImage, UserInfo } from "./Styled";
import UserInfoText from "./UserName";
const DEFAULT_IMAGE =
  "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg";

const UserUI = ({
  id,
  name,
  email,
  job,
  showKeys,
  avatar = DEFAULT_IMAGE
}: Partial<UserBOProps>) => {
  return (
    <UserCard as={showKeys ? "div" : "a"} href={`user/${id}`} key={id}>
      <UserImage
        alt={name}
        decoding="async"
        width={128}
        height={128}
        key={avatar}
        src={avatar}
      />
      <UserInfo>
        <UserInfoText
          field="name"
          showKeys={showKeys}
          label={"Nombre: "}
          text={name}
        />
        <UserInfoText
          field="email"
          showKeys={showKeys}
          label={"Correo: "}
          text={email}
        />
        <UserInfoText
          field="job"
          showKeys={showKeys}
          label={"Trabajo: "}
          text={job}
        />
      </UserInfo>
    </UserCard>
  );
};

export default UserUI;
