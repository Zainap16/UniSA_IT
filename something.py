import matplotlib.pyplot as plt
import numpy as np

years = [2006 + x for x in range(16)]

# x_data = np.random.random(1000) * 50
# y_data = np.random.random(1000) * 50

# print(x_data)
# print(y_data)
weights_kg = [110, 70, 120, 80, 55, 90, 105, 115, 75, 85, 100, 125, 130, 65, 60, 95]


# s- size,alpha-trasnparent
# plt.scatter(years)
# plt.show()
plt.plot(years, weights_kg, c="#00f")
plt.show()