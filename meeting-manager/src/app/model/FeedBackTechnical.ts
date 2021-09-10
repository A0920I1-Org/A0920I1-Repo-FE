import {FeedBackType} from "./FeedBackType";
import {Account} from "./Account";
import {ImageFeedBack} from "./ImageFeedBack";

export class FeedBackTechnical {
  title: string;
  sender: string;
  dateFeedback: Date;
  nameRome:string;
  contents:string;
  imageFeedBackList: ImageFeedBack[];
  handlingStaff: string;
  contentHandle: string;

}
