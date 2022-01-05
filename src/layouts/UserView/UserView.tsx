import React, { lazy, useState } from "react";
import { useParams } from "react-router-dom";
import { UserViewUI } from "./userView.style";
import { useUserView } from "../../globals/hooks/useUserView";
import { userDataToUserBOProps } from '../../components/UserList/UserList';

const ModalComponent = lazy(()=>import('../../components/Modal/Modal'))
const UserUIComponent = lazy(()=>import('../../components/User/User'))
const UpdateModalComponent = lazy(()=>import('../../components/Modal/ModalTypes/UpdateModal'))
const CustomIconButtonComponent = lazy(()=>import('../../components/CustomIconButton/CustomIconButton'))
const EditIconComponent = lazy(()=>import('../../components/Icons/EditIcon/EditIcon'))
const RemoveModalComponent = lazy(()=>import('../../components/Modal/ModalTypes/RemoveModal'))
const RemoveIconComponent = lazy(()=>import('../../components/Icons/RemoveIcon/RemoveIcon'))



const UserView = () => {
  const { id } = useParams();
  const {user,onConfirm,onCancel,onDelete,toggle,isShown}= useUserView(id)
  const [modalContent,setModalContent]= useState(<></>)
  
  const handleOpenModal = (modalType:number)=>{
    if(modalType===0){
      setModalContent(<UpdateModalComponent onConfirm={onConfirm} onCancel={onCancel} />)
    }else{
      setModalContent(<RemoveModalComponent onConfirm={onDelete} onCancel={onCancel} message={`¿Estas seguro que deseas eliminar el usuario ${id}`} />)
    }
    toggle()
  }

  return (
    <UserViewUI>
      {user && <UserUIComponent showKeys={true} {...userDataToUserBOProps(user)} />}
      <div style={{display:"flex",flexDirection:'row',justifyContent:'center'}}>

      <CustomIconButtonComponent
        onClick={()=>handleOpenModal(0)}
        text="Actualizar usuario"
        icon={<EditIconComponent />}
      />
      <CustomIconButtonComponent
        onClick={()=>handleOpenModal(1)}
        text="Eliminar usuario"
        icon={<RemoveIconComponent />}
      />
      </div>
      <ModalComponent
        isShown={isShown}
        hide={toggle}
        modalContent={modalContent}
        headerText="Actualizar Usuario"
      />
    </UserViewUI>
  );
};

export default UserView;
