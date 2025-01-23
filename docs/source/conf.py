# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))


# -- Project information -----------------------------------------------------

project = "SMDO Research Group"
copyright = "2023, SMDO Group"
author = "SMDO Group"

# The full version, including alpha/beta/rc tags
release = "0.0.1"


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.

# fmt: off
extensions = [
    "sphinx.ext.githubpages",  # publish HTML docs in github pages
    "sphinxcontrib.bibtex",    # 3rd-party extension that handles bibtex,
                               # can be installed by:
                               # $ pip install sphinxcontrib-bibtex
    "sphinxcontrib.youtube",   # $ pip install sphinxcontrib-youtube
    "sphinx_tabs.tabs",
    "sphinx_design",
    "jupyterlite_sphinx",
    #"sphinxcontrib.geogebra",
    "sphinx_subfigure"
]
# fmt: on


# bibtex settings
bibtex_bibfiles = ["bib/publications.bib"]

# Add any paths that contain templates here, relative to this directory.
templates_path = ["_templates"]

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []

sphinx_tabs_disable_tab_closing = True

# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = "press"  # install: $ pip install sphinx-press-theme

html_theme_options = {
    "external_links": [
        #        ("people", "TODO: add proper link"),
        #        ("publications", "TODO: add proper link"),
        #        ("projects", "TODO: add proper link"),
        #        ("code", "TODO: add proper link"),
        ("GitHub", "https://github.com/smdogroup"),
    ],
}

# def setup(app):
#     app.add_css_file("css/outreach_styles_new.css")

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ["_static", "images", "OutreachBlogPosts/images"]

html_css_files = ["css/outreach_styles.css"]
