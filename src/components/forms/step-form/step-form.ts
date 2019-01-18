import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { LanguageConfig } from '../../../interfaces';
import { Step } from './step';
import StepFormStep from './step-form-step/step-form-step.vue';

@Component({
  name: 'step-form',
  components: { StepFormStep },
})
export class StepForm extends Vue {
  @Prop() steps!: Step[];
  @Prop() submit!: () => Promise<any>;
  @Prop({default: () => {}}) langConf!: LanguageConfig;
  status: string = 'working';
  activeStep: number = 0;
  valid: boolean = false;
  validClass: string = '';
  lang: LanguageConfig = {
    thanks: 'Thank You.',
    contact: 'A Credit Specialist will be in touch with you shortly.',
    error: 'There was an error sending your application. Please reload the page and try again.',
    prev: 'Previous Step',
    next: 'Next Step',
    submit: 'Submit Form',
  };

  @Watch('valid')
  validChanged(val: boolean) {
    this.validClass = val ? 'valid' : '';
  }

  created(): void {
    this.lang = { ...this.lang, ...this.langConf };
  }

  statusClass(s: Step): string {
    let cls = '';
    if (s.touched) {
      if (s.valid) {
        cls = 'valid';
      } else {
        cls = 'error';
      }
    }
    return cls;
  }

  takeStep(index: number): void {
    if (index < 0) { index = this.steps.length - 1; }
    if (index >= this.steps.length) { index = 0; }

    this.steps.forEach((s: Step) => {
      // Touch and validate the step we are moving out of
      if (s.index === this.activeStep) {
        s.touched = true;
        if (s.validate) {
          s.valid = s.validate(s).valid;
        } else {
          s.valid = true;
        }
      }
      // Set step we are moving into as active
      s.active = index === s.index;
    });
    this.activeStep = index;
  }

  setValid(): void {
    let valid = true;
    this.steps.forEach(s => {
      if (this.activeStep === s.index && s.validate) {
        s.valid = s.validate(s).valid;
      }
      if (!s.valid) {
        valid = false;
      }
    });
    this.valid = valid;
  }

  submitForm() {
    if (this.valid) {
      this.status = 'sending';
      this.submit()
        .then(res => {
          this.status = 'done';
        })
        .catch(err => {
          this.status = 'error';
        });
    }
  }

  isFirst(): boolean {
    return this.activeStep === 0;
  }

  isLast(): boolean {
    return this.activeStep === this.steps.length - 1;
  }
}

export default StepForm;
