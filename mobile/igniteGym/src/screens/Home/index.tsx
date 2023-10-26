import { HomeHeader } from '@components/HomeHeader'
import { Group } from '@components/Group'
import { VStack, Text } from 'native-base'

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <Group name="costas" />
    </VStack>
  )
}
