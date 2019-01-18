<template>
  <div>
    <div class="row">
      <div :class="['field', config.fieldClass]">
        <label for="autocomplete" class="label">{{config.label}}</label>
        <input ref="input" id="autocomplete" class="input-text" type="text" :placeholder="config.pHolder">
      </div>
    </div>

    <div v-show="showAdlFields">
      <div class="row">
        <text-field ref="street" @valid="update({value: $event, key: 'street'})" :iconfig="street" :istore="istore('street')"></text-field>
      </div>

      <div class="row">
        <text-field ref="city" @valid="update({value: $event, key: 'city'})" :iconfig="city" :istore="istore('city')"></text-field>

        <select-field ref="state" @valid="update({value: $event, key: 'state'})" :iconfig="state" :istore="istore('state')"></select-field>

        <text-field ref="zip" @valid="update({value: $event, key: 'zip'})" :iconfig="zip" :istore="istore('zip')"></text-field>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./address-auto.ts"></script>