# Fourier Series with a Square Wave
# %%
#Defining the target function (a square wave)
import numpy as np
import matplotlib.pyplot as plt
def square_wave(x):
    return np.where((x % (2 * np.pi)) < np.pi, 1, -1)
# %%
#plotting the square wave from 0 to 2pi
x = np.linspace(0, 2 * np.pi, 1000)
y = square_wave(x)
plt.plot(x, y)
plt.title('Square Wave')
plt.xlabel('x')
plt.ylabel('f(x)')
plt.grid()
# %%
#Calculating Fourier coefficients for different values of n
def fourier_coefficients(n):
    a0 = (1 / (2 * np.pi)) * np.trapezoid(square_wave(x), x)
    an = [(1 / np.pi) * np.trapezoid(square_wave(x) * np.cos(k * x), x) for k in range(1, n + 1)]
    bn = [(1 / np.pi) * np.trapezoid(square_wave(x) * np.sin(k * x), x) for k in range(1, n + 1)]
    return a0, an, bn

# Calculating the Fourier series approximation
def fourier_series(x, a0, an, bn):
    series = a0
    for k in range(1, len(an) + 1):
        series += an[k - 1] * np.cos(k * x) + bn[k - 1] * np.sin(k * x)
    return series

# Plotting the Fourier series approximation for different values of n
n_values = [1, 3, 5, 10]
plt.figure(figsize=(12, 8))
for n in n_values:
    a0, an, bn = fourier_coefficients(n)
    y_approx = fourier_series(x, a0, an, bn)
    plt.plot(x, y_approx, label=f'n={n}')
plt.plot(x, y, label='Original Square Wave', linewidth=2)
plt.title('Fourier Series Approximation of a Square Wave')
plt.xlabel('x')
plt.ylabel('f(x)')
plt.legend()
plt.grid()
# %%
#Show the plot of the L2 norm of the error between the original function and the Fourier approximation as a function of n
errors = []
for n in n_values:
    a0, an, bn = fourier_coefficients(n)
    y_approx = fourier_series(x, a0, an, bn)
    error = np.sqrt(np.trapezoid((y - y_approx) ** 2, x))
    errors.append(error)
plt.figure(figsize=(8, 6))
plt.plot(n_values, errors, marker='o')
plt.title('L2 Norm of the Error vs. Number of Fourier Terms')
plt.xlabel('Number of Fourier Terms (n)')
plt.ylabel('L2 Norm of the Error')
plt.grid()
plt.show()

# %%
