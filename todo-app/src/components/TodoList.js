import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {//todos는 할일 배열

  const rowRenderer = useCallback(({ index, key, style }) => {
    //실제로 렌더링 되는 컴포넌트
    const todo = todos[index];

    return (
      <TodoListItem todo={todo}
        key={key}
        onRemove={onRemove}
        onToggle={onToggle}
        style={style}
      />
    );
  }, [onRemove, onToggle, todos]);

  return (
     //react-virtualized 는 렌더링 갯수 정해주는 컴포넌트, 스크롤 이벤트를 감지한다
    <List
     className="TodoList"
     width={512}
     height={513}
     rowCount={todos.length}
     rowHeight={75}
     rowRenderer={rowRenderer}
     list={todos}
     style={{outline:'none'}}
     />
    
    //   {todos.map(todo => (
    //     <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
    //   ))}
    // </div>
  );
};

export default React.memo(TodoList);