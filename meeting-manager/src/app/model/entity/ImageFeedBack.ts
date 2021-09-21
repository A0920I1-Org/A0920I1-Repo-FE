import {FeedBack} from './FeedBack';


export class ImageFeedBack {
  id: number;
  imageUrl: string;
  feedBack: FeedBack;


  constructor(id: number, imageUrl: string, feedBack: FeedBack) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.feedBack = feedBack;
  }
}
