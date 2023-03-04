import * as S from './styles'
import Scene from '@/components/canvas/Scene'

const LayoutContainer = ({ children, ...props }) => {
  return (
    <S.Wrap>
      <S.Main>
        <Scene>{children}</Scene>
      </S.Main>
      <S.Header>{props.title}</S.Header>
      <S.Content>
        <S.Aside></S.Aside>
        <S.Bside></S.Bside>
      </S.Content>
      <S.Footer></S.Footer>
    </S.Wrap>
  )
}

export default LayoutContainer
