import {TestBed, async} from '@angular/core/testing';
import {Component, Injectable, Input} from "@angular/core";
import {VehicleDetailComponent} from "./vehicle-detail.component";
import {VehicleDetailService} from "./vehicle-detail.service";

@Injectable({
  providedIn: 'root',
})

@Component({selector: 'handle-error', template: ''})
class HandleErrorComponent {
  @Input() errorMsg: '';
}
class MockVehicleDetailService extends VehicleDetailService{
  fetchOneVehicle() {
    return {
      id: "foo",
      description: "bar",
      price: "from 75,000 €",
      meta: {}
    }
  }
}

describe('VehicleDetailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HandleErrorComponent,
        VehicleDetailComponent
      ],
      providers: [
        {
          provide:VehicleDetailService,
          useClass: MockVehicleDetailService
        }
      ]
    }).compileComponents();
  }));
  it('should render', async(() => {
    const fixture = TestBed.createComponent(VehicleDetailComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
  it(`vehicle property must be truthy`, async(() => {
    const fixture = TestBed.createComponent(VehicleDetailComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.vehicle).toBeTruthy()
  }));
});
