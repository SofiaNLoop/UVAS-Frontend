import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionUserComponent } from './sesion-user.component';

describe('SesionUserComponent', () => {
  let component: SesionUserComponent;
  let fixture: ComponentFixture<SesionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
