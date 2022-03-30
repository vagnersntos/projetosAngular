import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioModelComponent } from './formulario-model.component';

describe('FormularioModelComponent', () => {
  let component: FormularioModelComponent;
  let fixture: ComponentFixture<FormularioModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
