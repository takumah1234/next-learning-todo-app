import { useState } from 'react';

export default function Home() {
  // 変数の宣言
  const [todoContext, setTodoContext] = useState('');
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <input
          type="text"
          onChange={(e) => {
              setTodoContext(e.target.value);
          }}
      />
      <button
        type="button"
        onClick={() => {
          const item = {
              context: todoContext,
              id: todoList.length,
          };
          setTodoList([...todoList, item]);
        }}
      >
        登録
      </button>
      <ul>
        {todoList.map((todoItem) => (
        <li key={todoItem.id}>
          {todoItem.context}
          <button
            type="button"
            onClick={() => {
              setTodoList(todoList.filter((item) => item.id !== todoItem.id));
            }}
          >
            削除
          </button>
        </li>
        ))}
      </ul>
    </div>
  )
}