import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Block } from './interfaces/block';
import { BlockComponent } from './components/block/block.component';
import { ProsConsComponent } from './components/pros-cons/pros-cons.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BlockComponent, ProsConsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'editor';

  blocks: Block[] = [
    { id: '1', type: 'paragraph', content: 'This is a paragraph block.' },
    { id: '2', type: 'heading1', content: 'This is a heading1 block.' },
    { id: '3', type: 'prosCons', content: '' }
  ];

  addBlock(type: 'paragraph' | 'heading1' | 'heading2' | 'heading3' | 'prosCons') {
    const newBlock: Block = { id: Date.now().toString(), type, content: '' };
    this.blocks.push(newBlock);
  }

  editBlock(id: string, content: string) {
    const block = this.blocks.find(b => b.id === id);
    if (block) {
      block.content = content;
    }
  }

  reorderBlocks(event: any) {
    const previousIndex = this.blocks.findIndex(b => b.id === event.item.data.id);
    const [movedBlock] = this.blocks.splice(previousIndex, 1);
    this.blocks.splice(event.currentIndex, 0, movedBlock);
  }
}
