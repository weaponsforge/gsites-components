import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Section from '@/components/layout/section'
import Navigation from '@/components/layout/navigation'

import vercelLogo from '@/public/vercel.svg'

function Cafe () {
  return (
    <Section>
      <Typography variant='h3'>Cafe</Typography>
      <Navigation />

      <p>This is the Cafe Page</p>

      <Image
        src={vercelLogo}
        alt="Vercel Logo"
        width={72}
        height={16} />
    </Section>
  )
}

export default Cafe
