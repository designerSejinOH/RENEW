import styled from 'styled-components'
import tw from 'twin.macro'
import { MotionDiv } from '@/styles/common.styles'

export const Container = styled.div<{
  coverOnOff: boolean
}>`
  ${tw`flex flex-col items-center justify-center w-full h-full bg-black`}
  ${({ coverOnOff }) => !coverOnOff && tw`hidden transition-all duration-500`}
`
