import { useLocation } from "wouter";

export default function VersionSwitcher() {
  const [location, setLocation] = useLocation();
  
  const versions = [
    { id: "v1", path: "/" },
    { id: "v2", path: "/v2" },
    { id: "v3", path: "/v3" },
    { id: "v4", path: "/v4" },
    { id: "v5", path: "/v5" },
    { id: "v6", path: "/v6" },
    { id: "v7", path: "/v7" },
  ];

  const getCurrentVersion = () => {
    if (location === "/") return "v1";
    return location.replace("/", "");
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-black z-50 py-3">
      <div className="container flex justify-center items-center gap-4">
        {versions.map((version) => {
          const isActive = getCurrentVersion() === version.id;
          return (
            <button
              key={version.id}
              onClick={() => setLocation(version.path)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-transparent text-gray-400 hover:text-white"
              }`}
            >
              {version.id.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
