import styles from '../styles/Home.module.css';
import {VStack, Box} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact'
export default function Home() {
  return (
    <VStack
    spacing={['1rem', '1rem', '2rem', '3rem']}
    bgGradient='linear(to-tr, primaryDark, secondaryDark)'
    bgImage="url('./Hexagon.svg')"
    bgAttachment='fixed'
    backdropFilter='auto' backdropBlur='8px'
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </VStack>
  )
}
