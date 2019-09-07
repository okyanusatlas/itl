import {TestBed, async} from '@angular/core/testing';
import {VehicleComponent} from './vehicle.component';
import {Component, Input} from "@angular/core";

@Component({selector: 'vehicle-detail', template: ''})
class VehicleDetailComponent {
  @Input() vehicleId;
}

@Component({selector: 'handle-error', template: ''})
class HandleErrorComponent {
  @Input() errorMsg: '';
}

describe('VehicleComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HandleErrorComponent,
        VehicleComponent,
        VehicleDetailComponent
      ],
    }).compileComponents();


  }));
  it('should render', async(() => {
    const fixture = TestBed.createComponent(VehicleComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
  it(`should have content maximum in 2500ms'`, async(() => {


    const fixture = TestBed.createComponent(VehicleComponent);
    const component = fixture.debugElement.componentInstance;
    fixture.whenStable().then(() => { // wait for async getQuote
      fixture.detectChanges();
      setTimeout(() => {
        expect(component.vehicles.length).toBeGreaterThan(1);
      }, 2500);

    });
  }));
});
