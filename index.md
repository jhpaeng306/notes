---
layout: default
title: Welcome
nav_order: 1
---

# 📚 Welcome to *Notes*

Welcome to **Jinhee Paeng's** collection of studies in **Applied Mathematics**, **Neuroscience**, and **Artificial Intelligence**.

This site is designed to share:
- Deep dives into mathematical foundations
- Explorations of dynamic systems
- Statistical methods for brain and machine understanding
- Insights on information theory and probabilistic modeling

---

## 🧭 Navigate

- [Concept Map](concept-map) — Explore interconnected topics
- [Topics](#topics) — Browse by subject
- [Posts](#posts) — Read detailed writeups

---

## 🗺 Concept Map

Visual overview of the relationships between key concepts.  
[Click here to explore the map →](concept-map)

---

## 📚 Topics

- [Linear Algebra](math/linear-algebra)
- [Probability](math/probability)
- (More coming soon!)

---

## ✍️ Latest Posts

{% assign posts = site.posts | sort: "date" | reverse %}
{% for post in posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}

---

> "Mathematics, rightly viewed, possesses not only truth but supreme beauty."  
> — *Bertrand Russell*

---
