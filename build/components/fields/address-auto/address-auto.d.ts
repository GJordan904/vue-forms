import { AddressLangConfig, AutocompleteFieldConfig, SelectFieldConfig, TextFieldConfig } from '../../../interfaces';
import { Field } from '../field';
import { SelectField } from '../select';
import { TextField } from '../text';
export declare class AddressAuto extends Field {
    update: (arg: {
        value: any;
        key: string;
    }) => void;
    langConf: AddressLangConfig;
    showAdlFields: boolean;
    config: AutocompleteFieldConfig;
    $refs: {
        input: HTMLInputElement;
        street: TextField;
        city: TextField;
        state: SelectField;
        zip: TextField;
    };
    street: TextFieldConfig;
    city: TextFieldConfig;
    zip: TextFieldConfig;
    state: SelectFieldConfig;
    private $mapProvider;
    private autocomplete;
    created(): void;
    mounted(): void;
    destroyed(): void;
    fillAddress(): void;
    private fillFromCache;
    private geolocate;
    private buildConfig;
}
export default AddressAuto;
