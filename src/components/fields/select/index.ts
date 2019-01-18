import { Component } from 'vue-property-decorator';
import { SelectFieldConfig } from '../../../interfaces';
import { StrSchema } from '../../../validation';
import { ValidatedField } from '../validated-field';

@Component({
  name: 'select-field',
})
export class SelectField extends ValidatedField {
  config: SelectFieldConfig = {
    label: 'Label',
    fieldClass: 'w-full',
    schema: StrSchema,
    options: [ {label: 'Option A', value: 'A'} ],
  };

  mounted(): void {
    super.mounted();
  }
}

export default SelectField;
