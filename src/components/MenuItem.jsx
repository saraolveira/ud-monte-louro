import { motion, useCycle } from "framer-motion"
const MenuItem = ({href, text}) => {
  const items = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }

  return (
    <motion.div variants={items}>
              <a className="transition-colors duration-300 hover:text-fountain-blue-400" href={href}>{text}</a>
    </motion.div>
  )
}

export default MenuItem
