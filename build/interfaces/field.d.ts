import { Schema } from 'joi';
import { GoogleApiOptions } from './gmap';
export interface FormGroup {
    [key: string]: string | boolean | number | FormGroup | any[];
}
export interface FormFieldOptions {
    autocomplete?: GoogleApiOptions;
}
export interface AddressGroup extends FormGroup {
    street: string;
    city: string;
    state: string;
    zip: string;
}
export interface AddressLangConfig {
    [key: string]: string | Array<{
        label: string;
        value: string;
    }>;
    street: string;
    city: string;
    state: string;
    stateList: Array<{
        label: string;
        value: string;
    }>;
    zip: string;
}
export interface FieldConfig {
    label?: string;
    fieldClass?: string;
}
export interface AutocompleteFieldConfig extends FieldConfig {
    pHolder?: string;
}
export interface ValidatedFieldConfig extends FieldConfig {
    schema: Schema;
    helpText?: string;
    errorText?: string;
    required?: boolean;
    valid?: string | boolean | number;
}
export interface TextFieldConfig extends ValidatedFieldConfig {
    type?: string;
    pHolder?: string;
    iconClass?: string;
}
export interface SelectFieldConfig extends ValidatedFieldConfig {
    options: FieldConfigValue[];
}
export interface SelectFieldOptions extends FieldConfig {
    options?: FieldConfigValue[];
}
export interface RCFieldConfig extends ValidatedFieldConfig {
    arr: boolean;
    name: string;
    values: FieldConfigValue[];
}
export interface FieldConfigValue {
    label: string;
    value?: string | number | boolean;
    checked?: boolean;
}
