import {ISections} from './sections';

export interface IPages {
  id: number;
  name: string;
  sections: ISections[];
}
