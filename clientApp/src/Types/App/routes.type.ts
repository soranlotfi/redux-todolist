export interface RoutesInterface {
    type: string;
    name: string;
    key: string;
    route: string;
    TabId?:number,
    component?: React.ReactNode ;

}