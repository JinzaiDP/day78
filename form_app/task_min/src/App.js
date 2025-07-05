import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState(""); // 入力値の状態管理（初期値は空文字）

  return (
    <div style={styles.container}>
      <h1>リアルタイムフォーム</h1>

      {/* 入力フォーム */}
      <div style={styles.block}>
        <input
          type="text"
          placeholder="文字を入力してください"
          value={inputText} // 入力内容を状態と同期
          onChange={(e) => setInputText(e.target.value)} // 入力変化時に更新
        />
      </div>

      {/* 表示エリア */}
      <div style={styles.block}>
        <p>リアルタイム表示: {inputText}</p>
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: "100px" },
  block: { margin: "20px" },
};

export default App;
