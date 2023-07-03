import React from 'react';

export const paginationText = (page: number, pageLimit: number, totalItems: number) => {
  let tempFirst = page * pageLimit - (pageLimit - 1);
  let tempLast = page * pageLimit;

  if (tempLast > totalItems) {
    tempLast = totalItems;
  }

  if (tempFirst > totalItems) {
    tempFirst = totalItems;
  }

  if (totalItems === 0) {
    tempFirst = 0;
    tempLast = 0;
  }

  return (
    <p>
      Showing {tempFirst ? tempFirst : 0}-{tempLast ? tempLast : 0} of {totalItems ? totalItems : 0} items
    </p>
  );
};
