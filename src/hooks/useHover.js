import { useState, useEffect, useRef } from "react";

export default function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    function enter() {
        setHovered(true)
    }

    function leave() {
        setHovered(false)
    }

    useEffect(() => {
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)
        
        return () => {
            ref.current.addEventListener("mouseenter", enter)
            ref.current.addEventListener("mouseleave", leave)
        }
    }, [])

    return [hovered, ref]
}