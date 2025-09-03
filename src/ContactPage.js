import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    alert("送信されました！");
  };

  return (
    <div className="flex flex-col items-center py-12 min-h-[80vh] bg-white">
      <h1 className="text-2xl md:text-3xl font-bold text-green-600 mb-10 mt-8 text-center">お問い合わせ</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow border border-gray-100 p-8 w-full max-w-md mx-auto mb-6"
      >
        <div className="mb-5">
          <label className="block font-semibold text-gray-700 mb-2">お名前</label>
          <input
            className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-green-400 outline-none"
            name="name"
            type="text"
            placeholder="お名前を入力してください"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block font-semibold text-gray-700 mb-2">メールアドレス</label>
          <input
            className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-green-400 outline-none"
            name="email"
            type="email"
            placeholder="メールアドレスを入力してください"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-8">
          <label className="block font-semibold text-gray-700 mb-2">お問い合わせ内容</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-green-400 outline-none"
            name="message"
            placeholder="ご質問・ご要望などをご記入ください"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded bg-green-600 hover:bg-green-700 text-white font-semibold transition"
        >
          送信する
        </button>
      </form>
      <div className="mb-8 text-sm text-gray-700 text-center space-y-1">
        <div>メール：info@salomo.jp</div>
        <div>電話：03-1234-5678</div>
        <div>住所：〒100-0000 東京都新宿区サロン通り1-2-3</div>
      </div>
    </div>
  );
}
