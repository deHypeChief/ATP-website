/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react"
import './style.css'

export default function Button({alt, full, blue, green, children}){
    const buttonRef = useRef()
    useEffect(()=>{
        if(alt && buttonRef.current){
            buttonRef.current.classList.add("alt")
        }
        if(blue && buttonRef.current){
            buttonRef.current.classList.add("blue")
        }
        if(full && buttonRef.current){
            buttonRef.current.classList.add("full")
        }
        if(green && buttonRef.current){
            buttonRef.current.classList.add("green")
        }
    }, [alt, blue, full, green])
    return(
        <button ref={buttonRef}>{children}</button>
    )
}