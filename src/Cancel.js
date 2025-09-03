import { Link } from "react-router-dom";

export default function Cancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">❌ 支払いがキャンセルされました</h1>
        <p className="text-gray-500 mb-6">もう一度試すか、他の方法を選んでください。</p>
        <Link
          to="/cart"
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg"
        >
          カートに戻る
        </Link>
      </div>
    </div>
  );
}
