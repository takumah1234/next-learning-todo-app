import { useState } from 'react';

export default function Home() {
  // 変数の宣言
  const [displayedText, setDisplayedText] = useState("Hello!enPiT!!")
  return (
    <div>
      <input
          type="text"
          onChange={(e) => {
              setDisplayedText(e.target.value);
          }}
      />
      <p>
        {
          /* 用意した変数の中身を表示 */
          displayedText
        }
      </p>
    </div>
  )
}
