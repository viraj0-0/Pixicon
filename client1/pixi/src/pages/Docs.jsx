// client/src/pages/Docs.jsx
import { useState } from "react";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "installation", title: "Installation" },
  { id: "what-is-pixicon", title: "what is pixicon" },
  { id: "FILL-axis", title: "FILL-axis" },
  { id: "wght-axis", title: "wght-axis" },
  { id: "GRAD-axis", title: "GRAD-axis" },
  { id: "opsz-axis", title: "opsz-axis" },
  { id: "how-to-use-pixicon", title: "how-to-use-pixicon" },
  { id: "Optimize", title: "Optimize" }
];

export default function Docs() {
  const links = `<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp" rel="stylesheet" />
`;
  const [active, setActive] = useState("introduction");

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-200 pt-[112px]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 px-4 py-6 sticky top-[112px] h-[calc(100vh-112px)] overflow-y-auto">
        <h2 className="text-lg font-semibold text-purple-300 mb-4">Docs</h2>
        <ul className="space-y-2">
          {sections.map((sec) => (
            <li key={sec.id}>
              <button
                onClick={() => {
                  document
                    .getElementById(sec.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setActive(sec.id);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg transition ${
                  active === sec.id
                    ? "bg-purple-600/30 text-purple-200"
                    : "hover:bg-white/5"
                }`}
              >
                {sec.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-8 py-6 space-y-16">
        <section id="introduction">
          <h1 className="text-3xl font-bold text-purple-300 mb-4">
            Picicon guide
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Welcome to the documentation! This guide will help you understand
            the project, its features, and how to use it effectively.
          </p>
        </section>

        <section id="installation">
          <h2 className="text-2xl font-semibold text-purple-200 mb-4">
            Installation
          </h2>
          <pre className="bg-black/40 border border-white/10 rounded-lg p-4 text-sm">
            <code>{links}</code>
          </pre>
        </section>

        <section id="what-is-pixicon">
          <h2 className="text-2xl font-semibold text-purple-200 mb-4">
            What are Pixicon Icons?
          </h2>
          <p className="text-gray-300 mb-2">
            Pixicon our newest icons, consolidating over 2,500
            glyphs in a single font file with a wide range of design variants.
            Symbols are available in three styles and four adjustable variable
            font axes (fill, weight, grade, and optical size). See the full set
            of Pixicon in the:
          </p>
          <pre className="bg-black/40 border border-white/10 rounded-lg p-4 text-sm">
            <code>yaha pe apni website/browse ka link</code>
          </pre>
        </section>

        <section id="FILL-axis">
          <h2 className="text-2xl font-semibold text-purple-200 mb-4">
            FILL axis
          </h2>
          <video
            src="https://www.gstatic.com/images/icons/material/apps/fonts/1x/material-symbols/fill.mp4"
            type="video/mp4"
            playsInline
            autoPlay
            loop
            muted
            className=" h-auto rounded-xl shadow-lg"
          />
          <p className="text-gray-300 pt-5">
            Fill gives you the ability to modify the default icon style. A
            single icon can render both unfilled and filled states. To convey a
            state transition, use the fill axis for animation or interaction.
            The values are 0 for default or 1 for completely filled. Along with
            the weight axis, the fill also impacts the look of the icon.
          </p>
        </section>

        <section id="wght-axis">
          <h2 className="text-2xl font-semibold text-purple-200 mb-4">
            wght axis
          </h2>
          <video
            src="https://www.gstatic.com/images/icons/material/apps/fonts/1x/material-symbols/weight.mp4"
            type="video/mp4"
            playsInline
            autoPlay
            loop
            muted
            className=" h-auto rounded-xl shadow-lg"
          ></video>
          <p className="text-gray-300 pt-5">
            Weight defines the symbol’s stroke weight, with a range of weights
            between thin (100) and bold (700). Weight can also affect the
            overall size of the symbol.
          </p>
        </section>

        <section id="GRAD-axis">
          <h2 className="text-2xl font-semibold text-purple-200 mb-4">
            GRAD axis
          </h2>
          <img
            src="https://www.gstatic.com/images/icons/material/apps/fonts/1x/material-symbols/grade.png"
            alt="Grade axis
visualization"
            className=" h-auto rounded-xl shadow-lg"
          ></img>
          <p className="text-gray-300 pt-5">
            Weight and grade affect a symbol’s thickness. Adjustments to grade
            are more granular than adjustments to weight and have a small impact
            on the size of the symbol.
            <br />
            <br /> Grade is also available in some text fonts. You can match
            grade levels between text and symbols for a harmonious visual
            effect. For example, if the text font has a -25 grade value, the
            symbols can match it with a suitable value, say -25.
            <br />
            <br /> You can use grade for different needs:
            <br />
            <br /> Low emphasis (e.g. -25 grade): To reduce glare for a light
            symbol on a dark background, use a low grade.
            <br />
            <br /> High emphasis (e.g. 200 grade): To highlight a symbol,
            increase the positive grade.
          </p>
        </section>
        <section id="opsz-axis">
          <h2 className="text-2xl font-semibold text-purple-200 mb-4">
            opsz axis
          </h2>
          <video
            src="https://www.gstatic.com/images/icons/material/apps/fonts/1x/material-symbols/opsz.mp4"
            type="video/mp4"
            playsInline
            autoPlay
            loop
            muted
            className=" h-auto rounded-xl shadow-lg"
          ></video>
          <p className="text-gray-300 pt-5">
            Optical sizes range from 20dp to 48dp.
            <br />
            For the image to look the same at different sizes, the stroke weight
            (thickness) changes as the icon size scales. Optical size offers a
            way to automatically adjust the stroke weight when you increase or
            decrease the symbol size.
          </p>
        </section>
        <section id="how-to-use-pixicon">
          <h1 className="text-3xl font-bold text-purple-300 mb-4">
            How to Use pixicon icon ?
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Use in Web The Material Symbols font is the easiest way to
            incorporate Pixicon into web projects. <br />
            <br />
            The icons are packaged into a single font so that web developers can
            easily incorporate these icons with only a few lines of code.
            <br />
            <br />
            Static font with Google Fonts The easiest way to set up icon fonts
            for use in any web page is through Google Fonts. Include this single
            line of HTML:
            <br />
          </p>
          <pre className="bg-black/40 border border-white/10 rounded-lg p-4 text-sm">
            <code>{links}</code>
          </pre>
          <p className="text-gray-300 leading-relaxed pt-8 pb-8">
            The above snippet includes the default configuration for each axis ,
            with weight at 400, optical size at 48, grade at 0 and fill (also
            0.)
          </p>
          <iframe
            height="300"
            style={{ width: "100%" }}
            scrolling="no"
            src="https://codepen.io/tomasdev/embed/VwyMzjo/69248e71cb99462e8a6c54cdca20fbab?default-tab=html%2Cresult"
            frameBorder="no"
            loading="lazy"
            allowTransparency={true}
            allowFullScreen={true}
            title="Material Symbols: weight 100"
          >
            See the Pen{" "}
            <a href="https://codepen.io/tomasdev/pen/VwyMzjo/69248e71cb99462e8a6c54cdca20fbab">
              Material Symbols: weight 100
            </a>{" "}
            on <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <iframe
            height="300"
            style={{ width: "100%" }}
            scrolling="no"
            src="https://codepen.io/tomasdev/embed/vYpeJyY/04e889d396a80a7261b06a949968c16b?default-tab=html%2Cresult"
            frameBorder="no"
            loading="lazy"
            allowTransparency={true}
            allowFullScreen={true}
            title="Material Symbols: static axes (advanced)"
            className="pt-8"
          >
            See the Pen{" "}
            <a href="https://codepen.io/tomasdev/pen/vYpeJyY/04e889d396a80a7261b06a949968c16b">
              Material Symbols: static axes (advanced)
            </a>{" "}
            on <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <p className="text-gray-300 leading-relaxed pt-12 pb-8">
            If you're animating icons via CSS, or want finer control over icon
            features, use the Google Symbols variable font. Using ranges, in the
            format number..number, we can load the entire variable font.
          </p>
          <iframe
            height="300"
            style={{ width: "100%" }}
            scrolling="no"
            src="https://codepen.io/tomasdev/embed/VwyMzbZ/daacd5f6bfaecba5aa4209afc1a8a4e3?default-tab=html%2Cresult"
            frameBorder="no"
            loading="lazy"
            allowTransparency={true}
            allowFullScreen={true}
            title="Material Symbols: variable axes"
          >
            See the Pen{" "}
            <a href="https://codepen.io/tomasdev/pen/VwyMzbZ/daacd5f6bfaecba5aa4209afc1a8a4e3">
              Material Symbols: variable axes
            </a>{" "}
            on <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <p className="text-gray-300 leading-relaxed pt-12 pb-8">
            Or even animate them!
          </p>
          <iframe
            height="300"
            style={{ width: "100%" }}
            scrolling="no"
            src="https://codepen.io/tomasdev/embed/LYezjLK/6b8ad22c9640ff946faa06d8d662215e?default-tab=css%2Cresult"
            frameBorder="no"
            loading="lazy"
            allowTransparency={true}
            allowFullScreen={true}
            title="Material Symbols: variable axes animated"
          >
            See the Pen{" "}
            <a href="https://codepen.io/tomasdev/pen/LYezjLK/6b8ad22c9640ff946faa06d8d662215e">
              Material Symbols: variable axes animated
            </a>{" "}
            on <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <p className="text-gray-300 leading-relaxed pt-12 pb-8">
            Styling icons
          </p>
          <iframe
            height="300"
            style={{ width: "100%" }}
            scrolling="no"
            src="https://codepen.io/tomasdev/embed/OJzxjEp/28031741b7679f1d343837f260be44c9?default-tab=css%2Cresult"
            frameBorder="no"
            loading="lazy"
            allowTransparency={true}
            allowFullScreen={true}
            title="Material Symbols: design recommendations"
          >
            See the Pen{" "}
            <a href="https://codepen.io/tomasdev/pen/OJzxjEp/28031741b7679f1d343837f260be44c9">
              Material Symbols: design recommendations
            </a>{" "}
            on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </section>
        <section id="Optimize">
          <h2 className="text-2xl font-semibold text-purple-200 mb-4">
            Optimize the icon font
          </h2>
          <p className="text-gray-300 leading-relaxed pt-12 pb-3">
            1. Subset the font to only include the relevant icons for your
            application using the &icon_names query parameter, using an
            alphabetically sorted comma-separated list of icon names
            (ligatures.) <br />
            <br />
            <i class="material-icons">thumb_down</i> Not recommended — Using the
            default settings loads all 3,800+ icons. Font payload: 295 KB
          </p>
          <pre className="bg-black/40 border pb-8 border-white/10 rounded-lg p-4 text-sm">
            <code>{`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined`}</code>
          </pre>
          <p className="text-gray-300 leading-relaxed pt-8 pb-3">
            <i class="material-icons">thumb_up_alt</i>Recommended — Specifying
            icon names to loads only the necessary icons. Font payload: 1.7 KB
          </p>
          <pre className="bg-black/40 border pb-8 border-white/10 rounded-lg p-4 text-sm">
            <code>{`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined
https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD,ROND@20..48,100..700,0..1,-50..200,0..100`}</code>
          </pre>
          <p className="text-gray-300 leading-relaxed pt-12 pb-3">
            2. Instance the variable font axes to only include the ones your
            application will use. Most applications only need a few variations
            of the axes. <br />
            <br />
            <i class="material-icons">thumb_down</i> Not recommended — Missing
            the axes configuration loads the default static font (weight 400,
            optical size 24, round 50, grade 0, fill 0). Including all variable
            font axes in full is usually unnecessary and increases the payload.
            Font payload: 7.9 MB
          </p>
          <pre className="bg-black/40 border pb-8 border-white/10 rounded-lg p-4 text-sm">
            <code>{`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined
https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD,ROND@20..48,100..700,0..1,-50..200,0..100`}</code>
          </pre>
          <p className="text-gray-300 leading-relaxed pt-8 pb-3">
            <i class="material-icons">thumb_up_alt</i>Recommended — A specific
            combination of axes is used. Just as an example, the full 'FILL'
            axis provides CSS transitions between states, and 'ROND' 100 is the
            chosen design. Font payload: 2.6 KB
          </p>
          <pre className="bg-black/40 border pb-8 border-white/10 rounded-lg p-4 text-sm">
            <code>{`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:FILL,ROND@0..1,100&icon_names=home,palette,settings&display=block`}</code>
          </pre>
        </section>
      </main>
    </div>
  );
}
