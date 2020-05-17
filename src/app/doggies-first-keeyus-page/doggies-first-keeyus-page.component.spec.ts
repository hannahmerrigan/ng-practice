import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggiesFirstKeeyusPageComponent } from './doggies-first-keeyus-page.component';

describe('DoggiesFirstKeeyusPageComponent', () => {
  let component: DoggiesFirstKeeyusPageComponent;
  let fixture: ComponentFixture<DoggiesFirstKeeyusPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoggiesFirstKeeyusPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoggiesFirstKeeyusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
