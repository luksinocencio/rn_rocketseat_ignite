import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'
import { VStack, Text, ScrollView, Center } from 'native-base'

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          <UserPhoto
            source={{
              uri: 'https://gravatar.com/avatar/c8b50b95553604091c31454162752a35?s=400&d=robohash&r=x',
            }}
            alt="Foto do usuário"
            size={33}
          />
        </Center>
      </ScrollView>
    </VStack>
  )
}
