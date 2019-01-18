<template>
  <div :class="['field', config.fieldClass, statusClass()]">
    <label :for="id" class="label">{{config.label}}</label>
    <div class="input-container">
      <input :id="id" class="input-text" :type="config.type" @focusout="touch()" v-model="val" :placeholder="config.pHolder">
      <div class="icon-container">
        <span :class="config.iconClass"></span>
      </div>
    </div>
    <div v-if="pristineValid()" class="help-text">{{config.helpText}}</div>
    <div v-else class="error-text">{{config.errorText}}</div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>