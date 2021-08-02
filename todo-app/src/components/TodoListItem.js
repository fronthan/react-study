import React from 'react';
import {
  MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline
} from 'react-icons/md';

import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={checked ? 'checked' : ''} onClick={()=> onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

TodoListItem.propTypes = {};

export default TodoListItem;