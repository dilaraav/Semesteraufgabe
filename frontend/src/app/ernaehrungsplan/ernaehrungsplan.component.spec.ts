import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErnaehrungsplanComponent } from './ernaehrungsplan.component';

describe('ErnaehrungsplanComponent', () => {
  let component: ErnaehrungsplanComponent;
  let fixture: ComponentFixture<ErnaehrungsplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErnaehrungsplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErnaehrungsplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
