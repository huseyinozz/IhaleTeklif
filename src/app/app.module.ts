import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IslemComponent } from './islem/islem.component';
import { IhaleTeklifComponent } from './ihale-teklif/ihale-teklif.component';
import { AciklamaComponent } from './aciklama/aciklama.component';
import { EkAciklamaComponent } from './ek-aciklama/ek-aciklama.component';
import { FooterComponent } from './footer/footer.component';
import {DataTablesModule} from 'angular-datatables';
import { CalendarComponent } from './calendar/calendar.component';
import { ScheduleModule, RecurrenceEditorModule, DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { LoginComponent } from './login/login.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IslemComponent,
    IhaleTeklifComponent,
    AciklamaComponent,
    EkAciklamaComponent,
    FooterComponent,
    CalendarComponent,
    LoginComponent,
    DialogBodyComponent,

    
  ],
  imports: [
    BrowserModule,
    ScheduleModule, 
    RecurrenceEditorModule,
    MatButtonModule,
    MatIconModule,
    DataTablesModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,

  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    MonthAgendaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
