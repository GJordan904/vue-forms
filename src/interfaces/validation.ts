import { ArraySchema, ObjectSchema, Schema, StringSchema, ValidationError } from 'joi';

export interface ValidationResponse {
  valid: boolean;
  error: ValidationError | boolean;
}

export interface Schemas {
  [key: string]: Schema;
}

export type SchemaFactory = (arg?: any) => Schema;
export type StringFactory = (arg?: any) => StringSchema;
export type GroupFactory = (arg?: any) => ObjectSchema;
export type ArrayFactory = (arg?: any) => ArraySchema;

export interface StateProvince {
  name: string;
  value: string;
}