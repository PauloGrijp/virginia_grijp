import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import '../../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(0 0, 1% 0, 1% 100%, 0 100%)",
          },
        }}
        className="base-page-size"
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
