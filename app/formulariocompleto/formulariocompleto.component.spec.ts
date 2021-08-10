import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariocompletoComponent } from './formulariocompleto.component';

describe('FormulariocompletoComponent', () => {
  let component: FormulariocompletoComponent;
  let fixture: ComponentFixture<FormulariocompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariocompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariocompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
