import React from "react";
import { useEffect, useState } from "react";

export const HeroPaginationList = ({
  pagination,
  setPagination,
  onChangeArrow,
}) => {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    const { page } = pagination;
    const mapPages = page === 1 ? [1, 2, 3] : [page - 1, page, page + 1];
    setPages(mapPages);
  }, []);

  const onChangeNumber = (pageSelected) => {
    const newOffset = (pageSelected - 1) * pagination.limit;
    setPagination({
      limit: 20,
      offset: newOffset,
      page: pageSelected,
    });
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link" href="#" onClick={onChangeNumber(page)}>
              {page}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
