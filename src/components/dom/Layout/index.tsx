import * as S from './styles'

const LayoutContainer = ({ ...props }) => {
  return (
    <S.Wrap>
      <S.Main></S.Main>
      <S.Header>SEJIN OH</S.Header>
      <S.Content>
        <S.Aside></S.Aside>
        <S.Bside></S.Bside>
      </S.Content>
      <S.Footer></S.Footer>
    </S.Wrap>
  )
}

export default LayoutContainer
