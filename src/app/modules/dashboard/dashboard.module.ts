import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from "@angular/material";
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { InfomodalComponent } from './infomodal/infomodal.component';
import { EditmodalComponent } from './editmodal/editmodal.component';

@NgModule({
  declarations: [DashboardComponent, InfomodalComponent, EditmodalComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatBadgeModule
  ],
  entryComponents: [InfomodalComponent,EditmodalComponent]
})
export class DashboardModule { }
