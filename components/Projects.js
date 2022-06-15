import {Grid, GridItem, Text} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import Card from './Card';

const Projects = () => {
    return ( 
        <Grid
        gap='3rem'
        w={['90%', '90%', '80%', '75%']}
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
            colSpan={[1, 1, 3, 3]}
            >
                <Text
                variant='gradientHeading'
                textAlign='center'
                >
                    Projects
                </Text>
            </GridItem>

            <GridItem
            colSpan={1}
            >
                <Card 
                name='Cointrail-crypto tracking application'
                image='/cointrail.png'
                about='Uses 3rd party API to track the top 10 coins in the market. Explains common cryptocurrency terminologies to get started with trading cryptocurrencies'
                techStack={['Reactjs', 'CSS3', 'React Hooks', '3rd Party API']}
                site='cointrail.netlify.app'
                git='https://github.com/codantes/crypto-tracking-webapp'
                />
            </GridItem>

            <GridItem
            colSpan={1}
            >
                <Card 
                name='Strength-workout application'
                image='/strength.png'
                about='Recommends exercises based on your equipment preference and fitness level with proper guidance.Made for beginners and intermediates to make their workouts easier.'
                techStack={['Reactjs', 'CSS3', 'React Hooks']}
                site='strength-webapp.netlify.app'
                git='https://github.com/codantes/workout-app'

                />
            </GridItem>

            <GridItem
            colSpan={1}
            >
                <Card 
                name='Sneakers-ecommerce page'
                image='/sneaker.png'
                about='A product page for your sneakers, includes an image slider, a cart and a checkout box'
                techStack={['Reactjs', 'CSS3', 'React Hooks', 'Redux']}
                site='sneaker-webapp.netlify.app'
                git='https://github.com/codantes/ecom-product-page'
                />
            </GridItem>
        </Grid>
     );
}
 
export default Projects;