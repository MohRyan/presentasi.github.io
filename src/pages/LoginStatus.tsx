import React, { useEffect, useState } from 'react'
import { Register } from './Register'
import { Login } from './Login'
import { BelumDaftar } from '../components/effect/BelumDaftar'
import App from '../App'

export const LoginStatus = () => {
    const [showLogin, setShowLogin] = useState<boolean>(false)
    const [showRegister, setShowRegister] = useState<boolean>(false)
    const [showBelumDaftar, setShowBelumDaftar] = useState<boolean>(false)
    const [isLogin, setIsLogin] = useState<boolean>(true)

    const [user, setUsers] = useState<boolean>(false)

    useEffect(() => {
        if (isLogin === true) {
            setTimeout(() => {
                if (user === false) {
                    setShowBelumDaftar(true)

                }
            }, 1000);
            setTimeout(() => {
                if (user === false) {
                    setShowBelumDaftar(false)
                    setShowLogin(true)
                }
            }, 5000);
        }
    }, [])

    const handleLogin = () => {
        setShowLogin(!showLogin)
    }

    const handleRegister = () => {
        setShowRegister(!showRegister)
    }

    const handleIsLogin = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setShowLogin(false)
        setUsers(true)
        const user = localStorage.getItem("Users")
        const admin = localStorage.getItem("Admin")
        if (user) {
            window.location.href = "/home"
        } else if (admin) {
            window.location.href = "/admin"
        } else {
            window.location.href = "/"
        }
    }


    const handleMoveRegister = () => {
        setShowRegister(!showRegister)
        setShowLogin(true)
    }
    const handleMoveLogin = () => {
        setShowLogin(!showLogin)
        setShowRegister(true)
    }
    return (
        <div>
            {/* <App /> */}
            <BelumDaftar showBelumDaftar={showBelumDaftar} />
            <Login showLogin={showLogin} closeLogin={handleLogin} login={handleIsLogin} loginMove={handleMoveLogin} />
            <Register showRegister={showRegister} closeRegister={handleRegister} register={handleMoveRegister} />
        </div>
    )
}
