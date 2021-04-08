import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogComponent } from './component/dialog/dialog.component';
import { MaterialModule } from './material.module';
import { ArticulosModule } from './articulos/articulos.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    ArticulosModule
    
    
  ],
 
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
