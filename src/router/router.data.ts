import {FC} from "react";
import {HomePage} from "../components/pages/home/HomePage";
import {AboutPage} from "../components/pages/about/AboutPage";
import {PortfolioPage} from "../components/pages/portfolio/PortfolioPage";
import {ContactPage} from "../components/pages/contact/ContactPage";

export interface IRoute {
    path: string
    element: FC
}

export const routes: IRoute[] = [
    {path: '/', element: HomePage},
    {path: '/about', element: AboutPage},
    {path: '/portfolio', element: PortfolioPage},
    {path: '/contact', element: ContactPage},
]
