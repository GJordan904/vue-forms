import { Component, Prop, Vue } from 'vue-property-decorator';
import { Step } from '../step';
import { uuid } from '../../../../utils/crypto';

@Component({
  name: 'step-form-step',
})
export class StepFormStep extends Vue {
  @Prop() step!: Step;
  id: string = uuid();

  mounted() {
    this.step.active = this.step.index === 0;
  }
}

export default StepFormStep;
