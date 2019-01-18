import { Vue as _Vue } from 'vue/types/vue';
import { GoogleApiOptions } from '../../../interfaces';
import GoogleMapsPlugin from '../../../utils/google-api-loader';
import AddressAuto from './address-auto.vue';

export { AddressAuto } from './address-auto';

export function vueAutoAddressField(Vue: typeof _Vue, options: GoogleApiOptions) {
  GoogleMapsPlugin(Vue, options);
  Vue.component('address-auto', AddressAuto);
}

export default vueAutoAddressField;
