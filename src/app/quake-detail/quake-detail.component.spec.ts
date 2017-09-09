import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuakeDetailComponent } from './quake-detail.component';

describe('QuakeDetailComponent', () => {
  let component: QuakeDetailComponent;
  let fixture: ComponentFixture<QuakeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuakeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuakeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
