import { SelectFieldConfig } from '../../../interfaces';
import { ValidatedField } from '../validated-field';
export declare class SelectField extends ValidatedField {
    config: SelectFieldConfig;
    mounted(): void;
}
export default SelectField;
