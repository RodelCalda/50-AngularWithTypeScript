import { Component } from '@angular/core';
import { VideoListService } from '../services/video-list.service';
import { Video } from '../../../interface/video'; 

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent {
  newVideo: Video = { id: 0, title: '', genre: '', duration: 0, releaseYear: 0 };
  videoList: Video[] = [];

  constructor(private videoService: VideoListService) {
    this.videoList = this.videoService.getVideos(); 
  }

  addVideo() {
    if (
      this.newVideo.title.trim() &&
      this.newVideo.genre.trim() &&
      this.newVideo.duration > 0 &&
      this.newVideo.releaseYear > 0
    ) {
      const newId = this.videoList.length ? this.videoList[this.videoList.length - 1].id + 1 : 1;
      const videoToAdd: Video = { ...this.newVideo, id: newId };

      this.videoService.addVideo(videoToAdd);
      this.newVideo = { id: 0, title: '', genre: '', duration: 0, releaseYear: 0 }; 
      this.videoList = this.videoService.getVideos(); 
    }
  }

  removeVideo(id: number) {
    this.videoService.removeVideo(id);
    this.videoList = this.videoService.getVideos(); 
  }

  clearVideos() {
    this.videoService.clearVideos(); 
    this.videoList = this.videoService.getVideos(); 
  }
}
