import React from "react";

function Pagination() {
  return (
    <div class="pagination">
      <div class="pagination__container">
        <div class="pagination__btn">
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 2.28571L3.375 8L9 13.7143L7.875 16L2.54292e-07 8L7.875 9.83506e-08L9 2.28571Z" fill="#FFC85E" />
          </svg>
        </div>
        <ul className="pagination__list pagination-body">
          <li className="current">
            <a href="">1</a>
          </li>
          <li>
            <a href="">2</a>
          </li>
          <li>
            <a href="">3</a>
          </li>
          <li>
            <a href="">4</a>
          </li>
          <li>
            <a href="">5</a>
          </li>
        </ul>
        <div class="pagination__btn">
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 13.7143L5.625 8L0 2.28571L1.125 0L9 8L1.125 16L0 13.7143Z" fill="#FFC85E" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
