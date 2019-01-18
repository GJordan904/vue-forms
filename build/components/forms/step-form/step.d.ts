import { Schema, ValidationError } from 'joi';
import { StepConfig, ValidationResponse } from '../../../interfaces';
export declare class Step {
    name: string;
    icon: string;
    index: number;
    schema?: Schema;
    validate?: (step?: Step) => ValidationResponse;
    active: boolean;
    touched: boolean;
    valid: boolean;
    errors: ValidationError | null;
    constructor(conf: StepConfig);
}
