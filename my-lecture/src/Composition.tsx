import {
  AbsoluteFill,
  Audio,
  Sequence,
  staticFile,
  useCurrentFrame,
  interpolate,
} from "remotion";
import React from "react";

const sections = [
  {
    title: "Fundamental Theorem of Calculus",
    subtitle: "Differentiation and integration are inverse operations.",
    bullets: [
      "Connects area accumulation with derivatives.",
      "Translates a definite integral into antiderivatives.",
    ],
    equation: "∫_a^b f(x) dx = F(b) - F(a)",
  },
  {
    title: "Part 1: Derivative of an Integral",
    subtitle: "If F(x) = ∫_a^x f(t) dt, then F'(x) = f(x).",
    bullets: [
      "The area function is differentiable when f is continuous.",
      "The derivative returns the original integrand.",
    ],
    equation: String.raw`\frac{d}{dx}\left(\int_a^x f(t)\,dt\right) = f(x)`,
  },
  {
    title: "Part 2: Evaluating Definite Integrals",
    subtitle: "A definite integral equals the change in an antiderivative.",
    bullets: [
      "Choose any antiderivative F of f.",
      "Compute F(b) - F(a) to evaluate the integral.",
    ],
    equation: String.raw`\int_a^b f(x)\,dx = F(b) - F(a)`,
  },
  {
    title: "Simple Example",
    subtitle: "Integrate f(x)=x^2 from 1 to 3.",
    bullets: [
      "Antiderivative: F(x)=x^3/3.",
      "Value: F(3) - F(1) = 26/3.",
    ],
    equation: String.raw`\int_1^3 x^2\,dx = \frac{3^3}{3} - \frac{1^3}{3} = \frac{26}{3}`,
  },
  {
    title: "Why It Matters",
    subtitle: "This theorem makes calculus practical.",
    bullets: [
      "It computes area with antiderivatives.",
      "It reveals the deep inverse relationship of calculus.",
    ],
    equation: String.raw`F'(x)=f(x) \quad\text{and}\quad \int_a^b f(x)dx = F(b)-F(a)`,
  },
];

const sectionDuration = 300;

const Slide: React.FC<{
  title: string;
  subtitle: string;
  bullets: string[];
  equation: string;
}> = ({ title, subtitle, bullets, equation }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [0, 15, 45, sectionDuration - 45, sectionDuration - 15],
    [0, 1, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const y = interpolate(frame, [0, 30], [50, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity, transform: `translateY(${y}px)` }}>
      <div style={{ padding: 80, width: "100%", height: "100%", boxSizing: "border-box" }}>
        <div style={{ maxWidth: 900 }}>
          <div style={{ fontSize: 56, fontWeight: 700, marginBottom: 24, letterSpacing: "-0.04em" }}>{title}</div>
          <div style={{ fontSize: 26, lineHeight: 1.4, opacity: 0.9, marginBottom: 32 }}>{subtitle}</div>
          <div style={{ display: "grid", gap: 16, marginBottom: 36 }}>
            {bullets.map((bullet) => (
              <div key={bullet} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 10, height: 10, borderRadius: 5, background: "#84d4ff", marginTop: 10 }} />
                <div style={{ fontSize: 22, lineHeight: 1.6 }}>{bullet}</div>
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 34,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 24,
              padding: 28,
              lineHeight: 1.5,
              whiteSpace: "pre-wrap",
            }}
          >
            {equation}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const MyComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at top left, #1a73e8, #0f172a 45%), linear-gradient(180deg, rgba(8,17,40,1), rgba(12,21,53,1))",
        color: "white",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <Audio src={staticFile("narration.mp3")} />
      {sections.map((section, index) => (
        <Sequence key={section.title} from={index * sectionDuration} durationInFrames={sectionDuration}>
          <Slide
            title={section.title}
            subtitle={section.subtitle}
            bullets={section.bullets}
            equation={section.equation}
          />
        </Sequence>
      ))}
      <div
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          bottom: 40,
          height: 10,
          borderRadius: 999,
          background: "rgba(255,255,255,0.08)",
        }}
      >
        {sections.map((section, index) => (
          <div
            key={section.title}
            style={{
              position: "absolute",
              left: `${(index / sections.length) * 100}%`,
              width: `${100 / sections.length}%`,
              height: "100%",
              background: "rgba(132, 212, 255, 0.85)",
              transform: `translateX(${index === 0 ? 0 : 0}px)`,
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
