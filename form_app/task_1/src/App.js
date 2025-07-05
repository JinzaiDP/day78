import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  // 入力変更をすべて1つの関数で処理
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>複数項目フォーム</h1>

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

      <h3>入力内容の確認</h3>
      <p>名前: {form.name}</p>
      <p>メール: {form.email}</p>
      <p>コメント: {form.comment}</p>
    </div>
  );
}

export default App;
