import React from "react";
import {
  AbsoluteFill,
  Audio,
  Sequence,
  staticFile,
  useCurrentFrame,
  interpolate,
} from "remotion";
import katex from "katex";
import "katex/dist/katex.min.css";

const slides = [
  {
    title: "Fundamental Theorem of Calculus",
    subtitle: "Differentiation and integration are inverse operations.",
    bullets: [
      "Connects area accumulation with derivatives.",
      "Allows definite integrals to be evaluated with antiderivatives.",
    ],
    equation: "\\int_a^b f(x) \\;dx = F(b) - F(a)",
  },
  {
    title: "Part 1: Derivative of an Integral",
    subtitle: "If $F(x) = \\int_a^x f(t) \\;dt$, then $F'(x) = f(x)$.",
    bullets: [
      "The derivative of the area function recovers the original integrand.",
      "Works when $f$ is continuous on $[a,b]$.",
    ],
    equation: "\\frac{d}{dx}\\left(\\int_a^x f(t) \\;dt\\right) = f(x)",
  },
  {
    title: "Part 2: Evaluating Definite Integrals",
    subtitle: "A definite integral equals the change in an antiderivative.",
    bullets: [
      "Pick any antiderivative $F$ of $f$.",
      "Then compute $F(b) - F(a)$.",
    ],
    equation: "\\int_a^b f(x) \\;dx = F(b) - F(a)",
  },
  {
    title: "Example: $\\int_1^3 x^2 \\;dx$",
    subtitle: "Use $F(x) = \\frac{x^3}{3}$ as the antiderivative.",
    bullets: [
      "$F(3) = \\frac{27}{3} = 9$",
      "$F(1) = \\frac{1}{3}$, so result is $\\frac{26}{3}$",
    ],
    equation: "\\int_1^3 x^2 \\;dx = \\frac{27}{3} - \\frac{1}{3} = \\frac{26}{3}",
  },
  {
    title: "Why It Matters",
    subtitle: "This theorem makes calculus practical.",
    bullets: [
      "Computes areas without Riemann sums.",
      "Shows integration and differentiation are inverse operators.",
    ],
    equation: "F'(x) = f(x)   and   \\int_a^b f(x) \\;dx = F(b) - F(a)",
  },
];

const sectionDuration = 300;

// Renders text containing inline `$...$` or display `$$...$$` math together with plain text.
const InlineKaTeX: React.FC<{ text: string }> = ({ text }) => {
  if (!text || typeof text !== "string") return <>{text}</>;

  // Split on $$...$$ or $...$ tokens, keep delimiters
  const parts = text.split(/(\$\$[\s\S]+?\$\$|\$[^$]+\$)/g).filter(Boolean);

  const html = parts
    .map((part) => {
      if (part.startsWith("$$") && part.endsWith("$$")) {
        const expr = part.slice(2, -2);
        try {
          return katex.renderToString(expr, { displayMode: true, throwOnError: false, output: "html" });
        } catch {
          return part;
        }
      }
      if (part.startsWith("$") && part.endsWith("$")) {
        const expr = part.slice(1, -1);
        try {
          return katex.renderToString(expr, { displayMode: false, throwOnError: false, output: "html" });
        } catch {
          return part;
        }
      }
      // Plain text: escape HTML
      return part.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>");
    })
    .join("");

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

const Slide: React.FC<{
  title: string;
  subtitle: string;
  bullets: string[];
  equation: string;
}> = ({ title, subtitle, bullets, equation }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15, 45, sectionDuration - 45, sectionDuration - 15], [0, 1, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(frame, [0, 30], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  let equationHtml = "";
  try {
    equationHtml = katex.renderToString(equation, {
      displayMode: true,
      throwOnError: false,
      output: "html",
    });
  } catch {
    equationHtml = equation;
  }

  return (
    <AbsoluteFill
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        color: "white",
      }}
    >
      <div style={{ padding: 80, width: "100%", height: "100%", boxSizing: "border-box", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: 980 }}>
          <div style={{ fontSize: 64, fontWeight: 900, marginBottom: 28, letterSpacing: "-0.02em", color: "#ffffff" }}>{title}</div>
          <div style={{ fontSize: 28, lineHeight: 1.6, opacity: 0.95, marginBottom: 40, color: "#e0e7ff" }}>
            <InlineKaTeX text={subtitle} />
          </div>
          <div style={{ display: "grid", gap: 20, marginBottom: 40 }}>
            {bullets.map((bullet) => (
              <div key={bullet} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 14, minWidth: 14, height: 14, borderRadius: 999, background: "#60a5fa", marginTop: 6 }} />
                <div style={{ fontSize: 24, lineHeight: 1.7, color: "#f5f5f5" }}>
                  <InlineKaTeX text={bullet} />
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              background: "rgba(96, 165, 250, 0.15)",
              border: "2px solid rgba(96, 165, 250, 0.4)",
              borderRadius: 28,
              padding: 40,
              lineHeight: 2.2,
              color: "#ffffff",
              fontSize: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 140,
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: equationHtml }} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const FundamentalTheoremLecture: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #0f172a 100%)" }}>
      <Audio src={staticFile("ftc-narration.mp3")} />
      {slides.map((slide, index) => (
        <Sequence
          key={slide.title}
          from={index * sectionDuration}
          durationInFrames={sectionDuration}
        >
          <Slide
            title={slide.title}
            subtitle={slide.subtitle}
            bullets={slide.bullets}
            equation={slide.equation}
          />
        </Sequence>
      ))}
      <div
        style={{
          position: "absolute",
          bottom: 34,
          left: 80,
          right: 80,
          height: 12,
          borderRadius: 999,
          background: "rgba(255,255,255,0.2)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${(100 / slides.length).toFixed(2)}%`,
            height: "100%",
            background: "rgba(96, 165, 250, 0.95)",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
