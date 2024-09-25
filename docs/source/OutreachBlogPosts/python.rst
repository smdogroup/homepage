======
Python
======

This is an in-browser python execution environment where you can test your
python code live:

.. replite::
   :kernel: xeus-python
   :height: 900px
   :prompt_color: #dc3545

   from IPython.display import clear_output
   import matplotlib.pyplot as plt
   import numpy as np

   x = np.linspace(0, 2 * np.pi, 101)

   for i in range(100):
       clear_output(wait=True)
       y = np.sin(x + i * 0.1)
       plt.plot(x, y)
       plt.pause(0.1)
