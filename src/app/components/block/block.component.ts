import { Component, Input } from '@angular/core';
import { Block } from '../../interfaces/block';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent {
  @Input() block: Block;

  constructor() {
    this.block = { id: '', type: 'paragraph', content: '' };
  }

  get isContentEditable(): boolean {
    return this.block.type !== 'prosCons';
  }
}
