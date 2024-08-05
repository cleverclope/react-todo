import axios, { AxiosResponse } from "axios"


const baseURL: string = "http://localhost:4000"

export const getTodos = async(): Promise<AxiosResponse<APIDataType>>=>{
    try{
        const todos: AxiosResponse<APIDataType> = await axios.get(
            baseURL + "/todos"
        )
        return todos

    }
    catch(err){
        throw err
    }
}

export const addTodo = async( formData: ITodo ): Promise<AxiosResponse<APIDataType>>=>{
    try{
        const todo: Omit<ITodo, "_id"> = {
            name: formData.name,
            description : formData.description,
            status: false
        }

        const saveTodo: AxiosResponse<APIDataType> = await axios.post(
            baseURL + "/add-todo", 
            todo
        )
        return saveTodo

    }
    catch(err){
        throw err
    }
}

export const updateTodo = async(todo: ITodo): Promise<AxiosResponse<APIDataType>>=>{
    try {
        const todoUpdate: Pick<ITodo, "status"> = {
            status: true
        }

        const updatedTodo:AxiosResponse<APIDataType>= await axios.put(
            `${baseURL}/edit-todo/${todo._id}`,
            todoUpdate
        ) 
        return updatedTodo
    }
    catch(err){
        throw err
    }
}

export const deleteTodo=async(_id: string): Promise<AxiosResponse<APIDataType>>=>{
    try{
        const deletedTodo: AxiosResponse<APIDataType> = await axios.delete(
            `${baseURL}/delete-todo/${_id}`
        )
        return deletedTodo
    }
    catch(errr){
        throw errr
    }
}