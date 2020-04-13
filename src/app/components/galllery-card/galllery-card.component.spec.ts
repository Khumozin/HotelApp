import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallleryCardComponent } from './galllery-card.component';

describe('GallleryCardComponent', () => {
  let component: GallleryCardComponent;
  let fixture: ComponentFixture<GallleryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallleryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallleryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
