import Typography from '@mui/material/Typography'
import Section from '@/components/common/layout/section'
import Navigation from '@/components/common/layout/navigation'

function About () {
  return (
    <Section>
      <Typography variant='h3'>About</Typography>
      <Navigation />

      <p>This is the About Page</p>
    </Section>
  )
}

export default About
