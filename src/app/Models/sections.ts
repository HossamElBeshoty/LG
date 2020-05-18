import {ISectionsMedia} from "./sections-media";

export interface ISections {
  id: number;
  pageId: number;
  title: string;
  titleAr: string;
  subTitle: string;
  subTitleAr: string;
  details: string;
  detailsAr: string;
  sectionMedia: ISectionsMedia[];
}
