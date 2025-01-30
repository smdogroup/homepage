=========================================
Outreach - Optimization through Intuition
=========================================

Welcome to the SMDO Outreach landing page! This purpose of this section of the website is to provide a set of modules in the form of blog posts that can be used to learn about optimization using your intuition. If you have never been introduced to optimization before or have only been exposed at a cursory level, we believe that the following pages will help you begin to learn the field. The primary target audience for this material is middle and high school students, and significant effort has been placed in writing the content in a manner that is easily understandable.
This initiative is still actively under development, so please check back in the future for additional posts! 

----------------------------
Fundamentals of Optimization
----------------------------

This first set of posts serves as a preliminary introduction to optimization, including a brief history of the discipline and explanations about design variables, constraints, and objective functions.

.. toctree::
    :maxdepth: 1

    OutreachBlogPosts/history
    OutreachBlogPosts/objective
    OutreachBlogPosts/constraints
    OutreachBlogPosts/formulating
    
Here is an in-browser python environment where you can test your favorite
python code live!

.. toctree::
    :maxdepth: 1

    OutreachBlogPosts/python


.. The geogebra applet does not work with press theme due to a conflict on js
.. level, we need to either fix the bug or switch to a different theme.
.. Below is an example Geogebra applet:
..
.. Geogebra demo:
.. `````````````
..
.. .. raw:: html
..
..     <script src="https://www.geogebra.org/apps/deployggb.js"></script>
..     <script>
..     var params = {material_id: "zngqcxeb", "width": 800, "height": 600, "showToolBar": false};
..     var applet = new GGBApplet(params, true);
..     window.addEventListener("load", function() {
..         applet.inject('ggb-element');
..     });
..     </script>
..     <div id="ggb-element"></div>