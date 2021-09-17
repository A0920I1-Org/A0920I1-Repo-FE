import {Feedback} from './Feedback';


export class ImageFeedback {
  id: number;
  imageUrl: string;
  feedBack: Feedback;

  constructor(id: number, imageUrl: string, feedBack: Feedback) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.feedBack = feedBack;
  }
}
