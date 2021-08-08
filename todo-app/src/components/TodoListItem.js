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

export default React.memo(TodoListItem); //props 가 바뀌지 않으면 리렌더링되지 않도록 하는 것. React.memo

/**
 * 컴포넌트가 리렌더링이 될 때
 * 1 자신이 전달받은 props가 변경될 때
 * 2 자신의 state가 바뀔 때
 * 3 부모 컴포넌트가 리렌더링 될 때
 * 4 forceUpdate 함수가 실행될 때
 */