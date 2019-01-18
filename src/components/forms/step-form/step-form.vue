<template>
  <div class="form-container">
    <div class="form-header">
      <div v-for="step in steps"
           :key="step.index"
           :class="[ 'step-icon', step.active ? 'active' : '', statusClass(step) ]"
           @click="takeStep(step.index)">

        <i class="material-icons">{{step.icon}}</i>

      </div>
    </div>

    <div class="loader" v-if="status === 'sending'">
      <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
        <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
          s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
          c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path>
       <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
          C22.32,8.481,24.301,9.057,26.013,10.047z">
         <animateTransform attributeType="xml"
                          attributeName="transform"
                          type="rotate"
                          from="0 20 20"
                          to="360 20 20"
                          dur="0.5s"
                           repeatCount="indefinite">
         </animateTransform>
        </path>
      </svg>
    </div>
    <div class="check-container" v-else-if="status === 'done'">
      <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
      <p class="check-lead">
        {{lang.thanks}}</p>
      <p class="check-lead">{{lang.contact}}</p>
    </div>
    <div v-else-if="status === 'error'" class="form-error">
      {{lang.error}}
    </div>
    <div v-else class="form-content">
      <step-form-step v-for="step in steps" :step="step" :key="step.index">
        <slot :name="step.name"></slot>
      </step-form-step>
    </div>

    <div class="form-footer">
      <div class="row">
        <div :class="['prev-step', isFirst() ? 'first' : '']" @click="takeStep(activeStep - 1)">
          <i class="material-icons">arrow_back</i>
          <span class="helper-text">{{lang.prev}}</span>
        </div>
        <div :class="['next-step', isLast() ? 'last' : '']" @click="takeStep(activeStep + 1)">
          <i class="material-icons">arrow_forward</i>
          <span class="helper-text">{{lang.next}}</span>
        </div>
      </div>

      <div class="row">
        <div :class="['submit-form', valid ? 'valid' : '']" @click="submitForm()">
          <i class="material-icons">send</i>
          <span class="helper-text">{{lang.submit}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" src="./step-form.ts"></script>