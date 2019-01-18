import { Schema, ValidationError } from 'joi';
import { ValidationResponse } from './validation';

export interface StepConfig {
  name: string;
  icon: string;
  index: number;
  validate?: (step?: Step) => ValidationResponse;
  schema?: Schema;
  active?: boolean;
}

export class Step {
  name: string;
  icon: string;
  index: number;
  schema?: Schema;
  validate?: (step?: Step) => ValidationResponse;
  active: boolean = false;
  touched: boolean = false;
  valid: boolean = false;
  errors: ValidationError | null = null;

  constructor(conf: StepConfig) {
    this.name = conf.name;
    this.icon = conf.icon;
    this.index = conf.index;
    this.schema = conf.schema;
    this.validate = conf.validate;
    this.active = conf.active || false;
  }
}

export interface LanguageConfig {
  thanks?: string;
  contact?: string;
  error?: string;
  next?: string;
  prev?: string;
  submit?: string;
}
