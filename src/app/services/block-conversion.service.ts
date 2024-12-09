import { Injectable } from '@angular/core';
import { IBlock } from '../interfaces/block';

@Injectable({
  providedIn: 'root'
})
export class BlockConversionService {

  constructor() { }

  convertBlock(block: IBlock, newType: 'paragraph' | 'heading1' | 'heading2' | 'heading3' | 'prosCons'): IBlock {
    const newBlock: IBlock = { ...block, type: newType };

    if (newType === 'prosCons') {
      newBlock.content = '';
    }

    return newBlock;
  }
}
