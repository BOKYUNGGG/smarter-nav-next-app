'use client'

import { useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import {useRouter} from 'next/navigation'
type Props = {
    children : React.ReactNode,
    
}
export default function Modal({children}: Props){
    const router = useRouter()
    const dialogRef = useRef<HTMLDialogElement | null>(null)
    useEffect(()=>{
        if(!dialogRef.current?.open){
            dialogRef.current?.showModal()
        }
        console.log('asd')
    })

    return createPortal(
        <div>
            <dialog ref={dialogRef}>
                {children}
                <button onClick={()=>{router.back()}}>Close</button>
            </dialog>
        </div>,
        document.getElementById('modal-root')!
    )
}