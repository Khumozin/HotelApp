import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBoxesComponent } from './icon-boxes.component';

describe('IconBoxesComponent', () => {
  let component: IconBoxesComponent;
  let fixture: ComponentFixture<IconBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
