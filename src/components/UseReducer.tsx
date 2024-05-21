import { useReducer } from 'react'

export default function UseReducer() {
    // khai báo giá trị khởi tạo
    const initial:number = 0;
    // khởi tạo hàm reducer
    const reducer=(state=initial,action:any)=>{
        switch (action.type) {
            case "INCREASE":
                return state+ action.payload
                
            case "DECREASE":
                return state - action.payload
        
            default:
                return state;
        }
    }
    /*
        Đối với những action có dữ liệu phức tạp thì nên tạo 1 function
    */ 
    const action=(type:any,payload:any)=>{
        return {
            type:type,
            payload:payload,
        }
    }

    // dùng destructoring để hứng lấy kết quả


    const [count,dispatch]=useReducer(reducer,initial);
    // hàm xử lý tăng count
    const increase=()=>{
        dispatch(action("INCREASE",1)) 
    }
    // const increase=()=>{
    //     dispatch({
    //         payload:1,
    //         type:"INCREASE"
    //     }) 
    // }
    // hàm xử lý giảm count
    const decrease=()=>{
        dispatch(action("DECREASE",1))
    }
    

  return (
    <div>UseReducer
        {/* 
            là 1 hook 
            sinh ra để làm gì?
            1. sinh ra để quản lý những state phức tạp
             + khi muốn quản lý state thì thường các em 
             dùng useState (quản lý những state đơn giản)
             + về bản chất những gì useState làm được thì 
             useReducer cũng làm được nhưng nó sẽ đi
             những state phức tạp hơn
            2. tiền đề sau này học redux (thư viện giúp tạo ra 1 kho chứa dữ liệu)




            cách dùng của nó?
             - nó là 1 hook để dùng: 
             B1: import nó vào 
             B2: useReducer();
             nhận vào 2 tham số
             1. hàm reducer
             2. giá trị khởi tạo

        */}


        <p>Giá trị của biến count: {count}</p>
        <button onClick={increase}>Tăng</button>
        <button onClick={decrease}>Giảm</button>


    </div>
  )
}
