---
layout: page
permalink: /publications/
title: Publications
# description: publications by categories in reversed chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- External Links with Icons -->
<p style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem;">
  <span>Up-to-date publications are also available on:</span>
  <a href="https://scholar.google.com/citations?user=F5MAl8kAAAAJ" target="_blank">
    <i class="ai ai-google-scholar"></i> Google Scholar
  </a>
  <a href="https://orcid.org/0000-0001-6822-2900" target="_blank">
    <i class="ai ai-orcid"></i> ORCID
  </a>
  <!-- <a href="https://www.researchgate.net/profile/xxxx" target="_blank">
    <i class="ai ai-researchgate"></i> ResearchGate
  </a> -->
</p>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
