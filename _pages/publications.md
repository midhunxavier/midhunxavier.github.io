---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
<p>Find citations and related work on <a href="{{ site.author.googlescholar }}">Google Scholar</a>.</p>
{% endif %}

{% assign ordered_publications = site.publications | sort: 'date' | reverse %}
{% assign publication_years = ordered_publications | group_by_exp: 'publication', 'publication.date | date: "%Y"' %}
{% for year in publication_years %}
<section class="publication-year" aria-labelledby="year-{{ year.name }}">
  <h2 id="year-{{ year.name }}">{{ year.name }}</h2>
  {% for publication in year.items %}
    {% include publication-compact.html publication=publication %}
  {% endfor %}
</section>
{% endfor %}
