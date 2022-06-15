import {Box, Image, Text, Button, Flex, Tag, Link, useDisclosure} from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import {motion} from 'framer-motion'

const Card = ({image, name, about, techStack, site, git}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return ( 
    <Box
    w={['280px', '300px', '300px', '300px']}
    m='auto'
    borderRadius={12}
    overflow='hidden'
    paddingBottom='0.5rem'
    bgGradient='linear(to-r, primaryLight, secondaryLight)'
    >
      <Image 
      w={['280px', '300px', '300px', '300px']}
      h='150px'
      src={image}
      marginBottom='1rem'
      as={motion.img}
      whileHover={{
        scale : 1.07
      }} 
      />
      <Text
      variant='regularSubheading'
      color='black'
      fontSize={['20px', '20px', '25px', '25px']}
      mx='1rem'
      textAlign='center'
      >
        {name}
      </Text>
      <Flex
      alignItems='center'
      justifyContent='center'
      >
      <Button
      my='0.5rem'
      onClick={onOpen}
      >
        Show more
      </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
            m='0.5rem'
            borderRadius={12}
            overflow='hidden'
            >
            <Image src={image}/>
            </Box>
            <Box
            m='0.5rem'
            >
            {about}
            </Box>
            <Box>
            {techStack.map(tech => {
              return (
                <Tag
                key={tech}
                m='0.5rem'
                bg='secondaryLight'
                >
                  {tech}
                </Tag>
              )
            })}
            </Box>
            <Flex
            m='0.5rem'
            justifyContent='center'
            >
            <Link href={site}>
              <Button
              bg='gray.300'
              mx='1rem'
              >
                Live site
              </Button>
            </Link>
            <Link href={git}>
              <Button
              bg='gray.300'
              mx='1rem'
              >
                Github
              </Button>
            </Link>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
   );
}
 
export default Card;