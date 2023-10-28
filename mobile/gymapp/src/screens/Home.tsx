import { HomeHeader } from '@components/HomeHeader'
import { Group } from '@components/Group'
import { VStack, Text, HStack, FlatList, Heading } from 'native-base'
import { useState } from 'react'
import { ExerciseCard } from '@components/ExerciseCard'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesPros } from '@routes/app.routes'

export function Home() {
  const [groups, setGroups] = useState([
    'Costas',
    'Bícepcs',
    'Tríceps',
    'Ombro',
  ])

  const [exercises, setExercise] = useState([
    'Puxada frontal',
    'Remada curvada',
    'Remada unilateral',
    'Levantamento terra',
  ])

  const [groupSelected, setGroupSelected] = useState('Costas')

  const navigation = useNavigation<AppNavigatorRoutesPros>()

  function handleOpenExerciseDetails() {
    navigation.navigate('exercise')
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={
              String(groupSelected).toLocaleUpperCase() ===
              String(item).toLocaleUpperCase()
            }
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxHeight={10}
        minHeight={10}
      />
      <VStack flex={1} px={8}>
        <HStack justifyContent={'space-between'} mb={5}>
          <Heading color={'gray.200'} fontSize={'md'} fontFamily={'heading'}>
            Exercicios
          </Heading>
          <Text color="gray.200" fontSize={'md'}>
            4
          </Text>
        </HStack>
        <FlatList
          data={exercises}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <ExerciseCard onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 10 }}
        />
      </VStack>
    </VStack>
  )
}
