import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsulsPageComponent } from './capsuls-page.component';

describe('CapsulsPageComponent', () => {
  let component: CapsulsPageComponent;
  let fixture: ComponentFixture<CapsulsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsulsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapsulsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
