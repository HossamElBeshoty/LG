import {IProducts} from "./products";
import {IChildrenProducts} from "./children-products";

export interface ICategoryProducts {
  data: number;
  details: string;
  detailsAr: string;
  hasProduct: boolean;
  isHidden: boolean;
  label: string;
  nameAr: string;
  title: string;
  titleAr: string;
  product: IProducts[];
  allChildren: IChildrenProducts[];
}
