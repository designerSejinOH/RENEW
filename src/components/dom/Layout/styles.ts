import styled from 'styled-components'
import tw from 'twin.macro'
import { MotionDiv } from '@/styles/common.styles'

export const Wrap = styled(MotionDiv)`
  ${tw`grid grid-cols-2 grid-rows-layout border w-full h-full bg-white `}
`

export const Main = styled(MotionDiv)`
  ${tw`h-full row-span-3 bg-gray-900 border `}
`

export const Header = styled(MotionDiv)`
  ${tw`h-full bg-gray-700 border text-white font-bold text-2xl flex justify-center items-center`}
`
export const Content = styled(MotionDiv)`
  ${tw`h-full bg-gray-500 border grid grid-cols-1 grid-rows-content`}
`
export const Aside = styled(MotionDiv)`
  ${tw`h-full bg-gray-400 border`}
`
export const Bside = styled(MotionDiv)`
  ${tw`h-full bg-gray-400 border`}
`

export const Footer = styled(MotionDiv)`
  ${tw`h-full border bg-gray-700`}
`
