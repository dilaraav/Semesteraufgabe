import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeineerfolgeComponent } from './meineerfolge.component';

describe('MeineerfolgeComponent', () => {
  let component: MeineerfolgeComponent;
  let fixture: ComponentFixture<MeineerfolgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeineerfolgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeineerfolgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
