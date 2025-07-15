import { useState, useCallback, useEffect, useRef } from "react";
import toast from "react-hot-toast";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    toast.success("Password copied to clipboard!");
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
      <div className="w-full max-w-lg mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 shadow-lg">
            <span className="text-2xl">🔐</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Password Generator
          </h1>
          <p className="text-white/70 text-sm">
            Create secure passwords instantly
          </p>
        </div>

        {/* Password Display */}
        <div className="relative mb-8">
          <div className="flex items-center bg-white/5 border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm">
            <input
              type="text"
              value={password}
              className="flex-1 bg-transparent text-white placeholder-white/50 px-6 py-4 text-lg font-mono tracking-wider outline-none"
              placeholder="Generated password will appear here..."
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-4 transition-all duration-200 hover:shadow-lg active:scale-95 flex items-center gap-2 font-medium"
            >
              <span className="text-sm">📋</span>
              Copy
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-6">
          {/* Length Slider */}
          <div className="bg-white/5 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <label className="text-white font-medium">Password Length</label>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                {length}
              </span>
            </div>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #3B82F6 0%, #8B5CF6 ${((length - 6) / (100 - 6)) * 100}%, rgba(255,255,255,0.2) ${((length - 6) / (100 - 6)) * 100}%, rgba(255,255,255,0.2) 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-white/50 mt-2">
              <span>6</span>
              <span>100</span>
            </div>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/20 rounded-2xl p-4 backdrop-blur-sm hover:bg-white/10 transition-colors duration-200">
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={numberAllowed}
                    onChange={() => setNumberAllowed((prev) => !prev)}
                    className="sr-only"
                  />
                  <div
                    className={`w-6 h-6 rounded-lg border-2 transition-all duration-200 ${
                      numberAllowed
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 border-transparent"
                        : "border-white/30"
                    }`}
                  >
                    {numberAllowed && (
                      <svg
                        className="w-4 h-4 text-white absolute top-0.5 left-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="ml-3">
                  <span className="text-white font-medium">Numbers</span>
                  <p className="text-white/50 text-xs">Include 0-9</p>
                </div>
              </label>
            </div>

            <div className="bg-white/5 border border-white/20 rounded-2xl p-4 backdrop-blur-sm hover:bg-white/10 transition-colors duration-200">
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={charAllowed}
                    onChange={() => setCharAllowed((prev) => !prev)}
                    className="sr-only"
                  />
                  <div
                    className={`w-6 h-6 rounded-lg border-2 transition-all duration-200 ${
                      charAllowed
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 border-transparent"
                        : "border-white/30"
                    }`}
                  >
                    {charAllowed && (
                      <svg
                        className="w-4 h-4 text-white absolute top-0.5 left-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="ml-3">
                  <span className="text-white font-medium">Symbols</span>
                  <p className="text-white/50 text-xs">Include !@#$%^&*</p>
                </div>
              </label>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={generatePassword}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-200 hover:shadow-xl active:scale-95 flex items-center justify-center gap-3"
          >
            <span className="text-xl">⚡</span>
            Generate New Password
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t border-white/10">
          <p className="text-white/50 text-xs">
            Always use unique passwords for different accounts
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
