<template>
  <div :class="['field', config.fieldClass, statusClass()]">
    <label :for="id" class="label">{{config.label}}</label>
    <select :id="id" class="input-select" @focusout="touch()" v-model="val">
      <option v-for="o in config.options" :value="o.value">{{o.label}}</option>
    </select>
    <div v-if="pristineValid()" class="help-text">{{config.helpText}}</div>
    <div v-else class="error-text">{{config.errorText}}</div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>