export interface Block {
  id: string;
  type: 'text' | 'header';
  content: string;
}
