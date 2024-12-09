import { ChangeDetectionStrategy, Component, computed, input, InputSignal, Signal } from '@angular/core';
import { IBlock } from '../../interfaces/block';
import { ProsConsComponent } from '../pros-cons/pros-cons.component';

@Component({
  standalone: true,
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  imports: [
    ProsConsComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockComponent {
  public block: InputSignal<IBlock> = input<IBlock>({ id: '', type: 'heading1', content: '' });
  protected readonly isContentEditable: Signal<boolean> = computed(() => this.block()?.type !== 'prosCons');
}
