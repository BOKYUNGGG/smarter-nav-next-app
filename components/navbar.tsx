'use client'
import Link from "next/link"

export default function Navbar(){


    return(
        <div>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link href='/feed'>Feed</Link>
                </li>
                <li>
                    <Link href='/account'>Account</Link>
                </li>
                <li>
                    <Link href='/login'>Login</Link>
                </li>
            </ul>
        </div>
    )
}