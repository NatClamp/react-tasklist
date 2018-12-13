import React from 'react';

function List(props) {
  return (
    <ul style={{ listStyleType: 'none' }} className="fullList">
      {props.tasks.map((task, i) => {
        return (
          <li
            key={i}
            style={{
              color: i % 2 === 0 ? 'hotpink' : 'chartreuse',
              textDecoration: task.isComplete ? 'line-through' : 'none',
            }}
            className="listItem"
          >
            <span onClick={() => props.completeTask(task)}>{task.text}</span>
            <button onClick={() => props.deleteTask(task)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
