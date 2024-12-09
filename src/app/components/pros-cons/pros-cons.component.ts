import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-pros-cons',
  templateUrl: './pros-cons.component.html',
  styleUrls: ['./pros-cons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProsConsComponent {
  @Input() pros: string[] = [];
  @Input() cons: string[] = [];

  addPro(pro: string) {
    this.pros.push(pro);
  }

  addCon(con: string) {
    this.cons.push(con);
  }
}
