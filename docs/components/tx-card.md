---
title: Card
---

<script setup>
import '../../src/components/tx-card/tx-card.ts';
import '../../src/components/tx-button/tx-button.ts';
import '../../src/components/tx-badge/tx-badge.ts';
import '../../src/components/tx-toggle/tx-toggle.ts';
import '../../src/components/tx-slider/tx-slider.ts';
import '../../src/components/tx-input/tx-input.ts';
import '../../src/components/tx-checkbox/tx-checkbox.ts';
</script>

# Card

<!--@include: ../../src/components/tx-card/README.md{3,}-->

## Live Demo

### Variants

<div class="demo-panel-bg">
  <div class="demo-grid" style="border:none;padding:0;background:transparent;">
    <tx-card accent="primary">
      <h3 slot="header">Project Alpha</h3>
      <p>Card with primary accent bar and subtle shadow.</p>
      <div slot="footer"><tx-button size="sm" variant="primary">View</tx-button></div>
    </tx-card>
    <tx-card accent="accent">
      <h3 slot="header">Design Review</h3>
      <p>Accent bar for categories or status indicators.</p>
      <div slot="footer"><tx-badge color="accent">In Progress</tx-badge></div>
    </tx-card>
    <tx-card accent="success" interactive>
      <h3 slot="header">Task Complete</h3>
      <p>Interactive — hover to lift, click to press.</p>
    </tx-card>
    <tx-card accent="danger" compact>
      <h3 slot="header">Urgent Fix</h3>
      <p>Compact padding for dense layouts.</p>
    </tx-card>
  </div>
</div>

### Nested Controls

<div class="demo-panel-bg">
  <div class="demo-grid" style="border:none;padding:0;background:transparent;">
    <tx-card flat>
      <h3 slot="header">Settings</h3>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <tx-toggle label="Notifications" checked></tx-toggle>
        <tx-toggle label="Sound"></tx-toggle>
        <tx-slider label="Opacity" show-value value="75"></tx-slider>
      </div>
    </tx-card>
    <tx-card>
      <h3 slot="header">Quick Form</h3>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <tx-input label="Task name" placeholder="Enter task..."></tx-input>
        <tx-checkbox label="High priority" checked></tx-checkbox>
        <tx-button variant="primary" size="sm" style="align-self:flex-start;">Create</tx-button>
      </div>
    </tx-card>
  </div>
</div>
