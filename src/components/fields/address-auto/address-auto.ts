/// <reference types="@types/googlemaps" />
import { Component, Inject, Prop } from 'vue-property-decorator';
import {
  AddressLangConfig,
  AutocompleteFieldConfig,
  SelectFieldConfig,
  TextFieldConfig,
} from '../../../interfaces';
import { CitySchema, StateSchema, StreetSchema, ZipSchema } from '../../../validation/schemas';
import { statesEn } from '../../../validation/utils';
import { Field } from '../field';
import { SelectField } from '../select';
import SF from '../select/select.vue';
import { TextField } from '../text';
import TF from '../text/text.vue';

@Component({
  name: 'address-auto',
  components: {
    TF,
    SF,
  },
})
export class AddressAuto extends Field {
  @Prop() update!: (arg: {value: any, key: string}) => void;
  @Prop({default: (): AddressLangConfig => ({
      street: '',
      city: '',
      state: '',
      stateList: [],
      zip: '',
    })}) langConf!: AddressLangConfig;
  public showAdlFields: boolean = false;

  public config: AutocompleteFieldConfig = {
    label: 'Address',
    pHolder: 'Start typing for suggestions',
    fieldClass: 'col',
  };

  public $refs!: {
    input: HTMLInputElement,
    street: TextField,
    city: TextField,
    state: SelectField,
    zip: TextField,
  };

  public street: TextFieldConfig = {
    label: 'Street',
    type: 'text',
    fieldClass: 'col',
    pHolder: 'Street',
    schema: StreetSchema,
  };

  public city: TextFieldConfig = {
    label: 'City',
    type: 'text',
    fieldClass: 'col-md-4',
    pHolder: 'City',
    schema: CitySchema,
  };

  public zip: TextFieldConfig = {
    label: 'Zip',
    type: 'text',
    fieldClass: 'col-md-4',
    pHolder: 'Zip',
    schema: ZipSchema,
  };

  public state: SelectFieldConfig = {
    label: 'State',
    fieldClass: 'col-md-4',
    schema: StateSchema,
    options: [...statesEn],
  };

  @Inject('$mapProvider') private $mapProvider!: any;
  private autocomplete: google.maps.places.Autocomplete | null = null;

  public created(): void {
    this.buildConfig();
  }

  public mounted(): void {
    super.mounted();
    this.$mapProvider().then((google: any) => {
      this.autocomplete = new google.maps.places.Autocomplete(this.$refs.input, {types: ['address']});
      if (this.autocomplete) {
        this.geolocate();
        this.autocomplete.addListener('place_changed', this.fillAddress);
      }
    });
    this.fillFromCache();
  }

  public destroyed(): void {
    const pacs = document.getElementsByClassName('pac-container');
    Array.from(pacs).forEach(el => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });
  }

  public fillAddress() {
    if (this.autocomplete) {
      const place = this.autocomplete.getPlace();
      let streetNum = '';
      let streetName = '';

      for (const comp of place.address_components) {
        const type = comp.types[0];
        switch (type) {
          case 'street_number':
            streetNum = comp.long_name;
            break;
          case 'route':
            streetName = comp.long_name;
            break;
          case 'locality':
            this.$refs.city.val = comp.long_name;
            this.$refs.city.touch();
            break;
          case 'administrative_area_level_1':
            this.$refs.state.val = comp.short_name;
            this.$refs.state.touch();
            break;
          case 'postal_code':
            this.$refs.zip.val = comp.short_name;
            this.$refs.zip.touch();
            break;
          default:
            break;
        }
        this.$refs.street.val = `${streetNum} ${streetName}`;
        this.$refs.street.touch();
        this.showAdlFields = true;
      }
    }
  }

  private fillFromCache() {
    const st = this.istore('street')();
    if (st.length > 0) {
      const city = this.istore('city')();
      const state = this.istore('state')();
      const zip = this.istore('zip')();
      this.$refs.street.val = st;
      this.$refs.zip.val = zip;
      this.$refs.state.val = state;
      this.$refs.city.val = city;
      this.showAdlFields = true;
    }
  }

  private geolocate(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const geo = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const circle = new google.maps.Circle({
          center: geo,
          radius: position.coords.accuracy,
        });
        if (this.autocomplete) {
          this.autocomplete.setBounds(circle.getBounds());
        }
      });
    }
  }

  private buildConfig(): void {
    const conf = this.langConf;
    for (const key in conf) {
      if (conf.hasOwnProperty(key) && conf[key]) {
        if (key === 'stateList') {
          this.state.options = [...conf[key]];
        } else {
          if (this[key]) {
            this[key].label = conf[key];
            if (key !== 'state') {
              this[key].pHolder = conf[key];
            }
          }
        }
      }
    }
  }
}

export default AddressAuto;
