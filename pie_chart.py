import numpy as np
import matplotlib.pyplot as plt

langs = ["Python","C++","Jave","C#","Go"]
votes = [50,24,14,6,17]
explodes = [0.3, 0,0,0.2,0]



plt.pie(votes, labels=langs, explode=explodes, autopct="%.2f%%")
plt.show()
