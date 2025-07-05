import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const maxLengths = {
    name: 10,
    email: 30,
    comment: 100,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.length <= maxLengths[name]) {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>フォーム（バリデーション付き）</h1>

      {/* 名前 */}
      <input
        type="text"
        name="name"
        placeholder="名前"
        value={form.name}
        onChange={handleChange}
      />
      <p>{form.name ? `${form.name.length} / ${maxLengths.name}文字` : "未入力です"}</p>

      {/* メール */}
      <input
        type="email"
        name="email"
        placeholder="メール"
        value={form.email}
        onChange={handleChange}
      />
      <p>{form.email ? `${form.email.length} / ${maxLengths.email}文字` : "未入力です"}</p>

      {/* コメント */}
      <textarea
        name="comment"
        placeholder="コメント"
        value={form.comment}
        onChange={handleChange}
      />
      <p>{form.comment ? `${form.comment.length} / ${maxLengths.comment}文字` : "未入力です"}</p>
    </div>
  );
}

export default App;
