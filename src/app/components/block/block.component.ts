import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  inject,
  input,
  InputSignal,
  Signal
} from '@angular/core';
import { IBlock } from '../../interfaces/block.model';
import { ProsConsComponent } from '../pros-cons/pros-cons.component';
import { CdkDragHandle } from '@angular/cdk/drag-drop';
import { MatIcon } from '@angular/material/icon';
import { Nullable } from 'rt-tools';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProsConsComponent, CdkDragHandle, MatIcon],
  host: {
    class: 'c-content-block',
  }
})
export class BlockComponent {
  readonly #sanitizer: DomSanitizer = inject(DomSanitizer);

  public block: InputSignal<IBlock> = input<IBlock>({ id: '', type: 'heading1', content: '' });
  protected readonly isContentEditable: Signal<boolean> = computed(() => this.block()?.type !== 'prosCons');

  @HostBinding('style')
  public get style(): Nullable<SafeStyle> {
    let styleStr: string = '';

    if (this.block()?.type === 'prosCons') {
      styleStr += `background-color: var(--secondary-100);`;
    }

    return styleStr.length ? this.#sanitizer.bypassSecurityTrustStyle(styleStr) : undefined;
  }

  public onDragHandleClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}
