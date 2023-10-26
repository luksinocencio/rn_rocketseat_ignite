import { HomeHeader } from '@components/HomeHeader'
import { Group } from '@components/Group'
import { VStack, Text, HStack, FlatList, Heading } from 'native-base'
import { useState } from 'react'

export function Home() {
  const [groups, setGroups] = useState([
    'Costas',
    'Bícepcs',
    'Tríceps',
    'Ombro',
  ])
  const [groupSelected, setGroupSelected] = useState('costas')
  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxHeight={10}
      />
      <VStack flex={1} px={8}>
        <HStack justifyContent={'space-between'} mb={5}>
          <Heading color={'gray.200'} fontSize={'md'}>
            Exercicios
          </Heading>
          <Text color="gray.200" fontSize={'md'}>
            4
          </Text>
        </HStack>
      </VStack>
    </VStack>
  )
}
