import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import SubContentText from '@/components/common/layout/subtcontenttext'
import DonutChart from '@/components/common/ui/charts/donut'
import BarChart from '@/components/common/ui/charts/bar'
import LineGraph from '@/components/common/ui/charts/line'
import ArticleText from '@/components/common/layout/articletext'
import CountryList from '@/domain/profile/countrylist'
import Notification from '@/components/common/ui/notification'
import AppCard from '@/components/common/ui/appcard'
import styles from './styles'

import ImgClimateRisks from '@/assets/images/figures/climate_risks_img.png'
import ImgVulnerability from '@/assets/images/figures/vulnerability_img.png'

function ProfileCenteredComponent ({
  country,
  countries,
  state,
  textData,
  donutData,
  barData,
  handleSelectCountry
}) {
  return (
    <Container maxWidth='lg'>
      {state.msg !== '' &&
        <Notification
          isOpen
          message={state.msg}
          severity='error'
        />
      }

      {state.loading
        ? <AppCard>Loading please wait...</AppCard>
        : <Grid container sx={styles.container}>
          <Grid item xs={12} sx={{ marginBottom: '48px' }}>
            <Typography variant="h3">
                Climate Profile
              {country !== '' && ` - ${country}`}
            </Typography>

            <CountryList
              countries={countries}
              handleSelectCountry={handleSelectCountry}
            />
          </Grid>

          {/** Greehouse Gas (GHG) Emmissions Section */}
          <Grid item xs={12} sm={5}>
            <DonutChart
              {...donutData}
              width={300}
              height={300}
            />
          </Grid>

          <Grid item xs={12} sm={7}>
            <SubContentText {...textData[0]} />
          </Grid>

          {/** Climate Risks Section */}
          <Grid item xs={12} sx={{ marginTop: '40px' }}>
            <Typography variant="h4">
              Climate Change Scenarios
            </Typography>
          </Grid>


          {country !== 'Armenia'
            ? <Grid item xs={12} sm={7}>
              <SubContentText
                {...textData[1]}
              />
            </Grid>
            : <Grid item xs={12}>
              <SubContentText
                {...textData[1]}
              />
              <Box sx={{ textAlign: 'center' }}>
                <Image
                  src={ImgClimateRisks}
                  alt="Climate Risks"
                  width={561}
                />
              </Box>
            </Grid>
          }

          <Grid item xs={12} sm={5} sx={styles.imageGrid}>
            {country === 'Armenia'
              ? <div />
              : <BarChart
                {...barData}
                width={300}
                height={300}
              />
            }
          </Grid>

          {/** Climate Change Scenarios Section  */}
          {country !== 'Armenia'
            ? <Grid item xs={12} sm={7}>
              <SubContentText
                {...textData[2]}
              />
            </Grid>
            : <Grid item xs={12}>
              <SubContentText
                {...textData[2]}
              />
            </Grid>
          }

          <Grid item xs={12} sm={5} sx={styles.imageGrid}>
            {country === 'Armenia'
              ? <div />
              : <LineGraph
                {...barData}
                width={300}
                height={300}
              />
            }
          </Grid>

          {/** Other Lengthy Text Section */}
          {textData.map((item, index) => {
            if (index >= 3) {
              const picture = (item.key === 'impacts' && country === 'Armenia')
                ? {
                  picture: ImgVulnerability,
                  pictureAlt: item.title,
                  pictureSize: { width: 761 }
                }
                : null

              return <Grid item xs={12} key={index} sx={styles.imgVulnerability}>
                <ArticleText
                  {...item}
                  {...picture}
                />
              </Grid>
            }
          })}
        </Grid>
      }
    </Container>
  )
}

export default ProfileCenteredComponent
