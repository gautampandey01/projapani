import React from "react";

export default function CompanyInfoPage() {
  return (
    <div className="flex flex-col items-center py-12 min-h-[90vh] bg-white">
      {/* Banner Image */}
      <img
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80"
        alt="サロン内観"
        className="w-full max-w-2xl h-52 object-cover rounded-xl mb-8 shadow"
        style={{objectPosition: 'center'}}
      />

      {/* Company Title/Intro */}
      <h1 className="text-2xl md:text-3xl font-bold text-green-600 mb-2 text-center">
        株式会社SALOMO
      </h1>
      <h2 className="text-lg font-semibold text-gray-700 mb-3 text-center">
        美容業界の未来をつなぐ
      </h2>
      <p className="text-gray-500 mb-8 max-w-2xl text-center">
        SALOMOは、美容師・マツエク・ネイルのためのマッチング＆予約プラットフォームを運営し、サロンワークの新しい価値を創造します。業界の発展とユーザーの満足度向上を目指し、ITと人の力で美容の未来を支えます。
      </p>

      {/* Main Info Panels */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6 justify-center mb-8">
        {/* Company Overview */}
        <div className="flex-1 rounded-xl bg-white shadow border p-6">
          <h3 className="text-green-600 font-bold text-lg mb-4">会社概要</h3>
          <dl className="space-y-2 text-sm">
            <div>
              <dt className="font-semibold inline">会社名：</dt>
              <dd className="inline">株式会社SALOMO</dd>
            </div>
            <div>
              <dt className="font-semibold inline">所在地：</dt>
              <dd className="inline">〒100-0000 東京都新宿区サロン通り1-2-3</dd>
            </div>
            <div>
              <dt className="font-semibold inline">設立：</dt>
              <dd className="inline">2022年4月</dd>
            </div>
            <div>
              <dt className="font-semibold inline">代表者：</dt>
              <dd className="inline">山田 太郎</dd>
            </div>
            <div>
              <dt className="font-semibold inline">資本金：</dt>
              <dd className="inline">1,000万円</dd>
            </div>
            <div>
              <dt className="font-semibold inline">従業員数：</dt>
              <dd className="inline">25名</dd>
            </div>
          </dl>
        </div>

        {/* Business Info */}
        <div className="flex-1 rounded-xl bg-white shadow border p-6">
          <h3 className="text-green-600 font-bold text-lg mb-4">事業内容</h3>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>美容師・マツエク・ネイルのためのマッチング＆予約プラットフォーム運営</li>
            <li>サロンワーク向けITソリューションの開発・提供</li>
            <li>業界イベント・セミナーの企画運営</li>
            <li>業界向けマーケティング支援</li>
          </ul>
        </div>
      </div>

      {/* Timeline */}
      <div className="w-full max-w-4xl rounded-xl bg-white shadow border p-6 mb-6">
        <h3 className="text-green-600 font-bold text-lg mb-4">沿革</h3>
        <ul className="text-sm space-y-1">
          <li>2022年4月　株式会社SALOMO設立</li>
          <li>2022年7月　マッチングプラットフォームβ版リリース</li>
          <li>2023年3月　正式サービス開始</li>
          <li>2024年5月　会員数10,000人突破</li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="w-full max-w-4xl rounded-xl bg-white shadow border p-6 mb-10">
        <h3 className="text-green-600 font-bold text-lg mb-4">お問い合わせ</h3>
        <ul className="text-sm space-y-1">
          <li>
            <span className="font-semibold">メール：</span>info@salomo.jp
          </li>
          <li>
            <span className="font-semibold">電話：</span>03-1234-5678
          </li>
          <li>
            <span className="font-semibold">住所：</span>〒100-0000 東京都新宿区サロン通り1-2-3
          </li>
        </ul>
      </div>
    </div>
  );
}
