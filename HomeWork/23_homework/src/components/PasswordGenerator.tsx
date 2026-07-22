import { useState } from "react";
import Copy from "../assets/copy.svg";
// import Generate from "../assets/generate.svg";

export default function PasswordGenerator() {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}<>?";

  const generatePassword = (): void => {
    let characters = "";

    if (includeUppercase) characters += uppercase;
    if (includeLowercase) characters += lowercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    if (!characters) {
      alert("აირჩიე მინიმუმ ერთი ვარიანტი!!!!");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }
    setPassword(generatedPassword);
    console.log(generatedPassword);
  };

  const copyPassword = async (): Promise<void> => {
    if (!password) return;

    try {
      await navigator.clipboard.writeText(password);
      alert("Password copied!");
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const calculateStrength = () => {
    let score = 0;

    if (length >= 8) score++;
    if (length >= 12) score++;

    if (includeUppercase) score++;
    if (includeLowercase) score++;
    if (includeNumbers) score++;
    if (includeSymbols) score++;

    if (score <= 2) {
      return {
        text: "TOO WEAK!",
        color: "red",
        bars: 1,
      };
    }

    if (score === 3) {
      return {
        text: "WEAK",
        color: "orange",
        bars: 2,
      };
    }

    if (score <= 5) {
      return {
        text: "MEDIUM",
        color: "gold",
        bars: 3,
      };
    }

    return {
      text: "STRONG",
      color: "limegreen",
      bars: 4,
    };
  };

  const strength = calculateStrength();

  const strengthColor =
    strength.color === "red"
      ? "bg-red-500"
      : strength.color === "orange"
        ? "bg-orange-500"
        : strength.color === "gold"
          ? "bg-yellow-400"
          : "bg-green-500";

  return (
    <>
      <section className="pt-16 pb-16 md:pt-33.25 md:pb-49 max-w-360 m-auto">
        <div className="w-[87%] m-auto text-[#E6E5EA] md:w-[70%] xl:w-[37.5%]">
          <div>
            <h3 className="text-[#817D92] text-[16px] font-bold text-center mb-4 md:mb-8 md:text-[24px]">
              Password Generator
            </h3>
          </div>

          <div className="flex bg-[#24232C] justify-between items-center">
            <input
              type="text"
              value={password}
              readOnly
              className="text-[24px] font-bold ml-4 mt-4.25 mb-3.75 md:text-[32px]"
            />
            <img
              src={Copy}
              alt="coppy-icon"
              onClick={copyPassword}
              className="cursor-pointer mr-3.75 h-5 w-[17.5px] md:h-6 md:w-5.25 "
            />
          </div>

          <div className=" bg-[#24232C] mt-4 pl-4 pr-4 pb-4">
            <div className="flex justify-between items-center">
              <h3 className="text-[16px] font-bold md:text-[18px]">
                Character Length
              </h3>
              <span className="text-[24px] text-[#A4FFAF] font-bold md:text-[32px]">
                {length}
              </span>
            </div>

            <div>
              <input
                className="accent-[#A4FFAF] w-full cursor-pointer range-lg mt-2 mb-8"
                type="range"
                min="1"
                max="20"
                value={length}
                onChange={(e) => {
                  setLength(Number(e.target.value));
                }}
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <input
                  className="accent-[#A4FFAF] w-5 h-5 cursor-pointer"
                  type="checkbox"
                  checked={includeUppercase}
                  onChange={() => {
                    setIncludeUppercase(!includeUppercase);
                  }}
                />
                <span className="text-[16px] font-bold ml-5 md:text-[18px]">
                  Include Uppercase Letters
                </span>
              </div>

              <div className="flex items-center">
                <input
                  className="accent-[#A4FFAF] w-5 h-5 cursor-pointer"
                  type="checkbox"
                  checked={includeLowercase}
                  onChange={() => {
                    setIncludeLowercase(!includeLowercase);
                  }}
                />
                <span className="text-[16px] font-bold ml-5 md:text-[18px]">
                  Include Lowercase Letters
                </span>
              </div>

              <div className="flex items-center">
                <input
                  className="accent-[#A4FFAF] w-5 h-5 cursor-pointer"
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={() => {
                    setIncludeNumbers(!includeNumbers);
                  }}
                />
                <span className="text-[16px] font-bold  ml-5 md:text-[18px]">
                  Include Numbers
                </span>
              </div>

              <div className="flex items-center">
                <input
                  className="accent-[#A4FFAF] w-5 h-5 cursor-pointer"
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={() => {
                    setIncludeSymbols(!includeSymbols);
                  }}
                />
                <span className="text-[16px] font-bold  ml-5 md:text-[18px]">
                  Include Symbols
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between bg-[#18171F] p-4 mt-8 mb-4 flex-wrap">
              <h2 className="text-gray-400 text-[16px] font-bold md:text-[18px]">
                STRENGHT
              </h2>

              <div className="flex items-center gap-4">
                {password && (
                  <strong className="text-white md:text-[24px]">
                    {strength.text}
                  </strong>
                )}
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((bar) => (
                    <div
                      key={bar}
                      className={`w-2.5 h-7 border-2 border-white ${
                        // bar <= strength.bars ? strengthColor : ""
                        password && bar <= strength.bars ? strengthColor : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <button
                className="w-full bg-[#A4FFAF] flex gap-4  pt-4.5 pb-4.25 text-[#24232C] text-[16px] font-bold items-center justify-center cursor-pointer md:pt-5.25 md:pb-5.25 hover:bg-[#24232C] hover:border-[#A4FFAF] border hover:text-[#A4FFAF]"
                onClick={generatePassword}
              >
                GENERATE →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
