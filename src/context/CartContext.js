import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const useCartContext = () => {
    return useContext(CartContext)
}

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(init)

    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    }

    const removerItem = (id) => {
        setCart(cart.filter(item => item[0] !== id))
    }

    const isInCart = (id) => {
        return cart.some(item => item[0] === id)
    }

    const emptycart = () => {
        setCart([])
    }

    const totalCart = () => {
        return cart.reduce((acc, item) => acc + item[1].precio, 0)
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            removerItem,
            isInCart,
            emptycart,
            totalCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}