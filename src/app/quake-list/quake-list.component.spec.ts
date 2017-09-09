import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuakeListComponent } from './quake-list.component';

describe('QuakeListComponent', () => {
  let component: QuakeListComponent;
  let fixture: ComponentFixture<QuakeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuakeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuakeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
