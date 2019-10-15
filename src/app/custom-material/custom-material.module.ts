import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatListModule,
  MatCardModule,
  MatExpansionModule,
  MatGridListModule,
  MatProgressBarModule,
  MatDialogModule,
  MatDividerModule,
  MatStepperModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule
} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatCheckboxModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSidenavModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatButtonToggleModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSidenavModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatDividerModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
