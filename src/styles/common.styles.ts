/** dynamic components */
import styled from 'styled-components'
import tw from 'twin.macro'
import { motion } from 'framer-motion'

export const MotionDiv = styled(motion.div).attrs({
  layout: true,
  transition: { duration: 0.3 },
})``

export const MotionText = styled(motion.span).attrs({
  layout: true,
  transition: { duration: 0.3 },
})``

export const MotionRow = styled(MotionDiv)`
  ${tw`flex flex-row`}
`

export const MotionCol = styled(MotionDiv)`
  ${tw`flex flex-col`}
`

export const MotionImage = styled(motion.img)``

export const MotionBtn = styled(motion.button)`
  ${tw``}
`

export const MotionModal = styled(motion.div).attrs({
  layout: true,
  initial: { y: 500 },
  animate: { y: 0 },
  transition: {
    duration: 0.5,
  },
})``