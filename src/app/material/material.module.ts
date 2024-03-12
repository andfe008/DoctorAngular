import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {LayoutModule}from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatCardModule,MatButtonModule,MatSelectModule,MatInputModule,MatProgressBarModule
    ,MatProgressSpinnerModule,MatGridListModule,MatToolbarModule,MatSidenavModule,MatIconModule,
    MatListModule,MatPaginatorModule,MatDialogModule,MatSnackBarModule,MatTooltipModule,MatAutocompleteModule,
    LayoutModule
  ]
})
export class MaterialModule { }
