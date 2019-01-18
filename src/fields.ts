import { Vue as _Vue } from 'vue/types/vue';
import vueAutoAddressField from './components/fields/address-auto';
import CheckboxField from './components/fields/checkbox/checkbox.vue';
import RadioField from './components/fields/radio/radio.vue';
import SelectField from './components/fields/select/select.vue';
import TextField from './components/fields/text/text.vue';
import { FormFieldOptions } from './interfaces';

export * from './interfaces/field';
export * from './interfaces/gmap';

export function vueFormFields(Vue: typeof _Vue, options?: FormFieldOptions): void {
  Vue.component('checkbox-field', CheckboxField);
  Vue.component('radio-field', RadioField);
  Vue.component('select-field', SelectField);
  Vue.component('text-field', TextField);
  if (options && options.autocomplete) {
    vueAutoAddressField(Vue, options.autocomplete);
  }
}

export default vueFormFields;
