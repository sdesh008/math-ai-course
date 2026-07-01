# Laplace Transforms

| Function $f(t)$ | Laplace Transform $\mathcal{L}\{f(t)\}$ |
|---|---|
| $1$ | $\frac{1}{s}$ |
| $t$ | $\frac{1}{s^2}$ |
| $t^n$ | $\frac{n!}{s^{n+1}}$ |
| $e^{at}$ | $\frac{1}{s-a}$ |
| $\\sin(at)$ | $\frac{a}{s^2+a^2}$ |
| $\\cos(at)$ | $\frac{s}{s^2+a^2}$ |
| $\\sinh(at)$ | $\frac{a}{s^2-a^2}$ |
| $\\cosh(at)$ | $\frac{s}{s^2-a^2}$ |
| $u(t-a)$ | $\frac{e^{-as}}{s}$ |
| $e^{at}\\sin(bt)$ | $\frac{b}{(s-a)^2+b^2}$ |
| $e^{at}\\cos(bt)$ | $\frac{s-a}{(s-a)^2+b^2}$ |

## Notes
- The Laplace transform is defined as $\mathcal{L}\{f(t)\} = \int_0^\infty e^{-st}f(t)\,dt$.
- These formulas are commonly used for solving differential equations and analyzing systems.
