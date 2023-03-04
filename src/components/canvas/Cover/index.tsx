import { useState } from 'react'
import Logo from '../Logo'
import Scene from '../Scene'
import * as S from './styles'

const CoverContainer = ({ ...props }) => {
  const [coverOnOff, setCoverOnOff] = useState(true)

  return (
    <S.Container coverOnOff={coverOnOff}>
      <Scene {...props}>
        <Logo
          onClick={() => {
            setCoverOnOff(false)
          }}
        />
      </Scene>
    </S.Container>
  )
}

export default CoverContainer
