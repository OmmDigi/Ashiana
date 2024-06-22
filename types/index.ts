export interface INavOptions {
  id: string;
  icon ? : any;
  name: string;
  path: string;
  submenu?: INavOptions[];
}
