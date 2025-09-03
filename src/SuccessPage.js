"use client"
import { useSearchParams, useNavigate } from "react-router-dom"

export default function SuccessPage() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const sessionId = params.get("session_id")

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-sm p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-2">支払いが完了しました</h1>
        <p className="text-gray-600 mb-6">ご利用ありがとうございます。マッチング手数料の決済が完了しました。</p>
        {sessionId ? <p className="text-xs text-gray-500 mb-6">Session ID: {sessionId}</p> : null}
        <button
          onClick={() => navigate("/home")}
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg"
        >
          ホームへ戻る
        </button>
      </div>
    </div>
  )
}
