import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Block } from '../block.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
