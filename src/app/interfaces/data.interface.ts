export interface IDataService {
    searchByName: (name: string) => void,
    searchByCategory: (category: string) => void,
    getCategories: () => void
}