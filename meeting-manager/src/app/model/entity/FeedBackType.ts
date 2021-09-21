import {FeedBack} from './FeedBack';


export class FeedBackType {
  id: number;
  name: string;
  feedBackList: FeedBack[];

  constructor(id: number, name: string, feedBackList: FeedBack[]) {
    this.id = id;
    this.name = name;
    this.feedBackList = feedBackList;
  }
}
