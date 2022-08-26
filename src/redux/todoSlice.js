import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:'todos',
    initialState:[
        {
            id:1,
            name:"GYM",
            status:false
        },{
            id:2,
            name:"avm",
            status:true
        }
    ],
    reducers:{
        addTodo:(state,action)=>{
            const newTodo={
                id:Date.now(),
                name:action.payload.name,
                state:false
            };
            state.push(newTodo);
        },
        deleteTodo:(state,action)=>{
           return state.filter((todo)=>todo.id!==action.payload.id);
           
        },
        doneTodo:(state,action)=>{
            const index=state.findIndex((todo)=>todo.id===action.payload.id);
            state[index].status=true;

        }
    }
})

export const {addTodo,deleteTodo,doneTodo} =todoSlice.actions;
export default todoSlice.reducer;