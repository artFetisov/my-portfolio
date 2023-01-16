import {PATH} from "../../../../router/router.data";

interface ILink {
    title: string
    path: string
}

export const links: ILink[] = [
    {title: 'Home', path: PATH.HOME},
    {title: 'About', path: PATH.ABOUT},
    {title: 'Portfolio', path: PATH.WORKS},
    {title: 'Contact', path: PATH.CONTACT}
]