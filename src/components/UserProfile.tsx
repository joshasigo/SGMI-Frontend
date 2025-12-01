import { useState, useEffect } from "react";

interface UserInfo {
  email: string;
  name: string;
}

export function UserProfile() {
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">{user.name.charAt(0).toUpperCase()}</span>
        </div>
        <div className="flex-1">
          <p className="font-semibold text-gray-900">{user.name}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
        </div>
      </div>
    </div>
  );
}
