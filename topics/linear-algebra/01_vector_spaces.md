---
layout: default
title: Vector Spaces
parent: Linear Algebra
grand_parent: Mathematical Foundations
nav_order: 1
toc: true
permalink: /topics/linear-algebra/01_vector_spaces/
---

# Vector Spaces

## Introduction

This is the Vector Spaces chapter.

---

{% assign siblings = site.pages | where: "parent", page.parent | sort: "nav_order" %}
{% assign current_index = siblings | index_of: page %}

<div style="display: flex; justify-content: space-between; margin-top: 2rem;">
  {% if current_index > 0 %}
    <a href="{{ siblings[current_index | minus: 1].url | relative_url }}" style="text-decoration: none;">⬅️ Previous</a>
  {% else %}
    <span></span>
  {% endif %}

  {% if current_index < siblings.size | minus: 1 %}
    <a href="{{ siblings[current_index | plus: 1].url | relative_url }}" style="text-decoration: none;">Next ➡️</a>
  {% else %}
    <span></span>
  {% endif %}
</div>