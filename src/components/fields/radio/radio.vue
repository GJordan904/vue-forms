<template>
  <div :class="['field', config.fieldClass, statusClass()]">
    <div class="label">{{config.label}}</div>
    <div class="radio-container">
      <div class="radio-item" v-for="o in config.values">
        <input @click="touch()" class="input-radio" type="radio" v-model="val" :name="config.name" :value="o.value">
        <label class="label-radio">{{o.label}}</label>
      </div>
    </div>
    <div v-if="pristineValid()" class="help-text">{{config.helpText}}</div>
    <div v-else class="error-text">{{config.errorText}}</div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
