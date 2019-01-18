import { TextFieldConfig } from '../../../interfaces';
import { ValidatedField } from '../validated-field';
export declare class TextField extends ValidatedField {
    config: TextFieldConfig;
    mounted(): void;
}
export default TextField;
