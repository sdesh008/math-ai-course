# %%
import numpy as np
import matplotlib.pyplot as plt

# %%
# Solve the ODE y'' - 3y' + 2y = 0 with y(0) = 2 and y'(0) = -1.
# The exact solution is y(t) = 5e^t - 3e^{2t}.


def exact_solution(t):
    return 5 * np.exp(t) - 3 * np.exp(2 * t)


t = np.linspace(0, 2, 400)
y_exact = exact_solution(t)

plt.figure(figsize=(7, 4))
plt.plot(t, y_exact, label='Exact solution', linewidth=2)
plt.title('Exact Solution of the ODE')
plt.xlabel('t')
plt.ylabel('y(t)')
plt.grid(True, alpha=0.3)
plt.legend()
plt.show()

# %%
# Numerical approximation using Euler's method.


def euler_method(y0, v0, t_span, n_steps):
    t = np.linspace(t_span[0], t_span[1], n_steps + 1)
    h = t[1] - t[0]
    y = np.zeros(n_steps + 1)
    v = np.zeros(n_steps + 1)
    y[0] = y0
    v[0] = v0

    for i in range(n_steps):
        y_next = y[i] + h * v[i]
        v_next = v[i] + h * (3 * v[i] - 2 * y[i])
        y[i + 1] = y_next
        v[i + 1] = v_next

    return t, y


t_euler, y_euler = euler_method(2, -1, (0, 2), 200)

# %%
# Compare the exact solution with the numerical approximation.

plt.figure(figsize=(7, 4))
plt.plot(t, y_exact, label='Exact', linewidth=2)
plt.plot(t_euler, y_euler, '--', label='Euler approximation', linewidth=2)
plt.title('Exact vs Numerical Solution')
plt.xlabel('t')
plt.ylabel('y(t)')
plt.grid(True, alpha=0.3)
plt.legend()
plt.show()

# %%
# Compute the error between the exact and numerical solutions.

error = np.abs(y_exact[: len(t_euler)] - y_euler)

plt.figure(figsize=(7, 4))
plt.plot(t_euler, error, color='crimson', linewidth=2)
plt.title('Absolute Error of Euler Method')
plt.xlabel('t')
plt.ylabel('|y_exact - y_numeric|')
plt.grid(True, alpha=0.3)
plt.show()

# %%
# A small experiment varying the number of time steps.

for n in [50, 100, 200, 400]:
    t_num, y_num = euler_method(2, -1, (0, 2), n)
    y_ref = exact_solution(t_num)
    err = np.max(np.abs(y_ref - y_num))
    print(f'n = {n:>4} -> max error = {err:.6f}')

# %%
