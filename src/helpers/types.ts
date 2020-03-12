export interface INote {
    id: number
    name: string
    content: string
    noteKey: string
}

export interface IComment {
    author: string
    content: string
    createdAt: number
    noteKey: string
    commentKey: string
}

export enum Statuses {
    notInit = 0,
    isLoading = 1,
    success = 2,
    error = 3
}
