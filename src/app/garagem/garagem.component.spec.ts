import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragemComponent } from './garagem.component';

describe('GaragemComponent', () => {
  let component: GaragemComponent;
  let fixture: ComponentFixture<GaragemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaragemComponent]
    });
    fixture = TestBed.createComponent(GaragemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
