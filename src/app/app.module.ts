import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {FormsModule} from "@angular/forms";
import {VehicleDetailComponent} from "./vehicle-detail/vehicle-detail.component";
import {AppComponent} from './app.component';
import {VehicleComponent} from "./vehicles/vehicle.component";
import {HandleErrorComponent} from "./handleError/handle-error.component";

@NgModule({
  declarations: [
    AppComponent,
    HandleErrorComponent,
    VehicleComponent,
    VehicleDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
