import {
  HStack,
  Heading,
  Image,
  VStack,
  Text,
  Icon as IconNativeBase,
} from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import Icon from '@expo/vector-icons/Entypo'

type Props = TouchableOpacityProps & {
  onPress: () => void
}

export function ExerciseCard({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <HStack
        bg="gray.500"
        alignItems="center"
        p={2}
        pr={4}
        rounded="md"
        mb={3}>
        <Image
          source={{
            uri: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_300x200.jpg',
          }}
          alt="Image do execício"
          w={16}
          h={16}
          rounded={'md'}
          mr={4}
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading fontSize="lg" color="white" fontFamily={'heading'}>
            Remada unilateral
          </Heading>
          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 séries x 12 repetiçoes
          </Text>
        </VStack>
        <IconNativeBase
          as={Icon}
          name="chevron-thin-right"
          color="gray.300"
          size={4}
        />
      </HStack>
    </TouchableOpacity>
  )
}
