import { TodoItem } from "../../App"

interface ExportTodoList { 

  todoList: TodoItem[] ;
  handleChange: (id: number) => void ;

}

export const TodoElement = ({ todoList , handleChange }: ExportTodoList ) => {

  return (

    <ul>

      { todoList.map( (item) => {

        return (

          <li key = {item.id}>

            <input type="checkbox" checked = {item.done} onChange = { () => handleChange (item.id)} ></input>

            {item.text}

          </li>

        )

      })}

    </ul>

  )
}
