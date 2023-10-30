import { ReactNode, createContext, useState } from 'react'

import { UserDTO } from '@dtos/UserDTO'

export type AuthContextDataProps = {
  user: UserDTO
}

type AuthContextProviderProps = {
  children: ReactNode
}

const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({
    id: '1',
    name: 'Lucas',
    email: 'luksinocencio@mail.com',
    avatar: 'avatar.png',
  } as UserDTO)

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
