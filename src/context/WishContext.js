import { createContext, useContext } from "react";
import { LoginContext } from "./LoginContext";
import { db } from "../firebase/config";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export const WishContext = createContext()

export const useWishContext = () => {
    return useContext(WishContext)
}
export const WishProvider = ({ children }) => {
    const { user } = useContext(LoginContext)

    const agregarAlWishList = async (item) => {
        user.deseados.push(item)
        const useRef = doc(db, "usuarios", `${user.id}`);
        await updateDoc(useRef, {
            deseados: arrayUnion({ ...item })
        });

    }

    const removerItemWish = (id) => {
        user.deseados = (user.deseados.filter(item => item[0] !== id))
    }

    const isInWish = (id) => {
        return user.deseados.some(item => item[0] === id)
    }

    const emptyWish = () => {
        user.deseados = []
    }

    return (
        <WishContext.Provider value={{
            agregarAlWishList,
            removerItemWish,
            isInWish,
            emptyWish
        }}>
            {children}
        </WishContext.Provider>
    )
}