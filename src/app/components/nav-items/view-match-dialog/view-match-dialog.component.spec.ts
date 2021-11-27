import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMatchDialogComponent } from './view-match-dialog.component';

describe('ViewMatchDialogComponent', () => {
  let component: ViewMatchDialogComponent;
  let fixture: ComponentFixture<ViewMatchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMatchDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMatchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
