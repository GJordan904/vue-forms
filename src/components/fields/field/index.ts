import { Emit, Prop, Vue } from 'vue-property-decorator';
import { FieldConfig } from '../../../interfaces';
import { uuid } from '../../../utils/crypto';

export class Field extends Vue {
  @Prop() iconfig!: FieldConfig;
  @Prop() istore!: (arg?: any) => any;
  [key: string]: any;
  config: FieldConfig = {};
  val: any = '';
  touched: boolean = false;
  id: string = uuid();

  @Emit('update')
  emitUpdate(val: any) {}

  mounted(): void {
    this.config = { ...this.config, ...this.iconfig };
  }

  touch(): void {
    this.touched = true;
    this.emitUpdate(this.val);
  }
}
