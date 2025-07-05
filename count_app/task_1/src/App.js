import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // カウントの初期値は0

  const handleIncrement = () => {
    setCount(count + 1); // ボタンが押されたらカウント+1
  };

  return (
    <div style={styles.container}>
      <h1>カウントアップアプリ</h1>
      <p style={styles.counter}>{count}</p>
      <button style={styles.button} onClick={handleIncrement}>＋</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  counter: {
    fontSize: "48px",
    margin: "20px 0",
  },
  button: {
    fontSize: "32px",
    padding: "10px 20px",
    cursor: "pointer",
  },
};

export default App;
