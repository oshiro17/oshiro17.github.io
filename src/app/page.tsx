"use client";

import React, { useState, useEffect } from "react";
import {
  Code,
  Smartphone,
  Database,
  Brain,
  Award,
  Zap,
  Phone,
  Clock,
  Github,
  Instagram,
  Facebook,
  Mail,
  X,
  Youtube,
  UsersRound,
  PackageCheck,
} from "lucide-react";
import ContactCard from "@/components/ContactCard";
import Profile from "@/components/Profile";
const animationStyles = `
  @keyframes fall {
    0% {
      top: -50px;
      opacity: 1;
    }
    100% {
      top: 100vh;
      opacity: 0;
    }
  }

.star, .heart {
    position: fixed;
    width: 30px;
    height: 30px;
    background-size: cover;
    animation: fall 3s linear infinite;
  }

  .star {
    background-image: url('hart.png');
  }

  // .heart {
  //   background-image: url('heart.png');
  // }

  .star:nth-child(1), .heart:nth-child(1) { left: 10%; animation-delay: 0s; }
  .star:nth-child(2), .heart:nth-child(2) { left: 20%; animation-delay: 0.2s; }
  .star:nth-child(3), .heart:nth-child(3) { left: 30%; animation-delay: 0.4s; }
  .star:nth-child(4), .heart:nth-child(4) { left: 40%; animation-delay: 0.6s; }
  .star:nth-child(5), .heart:nth-child(5) { left: 50%; animation-delay: 0.8s; }
  .star:nth-child(6), .heart:nth-child(6) { left: 60%; animation-delay: 1s; }
  .star:nth-child(7), .heart:nth-child(7) { left: 70%; animation-delay: 1.2s; }
  .star:nth-child(8), .heart:nth-child(8) { left: 80%; animation-delay: 1.4s; }
  .star:nth-child(9), .heart:nth-child(9) { left: 90%; animation-delay: 1.6s; }
  .star:nth-child(10), .heart:nth-child(10) { left: 15%; animation-delay: 1.8s; }
  .star:nth-child(11), .heart:nth-child(11) { left: 25%; animation-delay: 2s; }
  .star:nth-child(12), .heart:nth-child(12) { left: 35%; animation-delay: 2.2s; }
  .star:nth-child(13), .heart:nth-child(13) { left: 45%; animation-delay: 2.4s; }
  .star:nth-child(14), .heart:nth-child(14) { left: 55%; animation-delay: 2.6s; }
  .star:nth-child(15), .heart:nth-child(15) { left: 65%; animation-delay: 2.8s; }
  .star:nth-child(16), .heart:nth-child(16) { left: 75%; animation-delay: 3s; }
  .star:nth-child(17), .heart:nth-child(17) { left: 85%; animation-delay: 3.2s; }
  .star:nth-child(18), .heart:nth-child(18) { left: 95%; animation-delay: 3.4s; }
  .star:nth-child(19), .heart:nth-child(19) { left: 5%; animation-delay: 3.6s; }
  .star:nth-child(20), .heart:nth-child(20) { left: 10%; animation-delay: 3.8s; }
`;


const FYBELandingPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [mbtiResult, setMbtiResult] = useState<string | null>(null);
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [showInput, setShowInput] = useState(true);
  const [showGreeting, setShowGreeting] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [sequences, setSequences] = useState<string[]>([]);
  const [animatedSequences, setAnimatedSequences] = useState<string[]>([]);
  const [compatibility, setCompatibility] = useState<string | null>(null);
  const [animatedCompatibility, setAnimatedCompatibility] = useState<string>("");
  const [showStars, setShowStars] = useState(false);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value + "おおしろののか");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const initialSequence = generateSequence(inputText);
    setDisplayText(inputText);
    setSequences([initialSequence]);
    setShowInput(false);
    setShowGreeting(true);
    generateNextSequences([initialSequence]);
  };

  const handleReset = () => {
    setInputText("");
    setDisplayText("");
    setShowInput(true);
    setShowGreeting(false);
    setFadeOut(false);
    setSequences([]);
    setAnimatedSequences([]);
    setCompatibility(null);
    setAnimatedCompatibility("");
  };

  const generateSequence = (text: string) => {
    const kanaToNumber: { [key: string]: number } = {
      あ: 1, い: 2, う: 3, え: 4, お: 5,
      か: 1, き: 2, く: 3, け: 4, こ: 5,
      さ: 1, し: 2, す: 3, せ: 4, そ: 5,
      た: 1, ち: 2, つ: 3, て: 4, と: 5,
      な: 1, に: 2, ぬ: 3, ね: 4, の: 5,
      は: 1, ひ: 2, ふ: 3, へ: 4, ほ: 5,
      ま: 1, み: 2, む: 3, め: 4, も: 5,
      や: 1, ゆ: 3, よ: 5,
      ら: 1, り: 2, る: 3, れ: 4, ろ: 5,
      わ: 1, を: 5, ん: 1,
      が: 1, ぎ: 2, ぐ: 3, げ: 4, ご: 5,
      ざ: 1, じ: 2, ず: 3, ぜ: 4, ぞ: 5,
      だ: 1, ぢ: 2, づ: 3, で: 4, ど: 5,
      ば: 1, び: 2, ぶ: 3, べ: 4, ぼ: 5,
      ぱ: 1, ぴ: 2, ぷ: 3, ぺ: 4, ぽ: 5
    };

    return text
      .split("")
      .map((char) => kanaToNumber[char] || "")
      .join("");
  };

  const calculateNextSequence = (sequence: string) => {
    let nextSequence = "";
    for (let i = 0; i < sequence.length - 1; i++) {
      const sum = parseInt(sequence[i]) + parseInt(sequence[i + 1]);
      nextSequence += (sum % 10).toString();
    }
    return nextSequence;
  };

  const generateNextSequences = (currentSequences: string[]) => {
    let currentSequence = currentSequences[currentSequences.length - 1];
    if (currentSequence.length > 1) {
      const nextSequence = calculateNextSequence(currentSequence);
      setSequences((prevSequences) => [...prevSequences, nextSequence]);
      if (nextSequence.length > 2) {
        generateNextSequences([...currentSequences, nextSequence]); 
      } else {
          setCompatibility(`相性は${nextSequence.padStart(2, '0')}パーセント`);
        setTimeout(() => {
          setCompatibility(`相性なんて関係ないよ∩(´∀｀❤)∩ﾜｧｲ♪`);
        },7000); 
        
          
      }
    }
  };


    useEffect(() => {
      if (sequences.length > 0) {
        let currentSequences: string[] = [];
        sequences.forEach((sequence, index) => {
          setTimeout(() => {
            let currentSequence = "";
            sequence.split("").forEach((char, charIndex) => {
              setTimeout(() => {
                currentSequence += char;
                currentSequences[index] = currentSequence;
                setAnimatedSequences([...currentSequences]);
    
              
                if (index === sequences.length - 1 && charIndex === sequence.length - 1) {
                  setTimeout(() => {
                    if (compatibility) {
                      animateCompatibility(compatibility);
                    }
                  }, 500);
                }
              }, );
            });
          }, 0);
        });
      }
    }, [sequences, compatibility]);
    

    const animateCompatibility = (text: string) => {
      let currentText = "";
      text.split("").forEach((char, charIndex) => {
        setTimeout(() => {
          currentText += char;
          setAnimatedCompatibility(currentText);
        }, charIndex * 100);
      });
    };
    
  const handleMbtiClick = (type: string) => {
    if (type === 'ISTJ') {
      setMbtiResult('最悪です');
    } else if (['ISTP', 'ESFP', 'ENFP'].includes(type)) {
      setMbtiResult('最高です！');
      setShowStars(true); //
      setTimeout(() => setShowStars(false), 30000);
    } else {
      setMbtiResult('普通です');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isInViewport =
          rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
        setIsVisible((prev) => ({ ...prev, [section.id]: isInViewport }));
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div>
    <style>{animationStyles}</style>
    <div>
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="star"></div>
      ))}
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="heart"></div>
      ))}
    </div>
    <div className="bg-white text-black min-h-screen">
      <header className="relative bg-gradient-to-r from-[#ffb8b3] to-[#147dba] text-white min-h-[500px] md:h-[500px] flex items-center overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center h-full">
          <div className="flex flex-col justify-center h-full md:w-1/2 w-full text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold mb-8 md:mb-4 whitespace-nowrap md:whitespace-normal mt-8 md:mt-0">
              どうもこんにちは
            </h1>

            <p className="text-2xl md:text-3xl mb-8 max-w-3xl">
              大城ののかです。
            </p>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl">
              web開発、アプリケーション開発承ります
            </p>
            <a href="#contact">
              <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 active:bg-[#FFE8b3] transition duration-300">
                お問い合わせ
              </button>
            </a>
          </div>

          <div className="flex-shrink-0 mt-8 md:mt-0 md:w-1/2 w-full flex justify-end">
            <img
              src="/nonoka.png"
              alt="Header image"
              className="w-full h-full object-contain object-bottom md:max-h-[500px]"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* @ts-ignore */}
        <section id="brand-message" className={`mb-20 transition-opacity duration-1000 ${isVisible["brand-message"] ? "opacity-100" : "opacity-20" }`}>
          <div className="flex justify-center items-center mb-8">
            <div className="ml-4 animate-wobble">
              <img src="/danbel.png" alt="Danbel image" className="w-40 h-40 object-contain" />
            </div>
            <h2 className="text-3xl font-bold text-center">自己紹介</h2>
          </div>
          <Profile/>
        </section>

        <style jsx>{`
          @keyframes wobble {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(-50deg); }
            50% { transform: rotate(0deg); }
            75% { transform: rotate(50deg); }
            100% { transform: rotate(0deg); }
          }
          .animate-wobble {
            animation: wobble 2s infinite;
            transform-origin: top center;
            }
            `}</style>

            {/* @ts-ignore */}
        <section id="mission-vision" className={`mb-20 transition-opacity duration-1000 ${isVisible["mission-vision"] ? "opacity-100" : "opacity-20" }`}>
          <h2 className="text-3xl font-bold mb-8 text-center">
            制作物
          </h2>
          <div className="flex flex-col items-center gap-8">
            <div className="bg-[#FFE4E1] p-8 rounded-lg max-w-2xl mx-auto text-center">
              <div className="flex justify-between items-center mb-4">
                <div className="text-left">
                  <h3 className="text-2xl font-semibold mb-2">計算キング</h3>
                  <p>
                    ただの計算アプリ
                  </p>
                </div>
                <img src="icon.png" alt="アプリのアイコン" className="w-16 h-16 ml-4" />
              </div>
              <video controls className="mt-4 rounded-lg w-full h-auto mx-auto">
                <source src="/IMG_7557.mp4" type="video/mp4" />
                お使いのブラウザは動画タグに対応していません。
              </video>
            </div>

            <div className="bg-[#FFE4E1] p-8 rounded-lg max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-4">アヴァロン</h3>
              <p>
                アヴァロンは、策略と推理を駆使して勝利を目指す騙し合いのゲームです。人狼のように便利なアプリがなかったので、泣く泣く自分で作りました。
              </p>
              <br />
              <img src="ava2.png" alt="アプリのアイコン"  />
              <a
                href="https://oshiro17.github.io/avalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black mt-4 text-white px-4 py-2 rounded-full text-lg font-semibold hover:bg-[#FFE8b3] transition duration-300 inline-block"
              >
                アヴァロンで遊ぶ
              </a>
            </div>
          </div>
        </section>

        {/* @ts-ignore */}
        <section id="contact" className={`mb-20 transition-opacity duration-1000 ${isVisible.contact ? "opacity-100" : "opacity-20"}`}>
          <h2 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ContactCard 
              icon={<Mail size={48} />}
              title="メールでのお問い合わせ"
              description="ご質問やご相談を詳しくお聞かせください"
              action="メールを送る"
              link="nonokapiano@icloud.com"
              />
            <ContactCard 
              icon={<Phone size={48} />}
              title="電話でのお問い合わせ"
              description="気軽にお問い合わせください。"
              action="電話をかける"
              link="tel:08098527749"
              />
          </div>
        </section>

  {/* @ts-ignore */}
        <section id="mbti" className={`mb-20 transition-opacity duration-1000 ${isVisible.mbti ? "opacity-100" : "opacity-20"}`}>
  <h2 className="text-3xl font-bold mb-8 text-center">あなたとののかの科学的な相性診断</h2>
            <div className="bg-[#FFE4E1] p-8 rounded-lg max-w-2xl mx-auto text-center">
              <p className="text-2xl mb-8 text-center">
                あなたのmbtiを選択してくだいませ。
              </p>
  {!mbtiResult && (
    <div className="flex flex-wrap justify-center gap-4">
     {['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP', 'ESTP', 'ESFP', 'ENFP', 'ENTP', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'].map((type) => (

        <button
          key={type}
          className="bg-white text-black px-4 py-2 rounded-full text-lg font-semibold hover:bg-gray-200 active:bg-[#FFE8b3] transition duration-300"
          onClick={() => handleMbtiClick(type)}
        >
          {type}
        </button>
      ))}
    </div>
  )}
  {mbtiResult && (
    <div className="mt-8 bg-[#FFE4E1] p-8 rounded-lg max-w-2xl mx-auto text-center">
      <h3 className="text-2xl font-semibold mb-4">診断結果</h3>
      <p className="text-xl">{`あなたとののかは${mbtiResult}`}</p>
      <button
        className="bg-white text-black px-4 py-2 rounded-full text-lg font-semibold hover:bg-gray-200 active:bg-[#FFE8b3] transition duration-300 mt-4"
        onClick={() => setMbtiResult(null)}
      >
        もう一度診断する
      </button>
    </div>
  )}
  </div>
</section>
  {/* @ts-ignore */}
  <section id="dynamic-display" className={`mb-20 transition-opacity duration-1000 ${isVisible["dynamic-display"] ? "opacity-100" : "opacity-20"}`}>
          <h2 className="text-3xl font-bold mb-8 text-center">もっと科学的な相性占い</h2>
          <div className="bg-[#FFE4E1] p-8 rounded-lg max-w-2xl mx-auto text-center">
            {showInput ? (
              <form onSubmit={handleSubmit} className="mb-4">
                <input
                  type="text"
                  value={inputText.replace("おおしろののか","")}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded mb-4"
                  placeholder="名前をひらがなで入力してください"
                />
                <button  type="submit" className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 active:bg-[#FFE8b3] transition duration-300">
                  OK
                </button>
              </form>
            ) : (
              <div className="mb-4">
                <p className={`text-xl font-bold transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
                  {displayText}
                </p>
                {showGreeting && (
                  <div>
                    {animatedSequences.map((seq, index) => (
                      <p key={index} className="text-xl font-bold">{seq}</p>
                    ))}
                    {animatedCompatibility && (
                      <div className="mt-8 mb-8 text-4xl font-bold">
                        {animatedCompatibility}
                      </div>
                    )}
                  </div>
                )}
                <button onClick={handleReset} className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 active:bg-[#FFE8b3] transition duration-300">
                  もう一度
                </button>
              </div>
            )}
          </div>
        </section>

      </main>

      <footer className="bg-black text-white py-8 text-center">
        <p>&copy; 2024 nonoka. All rights reserved.</p>
      </footer>
    </div>
  </div>
  );
};

export default FYBELandingPage;
