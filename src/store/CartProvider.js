import React, { useReducer } from 'react';
import CartContext from './cart-context'

const defaultState = {
    items:[],
};

//리듀서 함수 정의: 여러가지 복잡한 상태관리를 중앙집중화
//state 업데이터 이전 상태
//action 어던 업데이틑 하는지에 대한 정보와 필요값들이 들어있음
const cartReducer=({state, action})=>{
    if(action.type==='ADD'){
        const updatedItems = [...state.items, action.item] //기존장바구니항목, 새항목
        return {
            items:updatedItems
        }; //이 액션에 대한 업데이트된 새로운 상태 반환
    }
    else if(action.type==='REMOVE'){

        //기존배열에서 id가 일치하는 항목제거
        const removeedItems= state.items.filter(item=>item.id !== action.id);
        return{
            itmes: removeedItems
        };
    }

    return defaultState;
}

const CartProvider = ({children}) => {

    //리듀서 사용
    const [cartState, dispatchCartAction]=useReducer(cartReducer, defaultState);

    //Provider의 value는 실제로 관리할 데이터 객체
    const cartcontext = {
        items:cartState.items, //장바구니 항목 배열
        addItem: item=>{
            //action 함수는 반드시 무슨 액션을 하는지와 액션에 필요한 값을 객체로 전달
            dispatchCartAction({
                type:'ADD',
                item: item,
            });
        },
        removeItem: id=>{
            dispatchCartAction({
                type:'REMOVE',
                id:id
            });
        },
    }
    
  return (
    <CartContext.Provider value={cartcontext}>
        {children}
    </CartContext.Provider>
  );

}

export default CartProvider;