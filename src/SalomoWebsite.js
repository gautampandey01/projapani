"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SalomoWebsite() {
  const [selectedMenu, setSelectedMenu] = useState("")
  const [selectedArea, setSelectedArea] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [budget, setBudget] = useState("")
  const [details, setDetails] = useState("")
  const navigate = useNavigate()

  const handlePostForFree = () => {
    const summary = {
      menu: selectedMenu,
      area: selectedArea,
      date: selectedDate,
      time: selectedTime,
      budget,
      details,
    }
    // keep it in localStorage too in case of refresh on cart page
    try {
      localStorage.setItem("salomo-summary", JSON.stringify(summary))
    } catch {}
    navigate("/cart", { state: { summary } })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Form Section */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">リクエストを投稿</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Menu */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">メニュー</label>
                <input
                  type="text"
                  placeholder="カット / カラー / マツエク / ネイル など"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedMenu}
                  onChange={(e) => setSelectedMenu(e.target.value)}
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">予算 (円)</label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  <option value="">自動ランク A</option>
                  <option value="5000">〜5,000円</option>
                  <option value="10000">〜10,000円</option>
                  <option value="15000">〜15,000円</option>
                  <option value="20000">〜20,000円</option>
                  <option value="30000">〜30,000円</option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Area */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">エリア</label>
                <input
                  type="text"
                  placeholder="例：新宿 / 渋谷 / 立川"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">希望日</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">希望時間</label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Other Details → moved outside columns and spans 2 */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">その他</label>
              <textarea
                rows={6}
                placeholder="髪質・長さ、希望スタイル、こだわり等"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="mt-8 flex justify-between items-center">
            <p className="text-sm text-gray-500">マッチした場合のみ¥500（Stripe決済）</p>
            <button
              onClick={handlePostForFree}
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              無料で投稿
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
