import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const storeContextProvider = (props)=>{

  const [cartItems, setCartItems] = useState({})

  const addToCart = (itemId) => {
    if(!cartItems[itemId]){
      setCartItems((prev) =>({...prev,[itemId]:1}))
    }
    else{
      setCartItems((prev) =>({...prev, [itemId]:prev[itemId]+1}))
    }
  } 

  const removeFromCart = (itemId) =>{
    setCartItems((prev)=> ({...prev , [itemId]:prev[itemId]-1}))
  }

  useEffect(()=>{

  },[cartItems])

  const contextValue = {
    food_list,
    addToCart,
    removeFromCart,
    cartItems,
    setCartItems

  }
  return(
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default storeContextProvider;