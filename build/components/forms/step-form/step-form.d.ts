import { Vue } from 'vue-property-decorator';
import { LanguageConfig } from '../../../interfaces';
import { Step } from './step';
export declare class StepForm extends Vue {
    steps: Step[];
    submit: () => Promise<any>;
    langConf: LanguageConfig;
    status: string;
    activeStep: number;
    valid: boolean;
    validClass: string;
    lang: LanguageConfig;
    validChanged(val: boolean): void;
    created(): void;
    statusClass(s: Step): string;
    takeStep(index: number): void;
    setValid(): void;
    submitForm(): void;
    isFirst(): boolean;
    isLast(): boolean;
}
export default StepForm;
