import { Injectable } from '@angular/core';
import { Block } from '../interfaces/block';

@Injectable({
  providedIn: 'root'
})
export class BlockConversionService {

  constructor() { }

  convertBlock(block: Block, newType: 'paragraph' | 'heading1' | 'heading2' | 'heading3' | 'prosCons'): Block {
    const newBlock: Block = { ...block, type: newType };

    if (newType === 'prosCons') {
      newBlock.content = '';
    }

    return newBlock;
  }
}
