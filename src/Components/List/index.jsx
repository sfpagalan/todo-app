import React, { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Pagination } from '@mantine/core';

const List = ({ items }) => {
  const { displayCount, hideCompleted } = useContext(SettingsContext);
  const [currentPage, setCurrentPage] = React.useState(1);

  const filteredItems = hideCompleted
    ? items.filter(item => !item.complete)
    : items;

  const startIndex = (currentPage - 1) * displayCount;
  const endIndex = startIndex + displayCount;
  const displayedItems = filteredItems.slice(startIndex, endIndex);

  return (
    <>
      {displayedItems.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}
      <Pagination
        page={currentPage}
        total={Math.ceil(filteredItems.length / displayCount)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default List;
