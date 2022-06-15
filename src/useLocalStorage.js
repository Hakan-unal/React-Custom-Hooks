import { useState, useEffect } from "react"


const getSavedValue = (key, initial) => {
    const value = JSON.parse(localStorage.getItem(key))
    if (value) return value

    if (value instanceof Function) return initial()

    return initial
}

export const useLocalStorage = (key, initial) => {
    const [val, setVal] = useState(() => {
        return getSavedValue(key, initial)
    })




    return [val, setVal]
}