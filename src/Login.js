import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Shield, Star, Eye, EyeOff, Mail, Lock, User, Link2, ChevronDown } from 'lucide-react';

const SalomoLoginPage = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedId: '',
    password: '',
    confirmPassword: '',
    userType: 'customer'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('フォーム送信:', formData);

    if (activeTab === 'signin') {
      navigate('/home');
    }
  };

  const features = [
    {
      icon: Users,
      title: "大規模コミュニティ",
      description: "何千人ものプロフェッショナルとお客様",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "認証済みプロフィール",
      description: "信頼できる認証済みプロフェッショナル",
      color: "text-green-500"
    },
    {
      icon: Shield,
      title: "安全なプラットフォーム",
      description: "あなたのデータは安全に保護されています",
      color: "text-pink-500"
    },
    {
      icon: Star,
      title: "簡単マッチング",
      description: "理想の相手をすぐに見つけましょう",
      color: "text-orange-500"
    }
  ];

  const stats = [
    { number: "10K+", label: "アクティブユーザー", color: "text-blue-500" },
    { number: "500+", label: "プロフェッショナル", color: "text-green-500" },
    { number: "95%", label: "満足度", color: "text-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <span className="text-sm font-bold">S</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">SALOMO</span>
            </div>
            <span className="text-gray-600 font-medium">マッチングプラットフォーム</span>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Left Side - Marketing Content */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-12">
          <div className="max-w-lg">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              最高のプロとつながる
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                ビューティープロフェッショナル
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-12">
              お客様とビューティープロフェッショナルの理想のマッチングを見つけましょう。
              コミュニティに参加して素晴らしい機会を発見してください。
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`${feature.color} mt-1`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex space-x-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md bg-white shadow-2xl flex flex-col">
          <div className="flex-1 px-8 py-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">お帰りなさい</h2>
              <p className="text-gray-600">
                アカウントにサインインするか{' '}
                <button 
                  onClick={() => setActiveTab('signup')}
                  className="text-blue-500 hover:text-blue-600 ml-1 font-medium"
                >
                  新しいアカウントを作成
                </button>
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('signin')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'signin'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                サインイン
              </button>
              <button
                onClick={() => setActiveTab('signup')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'signup'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                サインアップ
              </button>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Full Name Field (Sign Up Only) */}
              {activeTab === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    氏名
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="氏名を入力してください"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="メールアドレスを入力してください"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* LinkedId Field (Sign Up Only) */}
              {activeTab === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedId
                  </label>
                  <div className="relative">
                    <Link2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="linkedId"
                      value={formData.linkedId}
                      onChange={handleInputChange}
                      placeholder="LinkedIdを入力してください"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  パスワード
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder={activeTab === 'signup' ? 'パスワードを作成してください' : '••••••'}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field (Sign Up Only) */}
              {activeTab === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    パスワード確認
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="パスワードを再入力してください"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* User Type Dropdown (Sign Up Only) */}
              {activeTab === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    私は…
                  </label>
                  <div className="relative">
                    <select
                      name="userType"
                      value={formData.userType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="customer">お客様</option>
                      <option value="professional">ビューティープロフェッショナル</option>
                      <option value="business">ビジネスオーナー</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                {activeTab === 'signin' ? 'サインイン' : 'アカウント作成'}
              </button>
            </div>

            {/* Additional Links */}
            <div className="mt-6 text-center">
              {activeTab === 'signin' ? (
                <p className="text-sm text-gray-600">
                  アカウントをお持ちでない方は{' '}
                  <button
                    onClick={() => setActiveTab('signup')}
                    className="text-blue-500 hover:text-blue-600 font-medium"
                  >
                    こちらからサインアップ
                  </button>
                </p>
              ) : (
                <p className="text-sm text-gray-600">
                  すでにアカウントをお持ちの方は{' '}
                  <button
                    onClick={() => setActiveTab('signin')}
                    className="text-blue-500 hover:text-blue-600 font-medium"
                  >
                    こちらからサインイン
                  </button>
                </p>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-6 bg-gray-50 border-t">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">© 2024 SALOMO. 無断転載を禁じます。</p>
              <div className="flex justify-center space-x-4 text-xs">
                <a href="#" className="text-gray-400 hover:text-gray-600">プライバシーポリシー</a>
                <a href="#" className="text-gray-400 hover:text-gray-600">利用規約</a>
                <a href="#" className="text-gray-400 hover:text-gray-600">お問い合わせ</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalomoLoginPage;
