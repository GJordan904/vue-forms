<template>
  <div :class="['field', config.fieldClass, statusClass()]">
    <div class="label">{{config.label}}</div>
    <div class="checkbox-container">
      <div v-if="config.arr" class="check-item" v-for="o in config.values">
        <input @click="touch()" class="input-check" type="checkbox" v-model="val" :name="config.name" :value="o.value">
        <label class="label-check">{{o.label}}</label>
      </div>
      <div v-else class="check-item">
        <input @click="touch()" class="input-check" type="checkbox" v-model="val" :name="config.name" :value="true">
        <label class="label-check">{{o.label}}</label>
      </div>
    </div>
    <div v-if="pristineValid()" class="help-text">{{config.helpText}}</div>
    <div v-else class="error-text">{{config.errorText}}</div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>