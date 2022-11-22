import Image from 'next/image'
import Section from '@/components/layout/section'
import Navigation from '@/components/layout/navigation'

import vercelLogo from '@/public/vercel.svg'

function Home () {
  return (
    <Section>
      <h1>Home</h1>
      <Navigation />

      <p>This is the Home Page</p>

      <Image
        src={vercelLogo}
        alt="Vercel Logo"
        width={72}
        height={16} />
    </Section>
  )
}

export default Home
