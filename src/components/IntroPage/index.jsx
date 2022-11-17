import { useRouter } from "next/router";
import { motion } from 'framer-motion'

import TypewriterComponent from "typewriter-effect";
import BackgroundVideo from "../BackgroundVideo";
import styles from './styles.module.scss'

export default function Intro() {
  const router = useRouter()

  function redirect() {
    router.push('/Home')
  }

  return (
    <div className={styles.intro}>
      <div className={styles.overlay}></div>
      <BackgroundVideo></BackgroundVideo>

      <div className={styles.content}>
      <TypewriterComponent
        onInit={(typewriter) => {
          typewriter
            .pauseFor(200)
            .typeString('<h1>Virgínia Grijp</h1>')
            .pauseFor(500)
            .typeString('<h3>Advocacia Familiar Extrajudicial</h3>')
            .start();
        }}
        options={{
          cursor: '',
          delay: 50,
        }}
      />
       <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 3.8,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <p>A solução dos seus problemas familiares com celeridade, comodidade e segurança jurídica</p>    
        </motion.div>
     
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 4.9,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <button onClick={redirect}>
            Entrar
          </button>            
        </motion.div>
      </div>
    </div>
  )
}