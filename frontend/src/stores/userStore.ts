import { create } from 'zustand'
import type { User } from '@shared/types/user'

interface UserState {
    user: User | null
    fetchUser: (id: string) => Promise<void>
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    fetchUser: async (id: string) => {
        const res = await fetch(`http://localhost:3001/users/${id}`, {
            cache: 'no-store',
        })
        if (!res.ok) {
            throw new Error('Failed to fetch user')
        }
        const user = await res.json()
        set({ user })
    },
}))