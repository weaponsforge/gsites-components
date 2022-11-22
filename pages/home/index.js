import Image from 'next/image'
import Typography from '@mui/material/typography'
import Section from '@/components/common/layout/section'
import Navigation from '@/components/common/layout/navigation'

import vercelLogo from '@/public/vercel.svg'

function Home () {
  return (
    <Section>
      <Typography variant='h3'>Home</Typography>
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
