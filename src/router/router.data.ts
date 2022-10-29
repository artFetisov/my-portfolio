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
    {path: 'my-portfolio/home', element: HomePage},
    {path: 'my-portfolio/about', element: AboutPage},
    {path: 'my-portfolio/works', element: PortfolioPage},
    {path: 'my-portfolio/contact', element: ContactPage},
]
