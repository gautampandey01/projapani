import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const SalomoApp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    { image: "/images/1.jpg", alt: "Japanese professional hair styling" },
    { image: "/images/2.jpg", alt: "Japanese salon interior" },
    { image: "/images/3.jpg", alt: "Japanese hair treatment" },
    { image: "/images/4.jpg", alt: "Japanese hair treatment" },
    { image: "/images/5.jpg", alt: "Japanese hair treatment" },
  ];

  const stylists = [
    {
      name: "田中 美咲",
      specialties: ["カット", "カラー", "パーマ"],
      rating: 4.9,
      price: "¥3,000~",
      location: "渋谷",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "佐藤 健太",
      specialties: ["メンズカット", "スタイリング"],
      rating: 4.8,
      price: "¥2,500~",
      location: "新宿",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "鈴木 あい",
      specialties: ["トリートメント", "ヘッドスパ"],
      rating: 5.0,
      price: "¥4,000~",
      location: "表参道",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const steps = [
    { number: 1, text: "希望金額・メニュー・日程を投稿" },
    { number: 2, text: "美容師からオファーが届く" },
    { number: 3, text: "マッチング（有料リクエストのみ¥500）" },
  ];

  // Auto slide every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 via-white to-pink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-green-500 mr-2">✨</span>
                <span className="text-gray-600">ランクシステムでミスマッチを避けて、マッチングに成功!</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                美容師マッチング&予約プラットフォーム
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                お客様が希望金額とメニューを投稿。美容師・マツエク・ネイルがオファーして、最短でマッチング。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              <button
  className="bg-gradient-to-r from-green-400 to-blue-500 
             hover:from-green-500 hover:to-blue-600
             text-white px-8 py-3 rounded-full font-semibold shadow-lg
             transition-all duration-300 ease-in-out transform hover:scale-105"
>
  お気軽として投稿 →
</button>

                <button
                  className="bg-white text-gray-900 border border-gray-200
                             px-8 py-3 rounded-full font-semibold shadow-lg
                             transition-all duration-300 ease-in-out transform
                             hover:scale-105
                             hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-500
                             hover:text-white
                             focus:bg-gradient-to-r focus:from-pink-400 focus:to-pink-500
                             focus:text-white
                             active:bg-gradient-to-r active:from-pink-500 active:to-pink-600
                             active:text-white"
                >
                  美容師として求人を見る
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                登録リクエストの数：マッチング数1000（Stripe決済）
              </p>
            </div>

            <div className="relative">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide].alt}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-800" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronRight className="w-5 h-5 text-gray-800" />
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroSlides.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">3つの簡単ステップ</h2>
          <div className="flex flex-col md:flex-row gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-center bg-white border border-gray-200 rounded-xl px-6 py-4 min-h-[64px] shadow-sm flex-1"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-700 flex items-center justify-center mr-4">
                  <span className="text-white text-base font-bold">{step.number}</span>
                </div>
                <span className="text-base font-bold text-gray-900">{step.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking System Section */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl bg-white shadow px-6 py-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">顧客ランクシステム</h2>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">
            {[
              { label: "S", stars: 5, text: "¥8,000以上＆リピート希望" },
              { label: "A", stars: 4, text: "¥5,000〜¥8,000" },
              { label: "B", stars: 3, text: "¥1,000〜¥5,000（モデル）" },
              { label: "C", stars: 2, text: "無料リクエスト" },
            ].map(({ label, stars, text }) => (
              <div
                key={label}
                className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm px-6 py-5 flex flex-col justify-center"
              >
                <span className="text-xl font-bold text-gray-900 mb-2">{label}</span>
                <div className="flex items-center mb-2">
                  {[...Array(stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl bg-white shadow px-8 py-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            {/* Left section: Title, sub-title, and feature list */}
            <div className="flex-1 min-w-[250px]">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">今すぐ始めましょう</h2>
              <p className="mb-3 text-gray-700 text-sm">
                投稿は無料。マッチした場合のみ¥500（税込）
              </p>
              <div>
                <div className="flex items-center text-green-700 text-sm mb-1">
                  <span className="mr-2">✔</span>LINEで簡単メッセージ
                </div>
                <div className="flex items-center text-green-700 text-sm mb-1">
                  <span className="mr-2">✔</span>Stripeで安全決済
                </div>
                <div className="flex items-center text-green-700 text-sm">
                  <span className="mr-2">✔</span>履歴はスプレッドシートで管理
                </div>
              </div>
            </div>
            {/* Right section: Buttons */}
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <button
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 ease-in-out min-w-[180px]"
              >
                お客様として投稿
              </button>
              <button
                className="bg-white border border-green-400 text-gray-900 px-8 py-3 rounded-full font-semibold shadow transition-all min-w-[180px]"
              >
                美容師として求人を見る
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SalomoApp;
