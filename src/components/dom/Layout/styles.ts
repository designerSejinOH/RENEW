import styled from 'styled-components'
import tw from 'twin.macro'
import { MotionDiv } from '@/styles/common.styles'

export const Wrap = styled(MotionDiv)`
  ${tw`grid grid-cols-1 grid-rows-mobile md:grid-cols-2 md:grid-rows-layout rounded-2xl w-full h-screen text-white`}
`

export const Main = styled(MotionDiv)`
  ${tw`order-2 md:order-1 row-span-1 md:row-span-3 border-2 border-white m-2 rounded-2xl`}
`

export const Header = styled(MotionDiv)`
  ${tw`order-1 md:order-2 border-2 border-white rounded-2xl m-2 px-10 flex justify-center md:justify-start items-center font-['hel-bd'] text-2xl`}
`
export const Content = styled(MotionDiv)`
  ${tw`order-3 grid grid-cols-1 grid-rows-content `}
`
export const Aside = styled(MotionDiv)`
  ${tw`border-2 border-white m-2 rounded-2xl`}
`
export const Bside = styled(MotionDiv)`
  ${tw`border-2 border-white m-2 rounded-2xl`}
`

export const Footer = styled(MotionDiv)`
  ${tw`order-4 border-2 border-white m-2 rounded-2xl font-['hel-bd'] text-2xl `}
`
