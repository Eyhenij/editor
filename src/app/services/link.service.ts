import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor() { }

  insertLink(selectedText: string, url: string): string {
    return `<a href="${url}" target="_blank">${selectedText}</a>`;
  }

  editLink(existingLink: string, newUrl: string): string {
    const linkElement = document.createElement('div');
    linkElement.innerHTML = existingLink;
    const anchor = linkElement.querySelector('a');
    if (anchor) {
      anchor.href = newUrl;
    }
    return linkElement.innerHTML;
  }
}
