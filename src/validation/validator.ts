import { Schema, validate as joiVal } from 'joi';
import { ValidationResponse } from '../interfaces';

export class Validator {
  private readonly schema: Schema;

  constructor(schema: Schema, required: boolean, value?: string | boolean | number) {
    let s: Schema = schema;
    if (required) {
      s = s.required();
    } else {
      s = s.optional();
    }
    if (value !== undefined) {
      s = s.valid(value);
    }
    this.schema = s;
  }

  validate(val: any): ValidationResponse {
    const resp = joiVal(val, this.schema);
    let out: ValidationResponse;

    if (!resp.error) {
      out = {
        valid: true,
        error: false,
      };
    } else {
      out = {
        valid: false,
        error: resp.error,
      };
    }

    return out;
  }
}
