import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigateModule } from './modules/navigate/navigate.module';
import { FleetManagerModule } from './modules/fleet-manager/fleet-manager.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NavigateModule,
    FleetManagerModule,
    HttpClientModule,
    SharedModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    }),
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-clip-rotate-multiple' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
