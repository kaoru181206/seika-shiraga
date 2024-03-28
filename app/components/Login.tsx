'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import type { Database } from '@/lib/database.types'
import Image from 'next/image'

const Login: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const supabase = createClientComponentClient<Database>()

    const handleSignIn = async () => {
        await supabase.auth.signInWithPassword({
            email,
            password,
        })
        router.refresh()
    }

    return (
        <>
            <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 bg-white rounded-md border max-w-sm lg:max-w-xl">
                    <div className="flex items-center justify-center">
                        <Image
                            className=""
                            height={530}
                            width={172}
                            src="/assets/seika-shiraga-logo-nav.png" alt="seika-shiraga-logo-nav"
                        />
                    </div>
                    <form className="mt-6">
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-[#121212BF]"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="block w-full px-4 py-2 mt-2 text-[#121212BF] bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-[#121212BF]"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="block w-full px-4 py-2 mt-2 text-[#121212BF] bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        <div className="mt-4">
                            <button
                                className="w-full px-4 py-2 tracking-wide text-[#FBFBFB] transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                                onClick={handleSignIn}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;