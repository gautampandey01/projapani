"use client"

import { useEffect, useMemo, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const API_BASE =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_BASE) ||
  (typeof process !== "undefined" && process.env?.REACT_APP_API_BASE) ||
  (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_API_BASE) ||
  "https://salomo-backend.onrender.com" // 👈 fallback updated

export default function CartPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const passedSummary = location.state?.summary
  const summary = useMemo(() => {
    if (passedSummary) return passedSummary
    try {
      const s = localStorage.getItem("salomo-summary")
      return s ? JSON.parse(s) : null
    } catch {
      return null
    }
  }, [passedSummary])

  useEffect(() => {
    if (passedSummary) {
      try {
        localStorage.setItem("salomo-summary", JSON.stringify(passedSummary))
      } catch {}
    }
  }, [passedSummary])

  const handleCheckout = async () => {
    if (!summary) return
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ summary }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Failed to create session")
      window.location.href = data.url // Redirect to Stripe Checkout
    } catch (err) {
      alert(`決済の開始に失敗しました: ${err.message}`)
      setLoading(false)
    }
  }

  if (!summary) {
    return (
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-2xl font-bold mb-4 text-center">カート</h1>
            <p className="text-gray-600 mb-6 text-center">カートに表示するリクエストがありません。</p>
            <div className="text-center">
              <button
                onClick={() => navigate("/post")}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg"
              >
                リクエストを投稿する
              </button>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">カート</h1>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">メニュー</span>
              <span className="font-medium">{summary.menu || "-"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">エリア</span>
              <span className="font-medium">{summary.area || "-"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">希望日・時間</span>
              <span className="font-medium">{(summary.date || "-") + " " + (summary.time || "")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">予算</span>
              <span className="font-medium">{summary.budget ? `¥${summary.budget}` : "-"}</span>
            </div>
            {summary.details ? (
              <div>
                <div className="text-gray-500 mb-1">その他</div>
                <div className="border rounded-md p-3 bg-gray-50 text-gray-800">{summary.details}</div>
              </div>
            ) : null}
          </div>

          <hr className="my-6" />

          <div className="flex items-center justify-between">
            <div className="text-gray-600 text-sm">マッチング手数料</div>
            <div className="text-lg font-semibold">¥500</div>
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <button
              onClick={() => navigate("/post")}
              className="border border-gray-300 rounded-lg px-5 py-3 text-gray-700 hover:bg-gray-50"
            >
              変更する
            </button>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="bg-teal-600 hover:bg-teal-700 disabled:opacity-60 text-white font-medium px-6 py-3 rounded-lg"
            >
              {loading ? "リダイレクト中..." : "Stripeで支払う"}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
