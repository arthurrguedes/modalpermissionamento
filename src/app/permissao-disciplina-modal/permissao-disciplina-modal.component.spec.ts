import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissaoDisciplinaModalComponent } from './permissao-disciplina-modal.component';

describe('PermissaoDisciplinaModalComponent', () => {
  let component: PermissaoDisciplinaModalComponent;
  let fixture: ComponentFixture<PermissaoDisciplinaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissaoDisciplinaModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermissaoDisciplinaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
