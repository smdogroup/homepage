.. role:: boldblue
   :class: boldblue

.. role:: captiontext
   :class: captiontext

===========
Constraints
===========

When forming an optimization problem, it is often necessary to consider what would make your problem impossible or undesirable. For instance, suppose you are designing an airplane. One of the quantities you must account for is the mass of the plane. Obviously, the airplane’s mass cannot be negative because that is not physically possible. Likewise, we know that we want to have a plane, so it must have *some* mass. This forms what is commonly called an “:boldblue:`inequality constraint`,” which looks like:

.. math::

   c_1(x) \equiv m > 0

Here, we are stating that our constraint, :math:`c_1`, is a function of the design variables, :math:`x`. The constraint is defined as the mass of the airplane, :math:`m`, being strictly greater than zero. 

Consider another aspect of an airplane: we want it to fly! During most of its flight, we can assume that it will be in *steady level flight*; meaning that it is not accelerating, and its weight is supported by its lift. This is an “:boldblue:`equality constraint`” and is written as:

.. math::

   c_2(x) \equiv L = W

Now, we are defining another constraint, :math:`c_2`, which is likewise a function of :math:`x`` and is defined as the lift being equal to the weight—hence the name: equality constraint.

Consider a different optimization problem: you are walking across a valley with the goal to minimize your altitude. Without any constraints, this problem is fairly straightforward: if you can see the whole valley, then simply walk to its lowest point! Now suppose there is a lake at the bottom of the valley, and you need to stay dry. In this case, you would walk to the edge of the lake and stop: the lake acts as an *inequality constraint* on where you are allowed to move. We would also say that this constraint is :boldblue:`active` since it is currently affecting you once you reach the water line. Instead of a lake at the bottom of the valley, what if there is a pond midway up the valley? This would also act as an inequality constraint: you would not be able to walk into the pond without getting wet. However, you could walk around the pond and still reach the lowest point; making this constraint :boldblue:`inactive`. Finally, suppose there is a road running through the valley that you must stay on. The objective remains the same: minimize your altitude; but your position is always constrained by the road. You could formulate this as your position x must lie on the path defined by the road :math:`p(s): x=p(s)`. Alternatively, you could formulate this constraint by saying the distance between you and the road must be equal to zero: :math:`x-p\left(s\right)=0`. Both of these are equivalent and are *equality constraints*, and both result in a constraint that is always active. 

Key Takeaways:
``````````````
- Constraints are posed mathematically as either inequality or equality statements

- The constraints which are directly affecting the choice of design variables to avoid constraint violations are called active constraints

- Inactive constraints are inequality constraints that are satisfied and are not at their specified constraint bounds

Definitions:
````````````

- Inequality constraint: a mathematical constraint where a value is greater than or less than some specified value

- Equality constraint: a mathematical constraint where a value is exactly equal to another specified value
