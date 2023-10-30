import {
  HStack,
  Heading,
  Text,
  VStack,
  Icon as IconNativeBase,
} from 'native-base'
import { UserPhoto } from './UserPhoto'
import Icon from '@expo/vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'
import { useAuth } from '@hooks/useAuth'
import defaultImage from '@assets/imgs/defaultIImage.png'

export function HomeHeader() {
  const { user, signOut } = useAuth()

  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems={'center'}>
      <UserPhoto
        source={user.avatar ? { uri: user.avatar } : defaultImage}
        alt="Image do usuário"
        mr={4}
        size={16}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize={'md'}>
          Olá,
        </Text>
        <Heading color="gray.100" fontSize={'md'} fontFamily={'heading'}>
          {user.name}
        </Heading>
      </VStack>
      <TouchableOpacity onPress={signOut}>
        <IconNativeBase as={Icon} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  )
}
