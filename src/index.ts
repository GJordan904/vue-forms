import { Vue as _Vue} from 'vue/types/vue';
import vueFormFields from './fields';
import vueFormTypes from './forms';
import { FormFieldOptions } from './interfaces';

export * from './components';
export * from './interfaces';
export * from './validation';
export { GoogleApiPlugin, GoogleApiLoader } from './utils/google-api-loader';
export { vueFormFields, vueFormTypes };

export function vueFormComponents(Vue: typeof _Vue, options?: FormFieldOptions) {
  vueFormFields(Vue, options);
  vueFormTypes(Vue);
}

export default vueFormComponents;
