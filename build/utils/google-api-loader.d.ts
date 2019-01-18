import { Vue as _Vue } from 'vue/types/vue';
import { GoogleApiOptions } from '../interfaces';
declare global {
    interface Window {
        google: any;
        grecaptcha: any;
        gMapRes: any;
        gRecapRes: any;
    }
}
export declare class GoogleApiLoader {
    private options;
    isMapLoaded: boolean;
    isRecapLoaded: boolean;
    constructor(options: GoogleApiOptions);
    onMapLoaded: () => any;
    onRecapLoaded: () => any;
    makeMapPromise: () => () => any;
    makeRecapPromise: () => () => any;
    loadApi(url: string, loaded: boolean): void;
}
export declare function GoogleApiPlugin(Vue: typeof _Vue, options: GoogleApiOptions): void;
export default GoogleApiPlugin;
