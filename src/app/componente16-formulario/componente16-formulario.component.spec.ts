import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente16FormularioComponent } from './componente16-formulario.component';

describe('Componente16FormularioComponent', () => {
  let component: Componente16FormularioComponent;
  let fixture: ComponentFixture<Componente16FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente16FormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente16FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
