export interface INote {
    id: number
    name: string
    content: string
}

export enum Statuses {
    notInit = 0,
    isLoading = 1,
    success = 2,
    error = 3
}
