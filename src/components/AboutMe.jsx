import { AnimatePresence, motion } from "framer-motion"
import "../styles/aboutme.css"
import sparkle from "../assets/deco/sparkle-outline.png"
import Tabs from "./Tabs"

const AboutMe = () => {
  return (

    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <section className="main_page">
          <div className="line_left">
            <div className="line_about_me "></div>
            <p className="letter lt_1">MA</p>
            <div className="line_about_me "></div>
            <p className="letter lt_2">AV</p>
          </div>

          <div className="main_division">
            <section className="about_page">
              <div className="title_page">About me</div>
              <div className="circle_bg"></div>
              <img src={sparkle} className="stars_bg" />
            </section>

            <section className="tabs_description">
              <Tabs />
            </section>
          </div>
        </section>

      </motion.div>
    </AnimatePresence>
  )
}

export default AboutMe