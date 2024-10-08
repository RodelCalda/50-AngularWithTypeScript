import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGameListComponent } from './video-game-list.component'; 

describe('VideoGameListComponent', () => {
  let component: VideoGameListComponent;
  let fixture: ComponentFixture<VideoGameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoGameListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
