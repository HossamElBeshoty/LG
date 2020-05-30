import {IProducts} from "./products";

export interface IOurProducts {
  title: string;
  titleAr: string;
  data: number;
  details: string;
  detailsAr: string;
  hasProduct: boolean
  isHidden: boolean
  label: string;
  nameAr: string;
  product: IProducts[];
}
