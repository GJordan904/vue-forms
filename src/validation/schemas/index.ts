import JOI, { ArraySchema, BooleanSchema, NumberSchema, ObjectSchema, Schema, SchemaMap, StringSchema } from 'joi';
import { ArrayFactory, GroupFactory, SchemaFactory, Schemas, StringFactory } from '../../interfaces';

export const BoolSchema: BooleanSchema = JOI.boolean();

export const NumSchema: NumberSchema = JOI.number();

export const StrSchema: StringSchema = JOI.string();

export const GroupSchema: GroupFactory = (def?: SchemaMap): ObjectSchema => JOI.object().keys(def);

export const ArrSchema: ArrayFactory = (i: Schema): ArraySchema => JOI.array().items(i);

export const RegexSchema: StringFactory = (reg: RegExp): StringSchema => StrSchema.regex(reg);

export const NameSchema: StringSchema = RegexSchema(/^[A-Za-z\-\s']{3,30}$/);

export const EmailSchema: StringSchema = JOI.string().email();

export const PhoneSchema: StringSchema = RegexSchema(/^\(?\d{3}[)-]?\d{3}-?\d{4}$/);

export const TaxIdSchema: StringSchema = RegexSchema(/^(?:\d{3}-\d{2}-\d{4}|\d{2}-\d{7}|\d{9})$/);

export const StreetSchema: StringSchema = RegexSchema(/^[\w\s\-.\/#']{3,60}$/);

export const CitySchema: StringSchema = RegexSchema(/^[A-Za-z\-.\s]{3,30}$/);

export const StateSchema: StringSchema = RegexSchema(/^[A-Za-z]{2}$/);

export const ZipSchema: StringSchema = RegexSchema(/^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] ?\d[A-Z]\d)$/);

export const AddressSchema: ObjectSchema = GroupSchema({
    street: StreetSchema.required(),
    city: CitySchema.required(),
    state: StateSchema.required(),
    zip: ZipSchema.required(),
  });

export const schemas: Schemas = {
  name: NameSchema,
  taxId: TaxIdSchema,
  email: EmailSchema,
  phone: PhoneSchema,
  address: AddressSchema,
  street: StreetSchema,
  city: CitySchema,
  state: StateSchema,
  zip: ZipSchema,
  num: NumSchema,
  bool: BoolSchema,
  str: StrSchema,
};

export const schemaFactories: {[key: string]: SchemaFactory} = {
  arr: ArrSchema,
  reg: RegexSchema,
  grp: GroupSchema,
};
