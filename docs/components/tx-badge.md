---
title: Badge
---

<script setup>
import '../../src/components/tx-badge/tx-badge.ts';
</script>

# Badge

<!--@include: ../../src/components/tx-badge/README.md{3,}-->

## Live Demo

<div class="demo-panel">
  <tx-badge>Default</tx-badge>
  <tx-badge color="primary">Primary</tx-badge>
  <tx-badge color="accent">In Progress</tx-badge>
  <tx-badge color="success">Complete</tx-badge>
  <tx-badge color="danger">Urgent</tx-badge>
</div>

### With Dot

<div class="demo-panel">
  <tx-badge dot color="success">Online</tx-badge>
  <tx-badge dot color="danger">Critical</tx-badge>
</div>
