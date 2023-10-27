import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesPros } from '@routes/app.routes'
import {
  VStack,
  Text,
  Icon as IconNativeBase,
  HStack,
  Heading,
  Image,
  Box,
  ScrollView,
} from 'native-base'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

import BodySvg from '@assets/imgs/body.svg'
import SeriesSvg from '@assets/imgs/series.svg'
import RepetitionsSvg from '@assets/imgs/repetitions.svg'
import { Button } from '@components/Button'

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesPros>()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <IconNativeBase
            as={Icon}
            name="arrow-back"
            color="green.500"
            size={6}
          />
        </TouchableOpacity>
        <HStack
          justifyContent={'space-between'}
          mt={4}
          mb={8}
          alignItems={'center'}>
          <Heading color="gray.200" fontSize="lg">
            Puxada frontal
          </Heading>
          <HStack alignItems="center">
            <BodySvg />
            <Text color="gray.200" ml={1} textTransform={'capitalize'}>
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>
      <ScrollView>
        <VStack p={8}>
          <Image
            w="full"
            h={80}
            source={{
              uri: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_300x200.jpg',
            }}
            alt="Nome do exercício"
            mb={3}
            resizeMode="cover"
            rounded={'lg'}
          />

          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb={6}
              mt={5}>
              <HStack>
                <SeriesSvg />
                <Text color="gray.200" ml={1} textTransform={'capitalize'}>
                  3 séries
                </Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />
                <Text color="gray.200" ml={1} textTransform={'capitalize'}>
                  12 repetiçoes
                </Text>
              </HStack>
            </HStack>
            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
