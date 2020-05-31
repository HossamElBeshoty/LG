import {IProducts} from "./products";

export interface ICategory {
  data: number;
  label: string;
  nameAr: string;
  parent: number;
  title: string;
  titleAr: string;
  details: string;
  detailsAr: string;
  hasProduct: boolean;
  isHidden: boolean;
  expandedIcon: string;
  collapsedIcon: string;
  children: ICategory[];
  product?: IProducts[];
}
