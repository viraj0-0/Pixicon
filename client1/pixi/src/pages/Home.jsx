import React from "react";
import CardSwap, { Card } from "../components/CardSwap";
import { Settings, Feather, MousePointer } from "lucide-react";
import SplitText from "../components/SplitText";
import customizable from "../pictures/customizable.png";
import lightweight from "../pictures/lightweight.png";
import easyToUse from "../pictures/easyToUse.png";
import LogoLoop from "../components/LogoLoop";
import Squares from "../components/Squares";
import {
  SiReact,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
  SiOpenai,
  SiGooglegemini,
} from "react-icons/si";
import ScrollReveal from "../components/ScrollReveal";
import MagicBento from "../components/MagicBento";
import Carousel from "../components/Carousel";

export default function Home() {
  const ScrollStackCard = ({ title, description, icon }) => (
  <div className="bg-gradient-to-r from-purple-400 to-pink-600 text-white border border-neutral-700 rounded-3xl p-8 shadow-lg flex flex-col justify-between h-full">
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-black rounded-full  border-black">
          {icon}
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
      </div>
      <p className="text-lg text-neutral-400 mt-2">{description}</p>
    </div>
  </div>
);
  const handleHeadingComplete = () =>
    console.log("Heading animation finished!");
  const handleParagraphComplete = () =>
    console.log("Paragraph animation finished!");

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    { node: <SiOpenai />, title: "Open Ai", href: "https://chatgpt.com" },
    {
      node: <SiGooglegemini />,
      title: "Gemini",
      href: "https://gemini.google.com",
    },
  ];

  return (
    <>
    <div style={{ position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '-1' }}>
  <Squares 
speed={0.5} 
squareSize={40}
direction='diagonal' // up, down, left, right, diagonal
borderColor='#787878'
hoverFillColor='#222'
/>
</div>
    <div className=" text-white">
      {/* ========== HERO SECTION ========== */}
      <section
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 relative overflow-hidden "
        style={{ height: "100vh", width: "100vw" }}
      >
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center space-y-4">
          <SplitText
            text="Craft your vision"
            className="text-4xl md:text-6xl font-bold text-purple-400"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            onLetterAnimationComplete={handleHeadingComplete}
          />
          <SplitText
            text="effortlessly."
            className="text-4xl md:text-6xl font-bold text-purple-400"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            onLetterAnimationComplete={handleHeadingComplete}
          />
          <SplitText
            text="A powerful icon library designed for simplicity and creative freedom."
            className="text-lg md:text-xl text-neutral-300"
            delay={100}
            duration={0.5}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            onLetterAnimationComplete={handleParagraphComplete}
          />
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center w-full h-[500px] md:h-[600px] mt-10 md:mt-0">
          <CardSwap
            width={500}
            height={400}
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            {/* Card 1 */}
            <Card className="flex flex-col bg-neutral-900 border border-neutral-700 rounded-2xl overflow-hidden shadow-lg">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-b-white/20">
                <Settings className="w-5 h-5 text-white translate-y-[1px]" />
                <h3 className="text-lg font-medium text-white">Customizable</h3>
              </div>
              <img
                src={customizable}
                alt="Customizable"
                className="w-full h-full object-cover"
              />
            </Card>

            {/* Card 2 */}
            <Card className="flex flex-col bg-neutral-900 border border-neutral-700 rounded-2xl overflow-hidden shadow-lg">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-b-white/20">
                <Feather className="w-5 h-5 text-white translate-y-[1px]" />
                <h3 className="text-lg font-medium text-white">Lightweight</h3>
              </div>
              <img
                src={lightweight}
                alt="Lightweight"
                className="w-full h-full object-cover"
              />
            </Card>

            {/* Card 3 */}
            <Card className="flex flex-col bg-neutral-900 border border-neutral-700 rounded-2xl overflow-hidden shadow-lg">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-b-white/20">
                <MousePointer className="w-5 h-5 text-white translate-y-[1px]" />
                <h3 className="text-lg font-medium text-white">Easy to Use</h3>
              </div>
              <img
                src={easyToUse}
                alt="Easy to Use"
                className="w-full h-full object-cover"
              />
            </Card>
          </CardSwap>
        </div>
      </section>

      {/* ========== SCROLL REVEAL SECTION ========== */}
      <section className="h-screen w-screen flex items-center justify-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
          {/* Left: ScrollReveal text */}
          <div className="flex items-center justify-center text-center md:text-left">
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur={true}
              baseRotation={5}
              blurStrength={4}
              textClassName="text-white text-2xl md:text-3xl max-w-3xl leading-relaxed"
            >
              Discover millions of high-quality icons. Designed for simplicity
              and built for speed, our extensive library offers a vast
              collection of icons crafted with a modern and clean aesthetic.
              Find the perfect icon for any project and streamline your design
              process. Powered by an AI design assistant to bring your ideas to
              life. Leverage our intelligent assistant to generate unique icon
              concepts and artistic designs based on your specific needs. From
              initial concepts to polished final assets, our AI helps you
              translate your creative vision into reality effortlessly.
            </ScrollReveal>
          </div>

          {/* Right: Carousel */}
          <div className="flex items-center justify-center">
            <div style={{ height: "600px", position: "relative" }}>
              <Carousel
                baseWidth={500}
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* ========== MAGIC BENTO SECTION ========== */}
      <section
        className="min-h-screen flex items-center justify-center"
        style={{ height: "100vh", width: "100vw" }}
      >
        <div>
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={400}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>
      </section>



      {/* ========== LOGO LOOP SECTION ========== */}
      <section className="py-10  flex items-center justify-center">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#111"
          ariaLabel="Technology partners"
        />
      </section>
    </div>
    </>
  );
}
