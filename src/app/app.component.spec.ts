import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BlockConversionService } from './services/block-conversion.service';
import { LinkService } from './services/link.service';
import { Block } from './interfaces/block';

describe('AppComponent', () => {
  let blockConversionService: BlockConversionService;
  let linkService: LinkService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [BlockConversionService, LinkService]
    }).compileComponents();

    blockConversionService = TestBed.inject(BlockConversionService);
    linkService = TestBed.inject(LinkService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'editor' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('editor');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, editor');
  });

  it('should add a new block', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const initialLength = app.blocks.length;
    app.addBlock('paragraph');
    expect(app.blocks.length).toBe(initialLength + 1);
  });

  it('should edit a block', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const block: Block = { id: 'test', type: 'paragraph', content: 'Initial content' };
    app.blocks.push(block);
    app.editBlock('test', 'Updated content');
    expect(app.blocks.find(b => b.id === 'test')?.content).toBe('Updated content');
  });

  it('should reorder blocks', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const block1: Block = { id: '1', type: 'paragraph', content: 'Block 1' };
    const block2: Block = { id: '2', type: 'paragraph', content: 'Block 2' };
    app.blocks.push(block1, block2);
    const event = { item: { data: block1 }, currentIndex: 1 };
    app.reorderBlocks(event);
    expect(app.blocks[0].id).toBe('2');
    expect(app.blocks[1].id).toBe('1');
  });

  it('should convert a block type', () => {
    const block: Block = { id: '1', type: 'paragraph', content: 'This is a paragraph block.' };
    const newBlock = blockConversionService.convertBlock(block, 'heading1');
    expect(newBlock.type).toBe('heading1');
    expect(newBlock.content).toBe('This is a paragraph block.');
  });

  it('should insert a link', () => {
    const selectedText = 'Click here';
    const url = 'https://example.com';
    const link = linkService.insertLink(selectedText, url);
    expect(link).toBe('<a href="https://example.com" target="_blank">Click here</a>');
  });

  it('should edit a link', () => {
    const existingLink = '<a href="https://old-url.com" target="_blank">Click here</a>';
    const newUrl = 'https://new-url.com';
    const updatedLink = linkService.editLink(existingLink, newUrl);
    expect(updatedLink).toBe('<a href="https://new-url.com" target="_blank">Click here</a>');
  });
});
