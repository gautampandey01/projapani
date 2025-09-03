import React from 'react'
import { MapPin, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                <span className="text-black text-sm font-bold">✕</span>
              </div>
              <span className="text-xl font-bold">SALOMO</span>
            </div>
            <p className="text-gray-300 mb-4">
              美容師・マツエク・ネイルのためのマッチング＆予約プラットフォーム。信頼できるプラットフォーム。
            </p>
            <div className="flex items-center text-sm text-gray-300 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              〒100-0000 東京都新宿区サロン通り1-2-3
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <span className="mr-2">✉</span> info@salomo.jp
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">サービス</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/post" className="hover:text-white">投稿</a></li>
              <li><a href="/requests" className="hover:text-white">求人一覧</a></li>
              <li><a href="/" className="hover:text-white">サービス</a></li>
              <li><a href="/" className="hover:text-white">お問い合わせ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">会社情報</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-white">運営会社</a></li>
              <li><a href="/" className="hover:text-white">プライバシーポリシー</a></li>
              <li><a href="/" className="hover:text-white">利用規約</a></li>
              <li><a href="/" className="hover:text-white">採用情報</a></li>
            </ul>
            <h4 className="text-lg font-semibold mb-4">フォローする</h4>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-700 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
