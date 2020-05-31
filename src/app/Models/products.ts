import {IProductImages} from './product-images';
import {ICategory} from "./category";

export interface IProducts {
  id: number;
  categoryId: number;
  name: string;
  nameAr: string;
  code: string;
  tag: string;
  specs: string;
  specsAr: string;
  feature: string;
  featureAr: string;
  isHomePage: boolean;
  isProductPage: boolean;
  isCategoryPage: boolean;
  isHidden: boolean;
  productImages: IProductImages[];
}
