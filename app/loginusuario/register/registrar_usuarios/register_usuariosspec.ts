import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrar_usuarios } from './registrar_usuarios';

describe('RegisterComponent', () => {
  let component: Registrar_usuarios;
  let fixture: ComponentFixture<Registrar_usuarios>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registrar_usuarios ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registrar_usuarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
