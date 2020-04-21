import React from 'react';

function List(props) {
  return (
    <ul>
      {props.items.map((el) => (
        <li key={el.id}>
          <span
            onClick={() => props.toggleItem && props.toggleItem(el.id)}
            style={{ textDecoration: el.complete ? 'line-through' : 'none' }}
          >
            {el.name}
          </span>
          <button onClick={() => props.deleteItem(el)}>X</button>
        </li>
      )
      )}
    </ul>
  )
}

export default List;