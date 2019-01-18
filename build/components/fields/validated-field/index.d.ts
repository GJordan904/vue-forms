import { ValidatedFieldConfig } from '../../../interfaces';
import { Validator } from '../../../validation';
import { Field } from '../field';
export declare class ValidatedField extends Field {
    config: ValidatedFieldConfig;
    validator: Validator;
    touched: boolean;
    isValid: boolean;
    emitError(msg: any): void;
    emitValid(val: any): void;
    mounted(): void;
    touch(): void;
    statusClass(): string;
    pristineValid(): boolean;
    checkVal(): void;
}
