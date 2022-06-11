import {Grid, GridItem, Text, Image} from '@chakra-ui/react'
import { motion } from 'framer-motion';

const Hero = () => {
    return ( 
        <Grid
        spacing='3rem'
        w={['90%', '90%', '80%', '75%']}
        gridTemplateColumns={['1fr', '1fr', 'repeat(2,1fr)', 'repeat(2,1fr)']}
        alignItems='center'
        m='auto'
        >
            <GridItem
            as={motion.div}
            initial={{
                opacity : 0
            }}
            whileInView={{
                opacity : 1
            }}
            transition={{
                staggeredChilren : 0.3,
                delayChildren : 0.5
            }}
            >
                <Text
                variant='gradientHeading'
                as={motion.h1}
                initial={{
                    opacity : 0
                }}
                whileInView={{
                    opacity : 1
                }}
                >
                    Pranav Kumar
                </Text>
                <Text
                variant='regularSubheading'
                as={motion.h2}
                initial={{
                    opacity : 0
                }}
                whileInView={{
                    opacity : 1
                }}
                >
                    I create amazing web experiences for your users
                </Text>
            </GridItem>
            <GridItem
            m='1rem'
            >
                <Image
                src='/man-sitting.png'
                m='auto'
                as={motion.img}
            initial={{
                opacity : 0
            }}
            whileInView={{
                opacity : 1
            }}
            transition={{
                staggeredChilren : 0.3,
                delayChildren : 0.3
            }}
                />
            </GridItem>
        </Grid>
     );
}
 
export default Hero;