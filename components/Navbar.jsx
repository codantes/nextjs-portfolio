import { Flex, Text } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import Link from 'next/link'

const Navbar = () => {
    return ( 
        <Flex 
        w='100%' 
        py='1rem'
        px={['1rem', '1rem', '3rem', '3rem']} 
        >
          <Link 
          href='https://skillful-hippodraco-962.notion.site/Resume-999a1c60db4e4b1ba7097a659edc6c95'
          as={motion.a}
          whileHover={{scale : 1.1}}
          whileTap={{scale : 0.9}}
          fontSize={['2xl', '2xl', '2xl']}
          mx={3}
          >
            <Text
            variant='regularSubheading'
            >Resume</Text>
          </Link>
        </Flex >
     );
}
 
export default Navbar;