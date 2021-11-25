import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeamDialogComponent } from './view-team-dialog.component';

describe('ViewTeamDialogComponent', () => {
  let component: ViewTeamDialogComponent;
  let fixture: ComponentFixture<ViewTeamDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTeamDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeamDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
