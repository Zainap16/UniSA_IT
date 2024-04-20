import numpy as np
import matplotlib.pyplot as plt

# Generate time data (in months)
months = np.arange(1, 13)

# Generate average monthly temperatures (in Celsius)
average_temperatures = [10, 12, 15, 20, 25, 28, 30, 29, 26, 20, 15, 11]

# Generate random fluctuations around the average temperatures
random_fluctuations = np.random.normal(0, 3, size=len(months))  # Mean=0, Standard Deviation=3

# Add random fluctuations to the average temperatures to create realistic temperature data
temperature_data = average_temperatures + random_fluctuations

# Plot the temperature data
plt.plot(months, temperature_data, marker='o', linestyle='-')
plt.title('Monthly Temperature Variation')
plt.xlabel('Month')
plt.ylabel('Temperature (°C)')
plt.xticks(months, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
plt.grid(True)
plt.show()