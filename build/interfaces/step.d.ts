import { Schema, ValidationError } from 'joi';
import { ValidationResponse } from './validation';
export interface StepConfig {
    name: string;
    icon: string;
    index: number;
    validate?: (step?: Step) => ValidationResponse;
    schema?: Schema;
    active?: boolean;
}
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
export interface LanguageConfig {
    thanks?: string;
    contact?: string;
    error?: string;
    next?: string;
    prev?: string;
    submit?: string;
}
