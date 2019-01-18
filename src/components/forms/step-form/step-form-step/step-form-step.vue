<template>
  <div class="form-step" v-if="step.active" :id="id">
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./step-form-step.ts"></script>