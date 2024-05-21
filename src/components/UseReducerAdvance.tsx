import React, { useReducer } from 'react'

interface Todo{
    id: number;
    name: string;
    status: boolean;
}

export default function UseReducerAdvance() {


    const initial ={
        todos:[],
        isloading: false,
        todo:{
            id:Math.floor(Math.random()*99999999999999999999+new Date().getMilliseconds()),
            name: "",
            state: false,

        },
    }
     // khởi tạo action
     const action=(type:string,payload:any)=>{
        return {
            type: type,
            payload: payload,
        }
     }
    // khởi tạo hàm reducer
    const reducer=(state : any=initial,action:any)=>{
        switch (action.type) {
            case "CHANGE_INPUT":
                console.log(state,action.payload);
                
                return {...state,todo:{...state.todo,name:action.payload}};
            case "ADD_TODO":
                // state.todos.push(action.payload);
                return {...state,todos:[...state.todos,{...action.payload,id:Math.floor(Math.random()*999999999+new Date().getMilliseconds())}]};
            default:
                return state;
        }
    }
    const [state,dispatch] = useReducer(reducer,initial)
    // hàm lấy giá trị ô input handleChange
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let inputValue=e?.target.value;
        dispatch(action("CHANGE_INPUT",inputValue))
    }
    //hàm thêm công việc
    const addTodo=()=>{
        dispatch(action("ADD_TODO",state.todo))
    }
   
  return (
    <div>UseReducerAdvance
        <br />
        <input onChange={handleChange} type="text" />
        <button onClick={addTodo}>Thêm công việc</button>
        <p>Danh sách công việc:</p>
        <ul>
            {
                state.todos.map((item:any,index:number)=>{
                    return <li key={item.id}>{item.name}</li>
                })
            }
        </ul>
       
    </div>
  )
}
