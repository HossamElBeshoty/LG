import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultsDoorsComponent } from './vaults-doors.component';

describe('VaultsDoorsComponent', () => {
  let component: VaultsDoorsComponent;
  let fixture: ComponentFixture<VaultsDoorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaultsDoorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultsDoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
