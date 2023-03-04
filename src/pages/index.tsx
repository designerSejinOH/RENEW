import CoverContainer from '@/components/canvas/Cover'
import LayoutContainer from '@/components/dom/Layout'

export default function Page(props) {
  return (
    <>
      <CoverContainer />
      <LayoutContainer />
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
