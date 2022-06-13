import {Grid, GridItem, Text, Button} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {FaHtml5, FaCss3Alt, FaSass, FaReact} from 'react-icons/fa';
import {SiChakraui, SiRedux} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const About = () => {
    return ( 
        <Grid
        spacing='3rem'
        w={['90%', '90%', '80%', '75%']}
        gridTemplateColumns={['1fr', '1fr', '1fr', 'repeat(2,1fr)']}
        alignItems='start'
        justifyContent='center'
        m='auto'
        my='3rem'
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
            <GridItem
            as={motion.div}
            initial={{
                opacity : 0
            }}
            whileInView={{
                opacity : 1
            }}
            gridColumn='1/ span 2'
            >
                <Text
                variant='gradientHeading'
                textAlign='center'
                >
                    About me
                </Text>
            </GridItem>

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
                variant='regularSubheading'
                my='1rem'
                as={motion.h2}
                initial={{
                    opacity : 0
                }}
                whileInView={{
                    opacity : 1
                }}
                >
                    I am a frontend developer learning new skills at light-speed
                </Text>
                <Text
                variant='para'
                textAlign={['center', 'center', 'left', 'left' ]}
                as={motion.h2}
                initial={{
                    opacity : 0
                }}
                whileInView={{
                    opacity : 1
                }}
                >
                    I make jaw-dropping UI for your web-apps and websites. I specialise in React.js and Next.js. I am always experimenting with new front-end frameworks like chakra-ui and vue.js to be industry relevant. I am also continously learning about new technologies like Blockchain development, web3, defi etc. to provide best service possible.
                </Text>
            </GridItem>

            <GridItem
            gridColumnStart={['1', '1', '2', '2']}
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
                <Grid
                gridTemplateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)']}
                gap='1rem'
                w='70%'
                m='auto'
                >
                <GridItem
                gridColumn='1/ span 2'
                >
                <Text
                variant='regularSubheading'
                textAlign='center'
                my='1rem'
                as={motion.h2}
                initial={{
                    opacity : 0
                }}
                whileInView={{
                    opacity : 1
                }}
                >
                    My Skills
                </Text>
                </GridItem>
                <GridItem>
                <Button
                variant='solid'
                bgGradient='linear(to-r, primaryLight, secondaryLight)'
                leftIcon={<FaHtml5 />}
                w='90%'
                >
                    Html5
                </Button>
                </GridItem>

                <GridItem>
                <Button
                variant='solid'
                bgGradient='linear(to-r, primaryLight, secondaryLight)'
                leftIcon={<FaHtml5 />}
                w='90%'
                >
                    CSS3
                </Button>
                </GridItem>

                <GridItem>
                <Button
                variant='solid'
                bgGradient='linear(to-r, primaryLight, secondaryLight)'
                leftIcon={<FaSass />}
                w='90%'
                >
                    Sass
                </Button>
                </GridItem>

                <GridItem>
                <Button
                variant='solid'
                bgGradient='linear(to-r, primaryLight, secondaryLight)'
                leftIcon={<SiChakraui />}
                w='90%'
                >
                    Chakra-ui
                </Button>
                </GridItem>

                <GridItem>
                <Button
                variant='solid'
                bgGradient='linear(to-r, primaryLight, secondaryLight)'
                leftIcon={<FaReact />}
                w='90%'
                >
                    React.js   
                </Button>
                </GridItem>

                <GridItem>
                <Button
                variant='solid'
                bgGradient='linear(to-r, primaryLight, secondaryLight)'
                leftIcon={<TbBrandNextjs />}
                w='90%'
                >
                    Next.js
                </Button>
                </GridItem>
                </Grid>
            </GridItem>
        </Grid>
     );
}
 
export default About;