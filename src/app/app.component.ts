import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IBlock } from './interfaces/block';
import { BlockComponent } from './components/block/block.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, BlockComponent, CdkDropList, CdkDrag]
})
export class AppComponent {
  protected blocks: IBlock[] = [
    { id: '1', type: 'paragraph', content: 'This is a paragraph block.' },
    { id: '2', type: 'heading1', content: 'This is a heading1 block.' },
    { id: '3', type: 'prosCons', content: '' }
  ];

  protected addBlock(type: 'paragraph' | 'heading1' | 'heading2' | 'heading3' | 'prosCons'): void {
    const newBlock: IBlock = { id: Date.now().toString(), type, content: '' };
    this.blocks.push(newBlock);
  }

  protected editBlock(id: string, content: string): void {
    const block: IBlock | undefined = this.blocks.find(b => b.id === id);

    if (block) {
      block.content = content;
    }
  }

  protected reorderBlocks(event: any): void {
    const previousIndex: number = this.blocks.findIndex((b: IBlock) => b.id === event.item.data.id);
    const [movedBlock]: IBlock[] = this.blocks.splice(previousIndex, 1);

    this.blocks.splice(event.currentIndex, 0, movedBlock);
  }
}
