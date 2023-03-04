import Logo from '../Logo'
import Scene from '../Scene'
import * as S from './styles'

const CoverContainer = ({ ...props }) => {
  return (
    <S.Container {...props}>
      <Scene>
        <Logo />
      </Scene>
    </S.Container>
  )
}

export default CoverContainer
