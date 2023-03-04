import CoverContainer from '@/components/canvas/Cover'
import LayoutContainer from '@/components/dom/Layout'
import Logo from '@/components/canvas/Logo'

export default function Page(props) {
  const handleClickScroll = () => {
    console.log('clicked')
    const element = document.getElementById('section-1')
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className='w-screen h-screen' onClick={handleClickScroll}>
        <CoverContainer />
      </div>
      <div className='w-screen h-fit' id='section-1'>
        <LayoutContainer title='Graphic Design'>
          <Logo />
        </LayoutContainer>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'SEJIN OH' } }
}
