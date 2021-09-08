import {Feedback} from './Feedback';


export class FeedbackType {
  id: number;
  name: string;
  feedBackList: Feedback[];

  constructor(id: number, name: string, feedbackList: Feedback[]) {
    this.id = id;
    this.name = name;
    this.feedBackList = feedbackList;
  }
}
