"use client"
import { useNavigate } from "react-router-dom"

export default function CancelPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-sm p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-2">支払いをキャンセルしました</h1>
        <p className="text-gray-600 mb-6">
          決済は完了していません。内容を変更する場合は「投稿」ページへお戻りください。
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => navigate("/cart")}
            className="border border-gray-300 rounded-lg px-5 py-3 text-gray-700 hover:bg-gray-50"
          >
            カートへ戻る
          </button>
          <button
            onClick={() => navigate("/post")}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg"
          >
            投稿ページへ
          </button>
        </div>
      </div>
    </div>
  )
}
