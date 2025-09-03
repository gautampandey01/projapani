import React from "react";
import { MapPin, Calendar, Clock } from "lucide-react";

// Star rating component
const StarRating = ({ count = 5 }) => (
  <div className="flex justify-center mb-2">
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 text-yellow-400 fill-current"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.785.57-1.84-.197-1.54-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
      </svg>
    ))}
  </div>
);

const requests = [
  {
    id: 1,
    name: "color",
    comment: "hi",
    area: "Shi",
    price: "¥1,000",
    date: "2025/7/29",
    time: "11:10",
    offerCount: 0,
    type: "新規リクエスト",
  },
  {
    id: 2,
    name: "color",
    comment: "hi",
    area: "Shi",
    price: "¥1,500",
    date: "2025/7/29",
    time: "05:16",
    offerCount: 0,
    type: "新規リクエスト",
  },
  {
    id: 3,
    name: "asd",
    comment: "asd",
    area: "asd",
    price: "¥500",
    date: "2025/8/6",
    time: "10:43",
    offerCount: 0,
    type: "新規リクエスト",
  },
];

export default function RequestList() {
  return (
    <div className="min-h-screen bg-white py-10">
      <h1 className="text-center text-2xl font-bold mb-4">リクエスト一覧</h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          className="rounded-md border border-gray-300 py-2 px-4 w-full max-w-xl outline-none focus:ring-2 focus:ring-green-200"
          placeholder="エリアやサービスで検索"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {requests.map((req) => (
          <div
            key={req.id}
            className="bg-white rounded-2xl shadow-md w-80 p-6 flex flex-col items-center border border-gray-100 relative"
          >
            {/* Avatar with badge above and right-aligned */}
            <div className="relative mb-3 flex justify-center w-full">
              <span className="absolute -top-2 right-6 bg-blue-500 text-white rounded-full text-xs px-3 py-1 font-bold shadow whitespace-nowrap z-10">
                オファー数: {req.offerCount}
              </span>
              <div className="w-20 h-20 flex items-center justify-center">
  <svg viewBox="0 0 40 40" className="w-full h-full">
    {/* Background */}
    <circle cx="20" cy="20" r="20" fill="#eeeeee" />
    {/* Shoulders/body - touches bottom edge */}
    <ellipse cx="20" cy="30.5" rx="13" ry="8.5" fill="#bdbdbd" />
    {/* Head - with gap above shoulders, not touching top */}
    <circle cx="20" cy="13" r="7" fill="#bdbdbd" />
  </svg>
</div>

            </div>

            <StarRating />
            <div className="text-xs text-center text-gray-500 mb-2">{req.type}</div>
            <hr className="w-full my-2 border-gray-200" />
            <div className="text-lg font-semibold mb-2 text-center">{req.name}</div>
            <div className="flex flex-wrap gap-2 mb-1 w-full">
              <span className="flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                <MapPin size={14} className="mr-1 text-gray-400" />
                {req.area}
              </span>
              <span className="flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                {req.price}
              </span>
              <span className="flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                <Calendar size={14} className="mr-1 text-gray-400" />
                {req.date}
              </span>
            </div>
            <div className="flex gap-2 mb-2 w-full">
              <span className="flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                <Clock size={14} className="mr-1 text-gray-400" />
                {req.time}
              </span>
            </div>
            <div className="text-xs text-gray-600 mb-2 w-full">{req.comment}</div>
            <div className="flex space-x-3 w-full">
              <button className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">
                詳細を見る
              </button>
              <button className="flex-1 bg-teal-600 text-white rounded-lg px-4 py-2 hover:bg-teal-700 text-sm flex items-center justify-center space-x-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>オファー</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
