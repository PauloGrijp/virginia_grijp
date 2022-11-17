import { useEffect, useState } from 'react';
import styles from './styles.module.scss'


export default function BackgroundVideo() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])
  return (
    mounted && <div className={styles.container} >
      <video src="./background-hands-on.mp4" autoPlay loop muted>
      </video>
    </div>
  ) 
}