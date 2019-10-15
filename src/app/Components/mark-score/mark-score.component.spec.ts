import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkScoreComponent } from './mark-score.component';

describe('MarkScoreComponent', () => {
  let component: MarkScoreComponent;
  let fixture: ComponentFixture<MarkScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
