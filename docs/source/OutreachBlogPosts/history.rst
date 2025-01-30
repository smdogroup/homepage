.. role:: boldblue
   :class: boldblue

.. role:: captiontext
   :class: captiontext

=======================
History of Optimization
=======================
What comes to mind when you think of the word “optimize?”  

Suppose you’ve gone to the store and wanted to buy as many snacks as possible for 20$. There are a lot of different kinds of snacks in the store at various price points so you must try and figure out which snacks you want and for the lowest possible total price. This is optimization in a nutshell! To put it in official terms, the Merriam-Webster dictionary defines it as making a situation or use of a resource as perfect, effective, or functional as possible.  

Humans have been optimizing for centuries, as it can apply to almost any situation that eases day-to-day life. The idea of optimization can be traced to older societies where efficient survival was important. This could take the form of a farmer maximizing the harvest using limited land, or a hunter minimizing exerted energy while hunting. Optimization even extends past human nature as we’ve discovered that plants and animals also try to find the best approach to achieving a task. Take a look at the video below to get an idea of how optimization exists even in nature.  

.. youtube:: HyzT5b0tNtk
   :align: center

Nowadays, we've moved past survival and looking more at cost efficiency in modern society.  

From these examples and definitions, the concept of optimization can be narrowed down to determining the minimum (or maximum) of some set of requirements to fulfill another set of requirements.  

.. dropdown:: Definition: Minimum
   :icon: light-bulb
   
   The minimum is usually thought of as the least of something. However, the least amount of anything in the real world must be 0 since it is impossible to have a negative amount of a physical quantity. For example, the least amount of candy you can get on Halloween is zero pieces (unless you have a sneaky sibling who steals your candy). Therefore, we must place limits or constraints on our parameters to determine what a realistic minimum or maximum can be. We’ll review these concepts in more detail later.

.. dropdown:: Test Your Knowledge: Think of some ways you have potentially used optimization in your life, they don’t necessarily have to be complex situations
   :icon: question

   - Taking a shortcut through your neighborhood to get to your friend's house  

   - Picking a breakfast that you can finish quickly in the morning to get to school on time   

   - Making a pillow fort as big as possible with a limited number of pillows.    

.. QUESTION: how do we want this to appear on the website
For a real-life example take note of the following:   
      During WWII, engineers were deciding where to add armor to planes so that they would survive attacks. Planes that returned from often had bullet holes in the fuselage and wings so one would naturally assume that is where they are most often hit and should be most protected. However, a statistician Abraham Wald disagreed, determining that the armor should be placed on the engine and nose where there were little too few bullets. Before revealing the reason, think about why Wald was correct. 
      Simply, the planes that had bullet holes in the engine and nose were getting shot down and never returned. The sample size that the engineers were looking at did not consider the planes that never survive battle.  

.. figure:: images/Timeline/plane.png
      :figwidth: 100 %
      :alt: Surivorship bias plane example
      :scale: 20 %
      :align: center
      :target: https://en.wikipedia.org/wiki/Survivorship_bias

      :captiontext:`Distribution of where planes that returned typically had bullet holes. (Credit Wikipedia [2])`

      ..

Planes that returned from battle often had bullet holes in the fuselage and wings so it was assumed that that’s where they were most often hit and should have the most protection. However, a statistician Abraham Wald disagreed, determining that the armor should be placed on the engine and nose where there were few bullet holes. Before revealing the reason, think about Wald’s reasoning.  

The planes that had bullet holes in the engine and nose were getting shot down as opposed to the ones that returned. The sample size that the engineers were looking at did not consider the planes that never survived the battle. To successfully optimize, they had to expand their sample size and were then able to place armor only where it was needed. In terms of optimization, they maximized the survivability of the planes with the constraints of cost and materials.   

Although the basis of the idea of optimization is simple and almost automatic in human nature, it is difficult to precisely say when the concept was fully realized as a mathematical application. It can be traced back to as early as the Greeks with Archimedes finding the max of a parabola. Others give credit to Sir Isaac Newton for his study of minimal resistance in which he sought a shape that minimized drag with potential applications to ship designs.  

.. figure:: images/Timeline/Combined_People.png
      :width: 800px
      :alt: Images of Archimedes (left) and Sir Isaac Newton (right)
      :align: center
      
      :captiontext:`Left Archimedes (Credit Getty Images [3]). Right Isaac Newton (Credit Wikipedia [4])`

      ..

The origins of optimization were put into text by Leonis Vitalyevich in 1939 with his monograph “Mathematical Methods for Organization and Planning of Production.”  

However, the actual application of optimization was used on a wide scale during World War II. 

.. dropdown:: Test Your Knowledge: Think about why optimization is a key tool during wars
   :icon: question
   
   Essentially, officials realized that a key factor in fighting the war was the coordination of energy and resources. The calculations required to solve the problems posed by the US military often required many resources and time. With the advent of electronic computing, formal large-scale optimization problems with constraints became feasible.  
   
Optimization is an ever-growing field with numerous practical applications. A current and widely known example of a system using optimization to function is ChatGPT. The AI uses various techniques to comb through mass amounts of data and output answers quickly. Essentially, ChatGPT operates using optimization by reducing the time taken to provide an answer to the user. 

The idea of a fully-fledged :boldblue:`optimization problem` and :boldblue:`constraints` may seem unfamiliar at first, but we’ll delve deeper into specifics in later sections.  

Today, optimization is used in a variety of fields from economics to mathematics to engineering. It stretches from how businesses operate to yield the highest profits with the lost cost margins to building faster jets that use the least amount of fuel.   

If you’d like to learn more about current techniques and applications of optimization, feel free to explore the other sections of this website.  


   .. figure:: images/Timeline/TimelineTNR.png
      :width: 500px
      :alt: timeline for the history of optimization
      :align: center

      :captiontext:`Chronological Timeline of critical events in optimization history`

      ..

References:
```````````````

[1] `YouTube BBC News <https://www.youtube.com/watch?v=HyzT5b0tNtk&t=1s>`_

[2] `Surivorship Bias Plane <https://en.wikipedia.org/wiki/Survivorship_bias>`_

[3] `Archimedes <https://www.biography.com/scholars-educators/a43249494/who-discovered-pi-archimedes-of-syracuse>`_

[4] `Isaac Newton <https://en.wikipedia.org/wiki/Isaac_Newton>`_



