import { StrSchema } from '../../validation/schemas';

export function textConfigFactory(conf: { [key: string]: any }) {
  const defConf = {
    label: 'Name',
    errorText: 'Please use only letters, hyphens, and spaces.',
    fieldClass: 'field-container mt-3',
    required: true,
    schema: StrSchema
  };
  const out = { ...defConf, ...conf };
  console.log(out);
  return out;
}