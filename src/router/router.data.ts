import {FC} from "react";
import {HomePage} from "../components/pages/home/HomePage";
import {AboutPage} from "../components/pages/about/AboutPage";
import {PortfolioPage} from "../components/pages/portfolio/PortfolioPage";
import {ContactPage} from "../components/pages/contact/ContactPage";

export enum PATH {
    HOME = '/home',
    ABOUT = '/about',
    WORKS = '/works',
    CONTACT = '/contact'
}

export interface IRoute {
    path: string
    element: FC
    index?: boolean
}

export const routes: IRoute[] = [
    {path: PATH.HOME, element: HomePage, index: true},
    {path: PATH.ABOUT, element: AboutPage},
    {path: PATH.WORKS, element: PortfolioPage},
    {path: PATH.CONTACT, element: ContactPage},
]
