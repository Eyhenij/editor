import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { BlockComponent } from './components/block/block.component';
import { ProsConsComponent } from './components/pros-cons/pros-cons.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    ProsConsComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
