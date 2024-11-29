import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditorStateService } from './editor-state.service';
import { Block } from './block.model';
import { BlockComponent } from './block/block.component';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, BlockComponent],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  blocks$ = this.editorState.blocks$;

  constructor(private editorState: EditorStateService) {}

  addBlock(): void {
    const newBlock: Block = { id: Math.random().toString(36).substr(2, 9), type: 'text', content: 'New block' };
    this.editorState.addBlock(newBlock);
  }

  updateBlock(block: Block): void {
    this.editorState.updateBlock(block);
  }
}
