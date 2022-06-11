import styles from '../styles/Home.module.css';
import {VStack, Box} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About'
export default function Home() {
  return (
    <VStack
    spacing={['1rem', '1rem', '2rem', '3rem']}
    bgGradient='linear(to-tr, primaryDark, secondaryDark)'
    bgAttachment='fixed'
    >
      <Navbar />
      <Hero />
      <About />
    </VStack>
  )
}
