---
title: Progress
---

<script setup>
import '../../src/components/tx-progress/tx-progress.ts';
</script>

# Progress

<!--@include: ../../src/components/tx-progress/README.md{3,}-->

## Live Demo

<div class="demo-panel" data-direction="column">
  <tx-progress label="Upload" show-value value="73"></tx-progress>
  <tx-progress label="Completed" show-value value="100" color="success"></tx-progress>
  <tx-progress label="Storage" show-value value="89" color="danger"></tx-progress>
</div>
