import {FilterType, IPortfolioItem} from "../../data/portfolio.data";

export interface IAppState {
    photoUrl: string
    filter: FilterType
    works: IPortfolioItem[]
    selectedWork: IPortfolioItem | null
    selectedWorks: IPortfolioItem[]
}