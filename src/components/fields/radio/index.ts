import { Component } from 'vue-property-decorator';
import { RCFieldConfig } from '../../../interfaces';
import { StrSchema } from '../../../validation';
import { ValidatedField } from '../validated-field';

@Component({
  name: 'radio-field',
})
export class RadioField extends ValidatedField {
  config: RCFieldConfig = {
    label: 'Label',
    fieldClass: 'w-full',
    schema: StrSchema,
    arr: false,
    name: 'radio',
    values: [{label: 'label 1', value: 'val 1', checked: true}, {label: 'label 1', value: 'val 2', checked: false}],
  };

  mounted(): void {
    super.mounted();
    if (!this.val) {
      this.config.values.forEach(val => {
        if (val.checked) {
          this.val = val.value;
        }
      });
    }
    this.emitValid(this.val);
  }
}

export default RadioField;
