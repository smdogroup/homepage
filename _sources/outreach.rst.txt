========
Outreach
========

Here is the start of the outreach page.

.. toctree::
    :maxdepth: 1

    OutreachBlogPosts/history
    OutreachBlogPosts/objective

Here is an in-browser python environment where you can test your favorate
python code live!

.. toctree::
    :maxdepth: 1

    OutreachBlogPosts/python


Below is an example Geogebra applet:

Geogebra demo:
`````````````

.. raw:: html

    <script src="https://www.geogebra.org/apps/deployggb.js"></script>
    <script>
    var params = {material_id: "zngqcxeb", "width": 800, "height": 600, "showToolBar": false};
    var applet = new GGBApplet(params, true);
    window.addEventListener("load", function() {
        applet.inject('ggb-element');
    });
    </script>
    <div id="ggb-element"></div>
