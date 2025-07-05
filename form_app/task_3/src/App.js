import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({ name: "", email: "", comment: "" });
  const [savedList, setSavedList] = useState([]); // 保存されたデータの一覧

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    if (!form.name && !form.email && !form.comment) return;
    setSavedList([...savedList, form]); // 現在のフォームを保存
    setForm({ name: "", email: "", comment: "" }); // 入力を初期化
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>フォーム保存アプリ</h1>

      <input
        type="text"
        name="name"
        placeholder="名前"
        value={form.name}
        onChange={handleChange}
      /><br />
      <input
        type="email"
        name="email"
        placeholder="メール"
        value={form.email}
        onChange={handleChange}
      /><br />
      <textarea
        name="comment"
        placeholder="コメント"
        value={form.comment}
        onChange={handleChange}
      /><br />

      <button onClick={handleSave}>保存</button>

      <h2>保存済み一覧</h2>
      <ul>
        {savedList.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong>（{item.email}）: {item.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
