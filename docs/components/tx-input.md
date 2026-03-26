---
title: Input
---

<script setup>
import '../../src/components/tx-input/tx-input.ts';
</script>

# Input

<!--@include: ../../src/components/tx-input/README.md{3,}-->

## Live Demo

### Fields

<div class="demo-grid">
  <tx-input label="Full Name" placeholder="John Doe"></tx-input>
  <tx-input label="Email" placeholder="john@example.com" type="email"></tx-input>
</div>

### Search

<div class="demo-panel">
  <tx-input search placeholder="Search anything..." style="width:100%;"></tx-input>
</div>
