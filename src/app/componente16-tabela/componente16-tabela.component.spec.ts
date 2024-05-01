import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente16TabelaComponent } from './componente16-tabela.component';

describe('Componente16TabelaComponent', () => {
  let component: Componente16TabelaComponent;
  let fixture: ComponentFixture<Componente16TabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente16TabelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente16TabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
