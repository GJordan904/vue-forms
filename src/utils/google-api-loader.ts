import { Vue as _Vue } from 'vue/types/vue';
import { GoogleApiOptions } from '../interfaces';
import { lazyLoad } from './lazy-load';

declare global {
  interface Window {
    google: any;
    grecaptcha: any;
    gMapRes: any;
    gRecapRes: any;
  }
}

export class GoogleApiLoader {
  isMapLoaded = false;
  isRecapLoaded = false;

  constructor(private options: GoogleApiOptions) {}

  onMapLoaded = () => {
    this.isMapLoaded = true;
    return window.google;
  }

  onRecapLoaded = () => {
    this.isRecapLoaded = true;
    return window.grecaptcha;
  }

  makeMapPromise = () => lazyLoad(() => {
    if (typeof window === 'undefined') { // SSR do nothing
      return new Promise(() => {}).then(this.onMapLoaded);
    } else {
      return new Promise((resolve, reject) => {
        let apiUrl = 'https://maps.googleapis.com/maps/api/js?key=';
        apiUrl += `${this.options.mapApiKey}&libraries=`;
        apiUrl += `${this.options.mapLibraries}&callback=gMapRes`;
        try {
          window.gMapRes = resolve;
          this.loadApi(apiUrl, this.isMapLoaded);
        } catch (err) {
          reject(err);
        }
      }).then(this.onMapLoaded);
    }
  })

  makeRecapPromise = () => lazyLoad(() => {
    if (typeof window === 'undefined') { // SSR do nothing
      return new Promise(() => {}).then(this.onRecapLoaded);
    } else {
      return new Promise((resolve, reject) => {
        try {
          window.gRecapRes = resolve;
          this.loadApi(
            `https://www.google.com/recaptcha/api.js?onload=gRecapRes&render=explicit`,
            this.isRecapLoaded,
          );
        } catch (err) {
          reject(err);
        }
      }).then(this.onRecapLoaded);
    }
  })

  loadApi(url: string, loaded: boolean): void {
    if (typeof document === 'undefined') {
      return;
    }
    if (!loaded) {
      const apiScript = document.createElement('SCRIPT');
      apiScript.setAttribute('src', url);
      apiScript.setAttribute('async', '');
      apiScript.setAttribute('defer', '');
      document.head.appendChild(apiScript);
    } else {
      throw new Error('You already started the loading of google maps');
    }
  }
}

export function GoogleApiPlugin(Vue: typeof _Vue, options: GoogleApiOptions) {
  const loader = new GoogleApiLoader(options);
  const provide: { $mapProvider?: any, $recapProvider?: any } = {};
  if (options.load.map) {
    provide.$mapProvider = loader.makeMapPromise();
  }
  if (options.load.recap) {
    provide.$recapProvider = loader.makeRecapPromise();
  }
  Vue.mixin({
    provide,
  });
}

export default GoogleApiPlugin;
