import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorybuilderComponent } from './storybuilder.component';

describe('StorybuilderComponent', () => {
  let component: StorybuilderComponent;
  let fixture: ComponentFixture<StorybuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorybuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorybuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
