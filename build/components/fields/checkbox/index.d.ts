import { RCFieldConfig } from '../../../interfaces';
import { ValidatedField } from '../validated-field';
export declare class CheckboxField extends ValidatedField {
    config: RCFieldConfig;
    mounted(): void;
    touch(): void;
}
export default CheckboxField;
