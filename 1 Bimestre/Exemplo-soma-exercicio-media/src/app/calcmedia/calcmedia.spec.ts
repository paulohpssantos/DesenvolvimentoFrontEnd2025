import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calcmedia } from './calcmedia';

describe('Calcmedia', () => {
  let component: Calcmedia;
  let fixture: ComponentFixture<Calcmedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calcmedia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calcmedia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
