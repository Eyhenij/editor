import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Block } from './block.model';

@Injectable({
  providedIn: 'root'
})
export class EditorStateService {
  private blocksSubject = new BehaviorSubject<Block[]>([]);
  blocks$ = this.blocksSubject.asObservable();

  addBlock(block: Block): void {
    const updatedBlocks = [...this.blocksSubject.value, block];
    this.blocksSubject.next(updatedBlocks);
  }

  updateBlock(updatedBlock: Block): void {
    const updatedBlocks = this.blocksSubject.value.map(block =>
      block.id === updatedBlock.id ? updatedBlock : block
    );
    this.blocksSubject.next(updatedBlocks);
  }

  removeBlock(blockId: string): void {
    const updatedBlocks = this.blocksSubject.value.filter(block => block.id !== blockId);
    this.blocksSubject.next(updatedBlocks);
  }
}
