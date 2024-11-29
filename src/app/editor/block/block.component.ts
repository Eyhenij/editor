import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Block } from '../block.model';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent {
  @Input() block!: Block;
  @Output() update = new EventEmitter<Block>();

  onUpdate(): void {
    this.update.emit(this.block);
  }
}
