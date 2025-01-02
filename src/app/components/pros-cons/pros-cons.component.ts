import { ChangeDetectionStrategy, Component, model, ModelSignal } from '@angular/core';

@Component({
  selector: 'app-pros-cons',
  templateUrl: './pros-cons.component.html',
  styleUrls: ['./pros-cons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProsConsComponent {
  public pros: ModelSignal<string[]> = model<string[]>([]);
  public cons: ModelSignal<string[]> = model<string[]>([]);

  addPro(pro: string) {
    this.pros.update((value: string[]) => [...value, pro]);
  }

  addCon(con: string) {
    this.cons.update((value: string[]) => [...value, con]);
  }
}
