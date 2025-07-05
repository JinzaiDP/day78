import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // カウントの初期値

  const handleIncrement = () => setCount(count + 1); // +1
  const handleDecrement = () => setCount(count - 1); // -1

  return (
    <div style={styles.container}>
      <h1>カウントアップ・ダウンアプリ</h1>
      <p style={styles.counter}>{count}</p>
      <div>
        <button style={styles.button} onClick={handleDecrement}>−</button>
        <button style={styles.button} onClick={handleIncrement}>＋</button>
      </div>
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
    margin: "0 10px",
    cursor: "pointer",
  },
};

export default App;
