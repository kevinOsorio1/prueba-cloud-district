import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PaginationItem, PaginationList } from "./Pagination.styles";
import { fetchPageNumbers, RIGHT_PAGE } from "./pagination.utils";

const PaginationContainer = ({ pages, active }: PaginationContainerProps) => {
  const [,setSearchParams] = useSearchParams()

  const renderPages = useMemo(()=>{
    return fetchPageNumbers(pages,active)
  },[active, pages])

  const givePrevAndNext = () =>{
    return {
      prev: active-2,
      next: active+2
    }
  }
  const {prev,next} = givePrevAndNext()

  const handleChangePage = (page:number | string)=>{
    if(typeof page === 'number'){
      setSearchParams({page:String(page)})
      return
    }
    if(page === RIGHT_PAGE){
      setSearchParams({page:String(next)})
      return 
    }
    setSearchParams({page:String(prev)})
  }


  return (
    <PaginationList>
      {renderPages.map((page)=>{
        return <PaginationItem
        active={active === page}
        data-testid={`page-${page}`}
        key={page}
        onClick={()=>handleChangePage(page)}
      >
        {typeof page === 'number' ? page : "..."}
      </PaginationItem>
      })}
    </PaginationList>
  );
};

export default PaginationContainer;
