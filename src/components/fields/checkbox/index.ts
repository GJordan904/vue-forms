import { Component } from 'vue-property-decorator';
import { FieldConfigValue, RCFieldConfig } from '../../../interfaces';
import { BoolSchema } from '../../../validation';
import { ValidatedField } from '../validated-field';

@Component({
  name: 'checkbox-field',
})
export class CheckboxField extends ValidatedField {
  config: RCFieldConfig = {
    label: 'Label',
    fieldClass: 'w-full',
    schema: BoolSchema,
    arr: false,
    name: 'checkbox',
    values: [{label: 'label 1', value: 'val 1', checked: true}],
  };

  mounted(): void {
    super.mounted();
    if (this.config.arr) {
      this.val = this.istore() || [];
      if (this.val.length <= 0) {
        this.config.values.forEach((val: FieldConfigValue) => {
          if (val.checked) {
            this.val.push(val.value);
          }
        });
      }
    } else {
      this.val = this.istore();
      if (this.val === undefined) {
        this.val = this.config.values[ 0 ].checked;
      }
    }
  }

  touch() {
    if (!this.config.arr) {
      this.val = !this.val;
    }
    super.touch();
  }
}

export default CheckboxField;
