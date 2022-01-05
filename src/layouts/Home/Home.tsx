import React, { lazy, memo } from "react";
import useCreateUser from "../../globals/hooks/useCreateUser";
import useUserList from "../../globals/hooks/useUserList";
import { CreateButtonUI }  from "../../components/CustomIconButton/customIconButton.style";

const ModalConponent = lazy(()=> import('../../components/Modal/Modal'))
const CreateModalConponent = lazy(()=> import('../../components/Modal/ModalTypes/CreateModal'))
const PaginationContainerConponent = lazy(()=> import('../../components/Pagination/PaginationContainer'))
const HomeUIConponent = lazy(()=> import('./home.styles'))
const UserListConponent = lazy(()=> import('../../components/UserList/UserList'))
const CustomIconButtonConponent = lazy(()=> import('../../components/CustomIconButton/CustomIconButton'))

const Home = () => {
  const { loading, paginated, totalPages, actualPage } = useUserList();
  const { isShown, toggle, onConfirm, onCancel } = useCreateUser();
  return (
    <HomeUIConponent>
      {!loading ? (
        <>
          <CustomIconButtonConponent
            onClick={toggle}
            text="Crear un usuario"
            icon={<CreateButtonUI />}
          />
          {paginated && <UserListConponent users={paginated} />}
          <PaginationContainerConponent pages={totalPages} active={actualPage} />
        </>
      ) : null}
      <ModalConponent
        isShown={isShown}
        hide={toggle}
        modalContent={
          <CreateModalConponent
            onConfirm={onConfirm}
            onCancel={onCancel}
            message="Are you sure you want to delete element?"
          />
        }
        headerText="Crear Usuario"
      />
    </HomeUIConponent>
  );
};

export default memo(Home);
