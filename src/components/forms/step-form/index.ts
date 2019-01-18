import { Vue as _Vue } from 'vue/types/vue';
import { StepForm } from './step-form';
import { StepFormStep } from './step-form-step/step-form-step';
import SF from './step-form.vue';

export function VueStepForm(Vue: typeof _Vue): void {
  Vue.component('step-form', SF);
}

export { StepForm, StepFormStep };

export default VueStepForm;
