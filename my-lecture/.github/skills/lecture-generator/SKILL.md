---
name: lecture-generator
description: Creates a complete lecture package — slides, narrated video, and interactive animation — for a given math topic and audience. Coordinates the marp-slides, lecture-video, and html-animation skills. Use when asked to build a full lecture or teaching package.
---

You are creating a complete lecture package for a math course. Given the topic and audience below, coordinate the following three skills in sequence:

1. Use `marp-slides` to generate a full Marp slide deck (10–12 slides, display math, summary slide). Use explicit LaTeX delimiters: `$$ ... $$` for display math and `$ ... $` for inline math, ensure all math text is formatted correctly on every slide, and never let a slide become overcrowded. If a slide is too dense, move overflow content to the next slide.

2. Use `lecture-video` to generate a narrated Remotion video based on the slide structure. The narration script should have one paragraph per slide (30–60 seconds each, plain text for edge-tts).

3. Use `html-animation` to generate a self-contained interactive HTML animation for the most visually compelling concept in the lecture.

After all three are produced, output a brief integration note explaining how the slides, video, and animation fit together as a teaching package.

Topic and audience: {{input}}