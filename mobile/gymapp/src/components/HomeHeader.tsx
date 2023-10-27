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

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems={'center'}>
      <UserPhoto
        source={{
          uri: 'https://gravatar.com/avatar/c8b50b95553604091c31454162752a35?s=400&d=robohash&r=x',
        }}
        alt="Image do usuário"
        mr={4}
        size={16}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize={'md'}>
          Olá,
        </Text>
        <Heading color="gray.100" fontSize={'md'}>
          Lucas
        </Heading>
      </VStack>
      <TouchableOpacity>
        <IconNativeBase as={Icon} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  )
}
