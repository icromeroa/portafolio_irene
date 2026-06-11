import { AnimatePresence, motion } from "framer-motion"
import "../styles/contact.css"

import icon_1 from "../assets/icons/mail-outline.svg";
import icon_2 from "../assets/icons/logo-linkedin.svg";
import icon_3 from "../assets/icons/logo-github.svg";
import icon_4 from "../assets/icons/logo-gitlab.svg";

const Contact = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="main_contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
      >
        <h1 className="title_contact">
          Contact
        </h1>

        <h2 className="subtitle_contact">
          LET'S CREATE SOMETHING AMAZING TOGETHER
        </h2>

        <div className="social_media">
          <div className="box">
            <img src={icon_1} alt="" className="icon" />
            <div className="info_media">
            <h2>Email</h2>
            <p className="username">rmei.v1754@gmail.com</p>
            </div>
          </div>
          <div className="box">
            <img src={icon_2} alt="" className="icon" />
            <div className="info_media">
              <h2>Linkedin</h2>
            <p className="username">rmei1754</p>
            </div>
          </div>
          <div className="box">
            <img src={icon_3} alt="" className="icon" />
            <div className="info_media">
              <h2>GitHub</h2>
            <p className="username">rmeiv1754/icromeroa</p>
            </div>
          </div>
          <div className="box">
            <img src={icon_4} alt="" className="icon" />
            <div className="info_media">
              <h2>GitLab</h2>
            <p className="username">rmeiv1754</p>
            </div>
          </div>
        </div>

      </motion.div>
    </AnimatePresence>
  )
}

export default Contact