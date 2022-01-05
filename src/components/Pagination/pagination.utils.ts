export const LEFT_PAGE = "LEFT";
export const RIGHT_PAGE = "RIGHT";
export const fetchPageNumbers = (pages: number, active: number) => {
  const totalPages = pages;
  const currentPage = active;
  const pageNeighbours = 1;

  const totalNumbers = pageNeighbours * 2 + 1;
  const totalBlocks = totalNumbers + 2;
  if (totalPages > totalBlocks) {
    let pagesPagination = [];

    const leftBound = currentPage - pageNeighbours;
    const rightBound = currentPage + pageNeighbours;
    const beforeLastPage = totalPages - 1;

    const startPage = leftBound > 2 ? leftBound : 2;
    const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

    pagesPagination = range(startPage, endPage);
    const pagesCount = pagesPagination.length;
    const singleSpillOffset = totalNumbers - pagesCount - 1;

    const leftSpill = startPage > 2;
    const rightSpill = endPage < beforeLastPage;

    const leftSpillPage = LEFT_PAGE;
    const rightSpillPage = RIGHT_PAGE;

    if (leftSpill && !rightSpill) {
      const extraPages = range(startPage - singleSpillOffset, startPage - 1);
      pagesPagination = [leftSpillPage, ...extraPages, ...pagesPagination];
    } else if (!leftSpill && rightSpill) {
      const extraPages = range(endPage + 1, endPage + singleSpillOffset);
      pagesPagination = [...pagesPagination, ...extraPages, rightSpillPage];
    } else if (leftSpill && rightSpill) {
      pagesPagination = [leftSpillPage, ...pagesPagination, rightSpillPage];
    }

    return [1, ...pagesPagination, totalPages];
  }
  return range(1, totalPages);
};

export const range = (from: number, to: number, step = 1) => {
  let i = from;
  const returnedRange = [];

  while (i <= to) {
    returnedRange.push(i);
    i += step;
  }

  return returnedRange;
};
