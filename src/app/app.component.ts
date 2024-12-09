import { ChangeDetectionStrategy, Component, signal, untracked, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IBlock } from './interfaces/block.model';
import { BlockComponent } from './components/block/block.component';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, BlockComponent, CdkDropList, CdkDrag]
})
export class AppComponent {
  protected readonly blocks: WritableSignal<IBlock[]> = signal<IBlock[]>([
    { id: '1', type: 'paragraph', content: 'This is a paragraph block.' },
    { id: '2', type: 'heading1', content: 'This is a heading1 block.' },
    { id: '3', type: 'prosCons', content: '' }
  ]);

  protected addBlock(type: 'paragraph' | 'heading1' | 'heading2' | 'heading3' | 'prosCons'): void {
    const newBlock: IBlock = { id: Date.now().toString(), type, content: '' };
    this.blocks.update((blocksArr: IBlock[]) => [...blocksArr, newBlock]);
  }

  protected editBlock(id: string, content: string): void {
    const block: IBlock | undefined = this.blocks().find((b: IBlock) => b.id === id);

    if (block) {
      block.content = content;
    }
  }

  protected onDrop(event: CdkDragDrop<any>): void {
    if (event.currentIndex === event.previousIndex) {
        return;
    }

    const updatedList: IBlock[] = this.blocks();
    moveItemInArray(updatedList, event.previousIndex, event.currentIndex);
    this.blocks.set(updatedList);
  }
}
