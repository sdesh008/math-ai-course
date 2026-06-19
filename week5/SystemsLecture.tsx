import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  interpolate,
} from "remotion";
import katex from "katex";
import "katex/dist/katex.min.css";

const slides = [
  {
    title: "Systems of Linear Equations",
    subtitle: "Solve $A\mathbf{x}=\mathbf{b}$ and classify solutions.",
    bullets: [
      "Write systems in matrix and augmented matrix form.",
      "Use elimination to find unique, no, or infinite solutions.",
    ],
  },
  {
    title: "Linear System Notation",
    subtitle: "Equations of the form $a_1x_1 + \dots + a_nx_n = b$.",
    bullets: [
      "System: $A\mathbf{x}=\mathbf{b}$ with $A\in\mathbb{R}^{m\times n}$.",
      "Augmented matrix: $[A\mid\mathbf{b}]$ simplifies elimination.",
    ],
  },
  {
    title: "Row Operations",
    subtitle: "Transform the augmented matrix without changing solutions.",
    bullets: [
      "Swap rows: $R_i \leftrightarrow R_j$.",
      "Scale rows and add multiples to eliminate variables.",
    ],
  },
  {
    title: "Gaussian Elimination",
    subtitle: "Reach row-echelon form, then back-substitute.",
    bullets: [
      "Identify pivot columns and free variables.",
      "If pivots stop early, parametrize the remaining variables.",
    ],
  },
  {
    title: "Worked Example 1 — 2×2",
    subtitle: "$x + 2y = 5$, $3x - y = 4$.",
    bullets: [
      "$R_2 \leftarrow R_2 - 3R_1$ gives $0x -7y = -11$.",
      "Solve $y = 11/7$, then $x = 13/7$.",
    ],
  },
  {
    title: "Worked Example 2 — 3×3",
    subtitle: "$x+y+z=2$, $2x+3y+z=5$, $x+2y+2z=4$.",
    bullets: [
      "Eliminate below the first pivot and reduce to $2z = 1$.",
      "Back-substitute: $z=1/2$, $y=3/2$, $x=0$.",
    ],
  },
  {
    title: "Solution Classification",
    subtitle: "Rank decides whether the system is solvable.",
    bullets: [
      "$\mathrm{rank}(A) < \mathrm{rank}([A\mid\mathbf{b}])$ ⇒ no solution.",
      "$\mathrm{rank}(A) = \mathrm{rank}([A\mid\mathbf{b}]) < n$ ⇒ infinite solutions.",
    ],
  },
  {
    title: "Geometric View",
    subtitle: "Equations are lines or planes in space.",
    bullets: [
      "In 2D, solutions are line intersections or parallels.",
      "In 3D, planes can meet in a point, line, plane, or not at all.",
    ],
  },
  {
    title: "In-Class Activity",
    subtitle: "Practice reduction and classification in pairs.",
    bullets: [
      "One unique system, one inconsistent system, one infinite system.",
      "Explain your classification with row-reduction reasoning.",
    ],
  },
  {
    title: "Key Takeaways",
    subtitle: "Row operations preserve solutions and rank reveals structure.",
    bullets: [
      "Gaussian elimination is the central solving method.",
      "Free variables give parametric families when solutions are infinite.",
    ],
  },
];

const sectionDuration = 240;

const renderMath = (text: string) => {
  try {
    return katex.renderToString(text, { displayMode: true, throwOnError: false, output: "html" });
  } catch (e) {
    return text;
  }
};

const Slide: React.FC<{ title: string; subtitle: string; bullets: string[] }> = ({ title, subtitle, bullets }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15, 45, sectionDuration - 45, sectionDuration - 15], [0, 1, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [0, 30], [40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ opacity, transform: `translateY(${y}px)`, backgroundColor: "#071833", color: "white" }}>
      <div style={{ padding: 80, display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box" }}>
        <div style={{ fontSize: 64, fontWeight: 800, marginBottom: 18 }}>{title}</div>
        <div style={{ fontSize: 28, marginBottom: 24, lineHeight: 1.6, color: "#cbd5e1" }} dangerouslySetInnerHTML={{ __html: renderMath(subtitle) }} />
        <div style={{ display: "grid", gap: 18, flex: 1 }}>
          {bullets.map((bullet) => (
            <div key={bullet} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ minWidth: 12, height: 12, borderRadius: 999, backgroundColor: "#38bdf8", marginTop: 8 }} />
              <div style={{ fontSize: 24, lineHeight: 1.65, color: "#e2e8f0" }} dangerouslySetInnerHTML={{ __html: renderMath(bullet) }} />
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const SystemsLecture: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)" }}>
      {slides.map((slide, index) => (
        <Sequence key={slide.title} from={index * sectionDuration} durationInFrames={sectionDuration}>
          <Slide title={slide.title} subtitle={slide.subtitle} bullets={slide.bullets} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
