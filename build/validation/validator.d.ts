import { Schema } from 'joi';
import { ValidationResponse } from '../interfaces';
export declare class Validator {
    private readonly schema;
    constructor(schema: Schema, required: boolean, value?: string | boolean | number);
    validate(val: any): ValidationResponse;
}
