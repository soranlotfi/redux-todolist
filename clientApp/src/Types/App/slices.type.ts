
export interface TodoInterFace {
    name: string,
    type: string,
    description: string
    completed?: boolean
    id?: string
    edit?:boolean
}

export interface TodoState {
    todoList: TodoInterFace[];
}
