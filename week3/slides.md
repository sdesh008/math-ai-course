---
marp: true
theme: default
paginate: true
math: mathjax
---

# Limit Definition of the Derivative

**MATH 101 — Week 1**

---

## Derivative as a Limit

The derivative of a function at a point gives its instantaneous rate of change.

For a function $f(x)$, the derivative at $x=a$ is defined by:

$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$$

This is the limit of the secant slope as the second point approaches the first.

---

## Secant Line vs. Tangent Line

A secant line passes through two points on the graph: $(a, f(a))$ and $(a+h, f(a+h))$.

Its slope is:

$$m_{\text{secant}} = \frac{f(a+h) - f(a)}{h}$$

As $h \to 0$, the secant line approaches the tangent line at $(a, f(a))$.

The derivative is the slope of that tangent line.

---

## Secant Line vs. Tangent Line Visualized

<img src="secant_tangent_plot.png" width="70%" />

---

## Equivalent Form

The same definition can be written using $x \to a$:

$$f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}$$

This is useful when you prefer to work with the point $x$ itself.

---

## Why the Limit Must Exist

For $f'(a)$ to exist:

- the limit must exist as $h \to 0$
- the left- and right-sided limits must agree
- the difference quotient must not blow up or oscillate

If the limit fails, $f$ is not differentiable at $a$.

---

## Worked Example: More Complicated Function

Let

$$f(x) = \left(2x^2 - 3x + 1\right)^2$$

Find $f'(1)$ using the limit definition.

---

## Evaluate the Difference Quotient

Start with the definition:

$$f'(1) = \lim_{h \to 0} \frac{f(1+h) - f(1)}{h}$$

Compute each value:

$$f(1) = \left(2(1)^2 - 3(1) + 1\right)^2 = 0^2 = 0$$

$$f(1+h) = \left(2(1+h)^2 - 3(1+h) + 1\right)^2$$

---

## Expand the Numerator

Inside the square:

$$2(1+h)^2 - 3(1+h) + 1 = 2(1 + 2h + h^2) - 3 - 3h + 1$$
$$= 2 + 4h + 2h^2 - 3 - 3h + 1 = h + 2h^2$$

So:

$$f(1+h) = \left(h + 2h^2\right)^2 = h^2 + 4h^3 + 4h^4$$

---

## Finish the Limit Calculation

Now the difference quotient is:

$$\frac{f(1+h) - f(1)}{h} = \frac{h^2 + 4h^3 + 4h^4}{h}$$

Simplify:

$$= h + 4h^2 + 4h^3$$

Take the limit as $h \to 0$:

$$f'(1) = 0$$

---

## Re-check the Algebra

Inside the square:

$$2(1+h)^2 - 3(1+h) + 1 = h + 2h^2$$

Square it:

$$\left(h + 2h^2\right)^2 = h^2 + 4h^3 + 4h^4$$

Divide by $h$:

$$\frac{h^2 + 4h^3 + 4h^4}{h} = h + 4h^2 + 4h^3$$

Taking the limit gives:

$$\lim_{h \to 0} (h + 4h^2 + 4h^3) = 0$$

This confirms the limit calculation.

---

## Better Example: Rationalized Derivative at a Point

Use a derivative example that avoids the earlier bad algebra.

Let

$$f(x) = \frac{x^2 - 1}{x - 1}$$

and find $f'(1)$ using the limit definition.

---

## Simplify First Using Limits

For $x \ne 1$:

$$f(x) = \frac{x^2 - 1}{x - 1} = x + 1$$

So we expect $f'(1) = 1$.

Using the limit definition:

$$f'(1) = \lim_{h \to 0} \frac{f(1+h) - f(1)}{h}$$

---

## Compute the Difference Quotient

For $h \ne 0$:

$$f(1+h) = \frac{(1+h)^2 - 1}{h} = \frac{1 + 2h + h^2 - 1}{h} = 2 + h$$

And $f(1) = 2$.

So:

$$\frac{f(1+h) - f(1)}{h} = \frac{(2+h) - 2}{h} = 1$$

---

## Final Result for the Rational Example

Since the quotient is constant for $h \ne 0$:

$$f'(1) = \lim_{h \to 0} 1 = 1$$

This is a clean example of using the limit definition after simplifying the function.

---

## Example: Limit Does Not Exist

Consider the absolute value function at $x=0$:

$$f(x) = |x|$$

The difference quotient is:

$$\frac{f(h) - f(0)}{h} = \frac{|h|}{h}$$

---

## One-Sided Limits

Compute the two sides:

- $\displaystyle \lim_{h \to 0^+} \frac{|h|}{h} = 1$
- $\displaystyle \lim_{h \to 0^-} \frac{|h|}{h} = -1$

The left and right limits differ, so the overall limit does not exist.

Therefore $f'(0)$ does not exist.

---

## Why This Happens

At $x=0$, $f(x)=|x|$ is continuous but not smooth.

The graph has a sharp corner, so the tangent slope from the left is different from the tangent slope from the right.

---

## Summary

- The limit definition of the derivative uses
  $\displaystyle f'(a)=\lim_{h \to 0} \frac{f(a+h)-f(a)}{h}$.
- This definition connects secant slopes to the tangent slope.
- A correct evaluation requires algebraic simplification and careful limit-taking.
- Some functions, like $|x|$ at 0, are continuous but not differentiable.

> The limit definition is the foundation for understanding why derivative rules work.
