import { Vue } from 'vue-property-decorator';
import { FieldConfig } from '../../../interfaces';
export declare class Field extends Vue {
    iconfig: FieldConfig;
    istore: (arg?: any) => any;
    [key: string]: any;
    config: FieldConfig;
    val: any;
    touched: boolean;
    id: string;
    emitUpdate(val: any): void;
    mounted(): void;
    touch(): void;
}
