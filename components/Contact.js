import {Box, Grid, GridItem, Button, Text, Link} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import {GrMail, GrTwitter, GrGithub, GrLinkedin} from 'react-icons/gr'

const Contact = () => {
    return ( 
        <Grid
        spacing='4rem'
        w={['60%', '60%', '50%', '50%']}
        gridTemplateColumns={['repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(4,1fr)', 'repeat(4,1fr)']}
        alignItems='center'
        justifyContent='center'
        m='auto'
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
            colSpan={[2, 2, 4, 4]}
            >
            <Text
            variant='gradientHeading'
            textAlign='center'
            >
                Contact
            </Text>
            </GridItem>
            <GridItem
            m='auto'
            >
                <Link>
                <Button
                my='1rem'
                bgGradient='linear(to-r, primaryLight, secondaryLight)'
                color='black'
                borderRadius={16}
                h='3.5rem'
                fontSize={20}
                leftIcon={<GrTwitter/>}
                >
                    Twitter
                </Button>
                </Link>
            </GridItem> 

            <GridItem
            m='auto'
            >
                <Link>
                <Button
                my='1rem'
                bgGradient='linear(to-r, primaryLight, secondaryLight)'
                color='black'
                borderRadius={16}
                h='3.5rem'
                fontSize={20}
                leftIcon={<GrLinkedin/>}
                >
                    LinkedIn
                </Button>
                </Link>
            </GridItem>

            <GridItem
            m='auto'
            >
                <Link>
                <Button
                my='1rem'
                bgGradient='linear(to-r, primaryLight, secondaryLight)'
                color='black'
                borderRadius={16}
                h='3.5rem'
                fontSize={20}
                leftIcon={<GrMail/>}
                >
                    Mail
                </Button>
                </Link>
            </GridItem>

            <GridItem
            m='auto'
            >
                <Link>
                <Button
                my='1rem'
                bgGradient='linear(to-r, primaryLight, secondaryLight)'
                color='black'
                borderRadius={16}
                h='3.5rem'
                fontSize={20}
                leftIcon={<GrGithub/>}
                >
                    Github
                </Button>
                </Link>
            </GridItem>
            
            
        </Grid>
     );
}
 
export default Contact;