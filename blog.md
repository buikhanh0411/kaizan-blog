---
layout: layout.njk
title: "Blog"
---

# Tất cả bài viết

Dưới đây là danh sách toàn bộ các bài viết của mình:

<ul>
{%- for post in collections.posts -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>
