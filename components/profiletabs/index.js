import { useState } from 'react'
import Link from 'next/link'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import NavigationTabs from '@/domain/profiletabs/navigationtabs'
import TabPanel from '@/domain/profiletabs/tabpanel'
import Notification from '@/components/common/ui/notification'
import AppCard from '@/components/common/ui/appcard'

// Main tab sections
import GHGEmmissions from '@/domain/profiletabs/sections/ghgemmissions'
import ClimateRisks from '@/domain/profiletabs/sections/climaterisks'
import ClimateChange from '@/domain/profiletabs/sections/climatechange'
import ArticleText from '@/components/common/layout/articletext'
import styles from './styles'

function ProfileTabsComponent ({
  country,
  state,
  textData,
  donutData,
  barData,
}) {
  const [tab, setTab] = useState(0)

  return (
    <Grid container>
      {state.msg !== '' &&
        <Notification
          isOpen
          message={state.msg}
          severity='error'
        />
      }

      {/** Header */}
      <Grid item xs={12} sx={styles.headerContainer}>
        <Container maxWidth='lg' sx={styles.headerContent}>
          <Box sx={styles.headerTitle}>
            <Box>
              <Typography variant='h1'>
                {country}
              </Typography>
              <Typography variant='h4'>
                Country Profile
              </Typography>
            </Box>

            <Link href='/countries' passHref>
              <Button variant='outlined'>
                Countries
              </Button>
            </Link>
          </Box>

          <NavigationTabs
            onTabSelect={(newValue) => {
              setTab(newValue)
            }}
          />
        </Container>
      </Grid>


      <Grid item xs={12}>
        {state.loading
          ? <AppCard sx={{ maxWidth: '800px', margin: 'auto', marginTop: '32px' }}>
              Loading please wait...
          </AppCard>
          : <Container maxWidth='lg'>
            <TabPanel value={tab} index={0}>
              <GHGEmmissions
                donutData={donutData}
                textData={textData[0]}
              />
            </TabPanel>
            <TabPanel value={tab} index={1}>
              <ClimateRisks barData={barData} textData={textData[0]} />
            </TabPanel>
            <TabPanel value={tab} index={2}>
              <ClimateChange barData={barData} textData={textData[0]} />
            </TabPanel>
            <TabPanel value={tab} index={3}>
              <ArticleText {...textData[4]} />
            </TabPanel>
            <TabPanel value={tab} index={4}>
              <ArticleText {...textData[6]} />
            </TabPanel>
          </Container>
        }
      </Grid>
    </Grid>
  )
}

export default ProfileTabsComponent
