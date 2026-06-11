import { AnimatePresence, motion } from "framer-motion"
import sparkle_1 from "../assets/deco/one-sparkle.png"
import "../styles/work.css"
import Carousel from "./Carousel"

const Work = () => {

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >

        <section className="main_work">

          <div className="title_section">
            <section className="title_page_1">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}>
                Projects
              </motion.h2>
              <h1>Projects</h1>
            </section>

            <div className="deco_right">
              <img src={sparkle_1} className="sparkle_img" />
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>

          <div className="tab_work">
            <Carousel />
          </div>
        </section>

      </motion.div>

    </AnimatePresence>
  )
}

export default Work