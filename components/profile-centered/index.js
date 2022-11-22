import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import SubContentText from '@/components/common/layout/subtcontenttext'
import DonutChart from '@/components/common/ui/charts/donut'
import BarChart from '@/components/common/ui/charts/bar'
import LineGraph from '@/components/common/ui/charts/line'
import ArticleText from '@/components/common/layout/articletext'
import CountryList from '@/domain/profile/countrylist'
import styles from './styles'

function ProfileCenteredComponent ({
  country,
  countries,
  textData,
  donutData,
  barData,
  handleSelectCountry
}) {
  return (
    <Container maxWidth='lg'>
      <Grid container sx={styles.container}>
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
        <Grid item xs={12}>
          <Typography variant="h4">
          Climate Change Scenarios
          </Typography>
        </Grid>

        <Grid item xs={12} sm={7}>
          <SubContentText
            {...textData[0]}
            title='Climate Risks'
          />
        </Grid>

        <Grid item xs={12} sm={5}>
          <BarChart
            {...barData}
            width={300}
            height={300}
          />
        </Grid>

        {/** Climate Change Scenarios Section  */}
        <Grid item xs={12} sm={7}>
          <SubContentText
            {...textData[0]}
            title='Climate Change and Vulnerability'
          />
        </Grid>

        <Grid item xs={12} sm={5}>
          <LineGraph
            {...barData}
            width={300}
            height={300}
          />
        </Grid>

        {/** Other Lengthy Text Section */}
        {textData.map((item, index) => {
          if (index >= 1) {
            return <Grid item xs={12} key={index}>
              <ArticleText {...item} />
            </Grid>
          }
        })}
      </Grid>
    </Container>
  )
}

export default ProfileCenteredComponent
