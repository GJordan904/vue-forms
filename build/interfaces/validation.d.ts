import { ArraySchema, ObjectSchema, Schema, StringSchema, ValidationError } from 'joi';
export interface ValidationResponse {
    valid: boolean;
    error: ValidationError | boolean;
}
export interface Schemas {
    [key: string]: Schema;
}
export declare type SchemaFactory = (arg?: any) => Schema;
export declare type StringFactory = (arg?: any) => StringSchema;
export declare type GroupFactory = (arg?: any) => ObjectSchema;
export declare type ArrayFactory = (arg?: any) => ArraySchema;
export interface StateProvince {
    name: string;
    value: string;
}
