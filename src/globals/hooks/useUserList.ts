import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { UsersContext } from "../../contexts/UsersContext/useUsersContext";
import Repository from "../../reposiitory/Repository";
import { useSaveUser } from "./useSaveUser";

const paginatedUsers = (page: number,users:UserMap) => {
  const ids = Object.keys(users)
  const inRange = 5

  const slice = ids.slice((page-1) * (inRange) ,page*inRange)
  return slice.reduce((acc,el)=>{
    return {...acc,[el]:users[el]}
  },{})
};

const useUserList = () => {
  const {users} = useContext(UsersContext)
  const { saveUserArray } = useSaveUser();
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(0);
  const [params] = useSearchParams();
  const [actualPage, setActualPage] = useState(Number(params.get("page")) || 1);

  const initHome = useCallback(async () => {
    setLoading(true);
    const { data } = await Repository.users
      .findAll(actualPage)
      .then((response) => {
        saveUserArray(response.data.data);
        setLoading(false);
        return response;
      });
    data.total_pages > 0 && setPages(data.total_pages);
  }, [actualPage, saveUserArray]);

  useEffect(() => {
    initHome();
  }, [initHome]);

  useEffect(() => {
    const urlPage = params.get("page");
    if (urlPage) {
      setActualPage(Number(urlPage));
    }
  }, [params]);

  const totalPages = useMemo(() => {
    const reduxPages = Math.ceil(Object.keys(users).length / 5);
    return pages > reduxPages ? pages : reduxPages;
  }, [pages, users]);

  

  const paginated = useMemo(()=>paginatedUsers(actualPage, users),[actualPage, users]);

  return { loading, paginated, totalPages, actualPage };
};

export default useUserList;
