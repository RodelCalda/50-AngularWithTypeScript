import { Injectable } from '@angular/core';
import { Video } from '../../../interface/video';

@Injectable({
  providedIn: 'root'
})
export class VideoListService {
  private videos: Video[] = [
    { id: 1, title: 'Introduction to Angular', genre: 'Educational', duration: 30, releaseYear: 2021 },
    { id: 2, title: 'Top 10 Sci-Fi Movies', genre: 'Entertainment', duration: 45, releaseYear: 2019 },
    { id: 3, title: 'Mastering TypeScript', genre: 'Educational', duration: 60, releaseYear: 2022 },
  ];

  getVideos(): Video[] {
    return this.videos;
  }

  addVideo(video: Video): void {
    this.videos.push(video);
  }

  removeVideo(id: number): void {
    this.videos = this.videos.filter(video => video.id !== id);
  }

  clearVideos(): void {
    this.videos = [];
  }
}
