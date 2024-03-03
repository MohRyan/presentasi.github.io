import * as React from 'react'
import { Login } from './Login'
import { Button } from '@/components/Button'

export const Home = () => {
    const [status, setStatus] = React.useState<boolean>(false)

    const [users, setUsers] = React.useState([])
    const [admin, setAdmin] = React.useState([])


    const handleStatus = () => {
        setStatus(!status)
    }

    return (
        <div className='grid w-screen h-screen xl:grid-cols-2'>
            <div className='hidden object-cover h-screen xl:block'>
                <img src="https://pbs.twimg.com/media/GGq2h-gbUAALu8j.jpg:large" alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-10'>
                    {
                        !status ? <Button title="Users" onClick={handleStatus} hover="text-white hover:opacity-70" /> : <Button onClick={handleStatus} title="Admin" bg="bg-second" hover="text-white hover:opacity-70" />
                    }

                </div>
                <Login status={status} handleStatus={handleStatus} />
            </div>
        </div>
    )
}
