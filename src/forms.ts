import { Vue as _Vue } from 'vue/types/vue';
import VueStepForm from './components/forms/step-form';

export * from './interfaces/step';

export function vueFormTypes(Vue: typeof _Vue): void {
  VueStepForm(Vue);
}

export default vueFormTypes;
