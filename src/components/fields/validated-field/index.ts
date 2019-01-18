import { Emit } from 'vue-property-decorator';
import { ValidatedFieldConfig } from '../../../interfaces';
import { StrSchema, Validator } from '../../../validation';
import { Field } from '../field';

export class ValidatedField extends Field {
  config: ValidatedFieldConfig = { schema: StrSchema };
  validator!: Validator;
  touched: boolean = false;
  isValid: boolean = false;

  @Emit('invalid')
  emitError(msg: any) {}

  @Emit('valid')
  emitValid(val: any) {}

  mounted(): void {
    super.mounted();
    this.val = this.istore;
    const required = !(this.config.required === false);
    this.validator = new Validator(this.config.schema, required, this.config.valid);
  }

  touch(): void {
    super.touch();
    this.checkVal();
  }

  statusClass(): string {
    let cls = '';
    if (this.touched) {
      if (this.isValid) {
        cls = '_valid';
      } else {
        cls = '_error';
      }
    }
    return cls;
  }

  pristineValid(): boolean {
    return !this.touched || this.isValid;
  }

  checkVal(): void  {
    if (this.val !== undefined || this.val !== null) {
      const valResponse = this.validator.validate(this.val);
      if (valResponse.error) {
        this.isValid = false;
        this.emitError(valResponse);
      } else {
        this.isValid = true;
        this.emitValid(this.val);
      }
    }
  }
}
