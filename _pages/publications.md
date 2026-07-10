---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% assign ordered_publications = site.publications | sort: 'date' %}
{% for post in ordered_publications reversed %}
  {% include archive-single.html %}
{% endfor %}
