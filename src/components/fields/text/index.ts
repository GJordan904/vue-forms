import { Component } from 'vue-property-decorator';
import { TextFieldConfig } from '../../../interfaces';
import { StrSchema } from '../../../validation';
import { ValidatedField } from '../validated-field';

@Component({
  name: 'text-field',
})
export class TextField extends ValidatedField {
  config: TextFieldConfig = {
    type: 'text',
    label: 'Label',
    fieldClass: 'w-full',
    iconClass: 'icon-circle',
    schema: StrSchema,
    pHolder: '',
  };

  mounted(): void {
    super.mounted();
  }
}

export default TextField;
