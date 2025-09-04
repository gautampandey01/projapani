import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const API_BASE =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_BASE) ||
  (typeof process !== "undefined" && process.env?.REACT_APP_API_BASE) ||
  (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_API_BASE) ||
  "https://salomo-backend.onrender.com"; // 👈 fallback updated

export default function Success() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionId) return;
    const fetchSession = async () => {
      try {
        const res = await fetch(`${API_BASE}/checkout-session/${sessionId}`);
        const data = await res.json();
        setSession(data);
      } catch (err) {
        console.error("Error fetching session:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSession();
  }, [sessionId]);

  if (!sessionId) {
    return (
      <div className="p-8 text-center text-red-600">
        ❌ No session ID found.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-8 text-center text-gray-500">
        Loading payment details...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="p-8 text-center text-red-500">
        ⚠️ Could not load payment details.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white shadow-md rounded-lg p-8 text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          ✅ 支払いが成功しました！
        </h1>

        <p className="text-gray-600 mb-2">
          あなたの決済ID: <span className="font-mono">{session.id}</span>
        </p>

        <div className="text-left mt-4 text-gray-700 space-y-2">
          <p>
            <strong>Amount:</strong> ¥{session.amount_total / 100}
          </p>
          <p>
            <strong>Status:</strong> {session.payment_status}
          </p>
          <p>
            <strong>Email:</strong> {session.customer_details?.email || "N/A"}
          </p>
        </div>

        <p className="text-gray-500 mt-4">ありがとうございました。</p>

        <Link
          to="/"
          className="mt-6 inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}
