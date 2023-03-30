import { useState } from 'react'
import PropTypes from 'prop-types'

import { StaticPublicPostComponent } from '@/features/posts'
import { timestampToDateString } from '@/utils/firestoreutils'

import { getPublishedPostsByCountry } from '@/services/posts'
import countries from '@/data/countries_lowercase'

export async function getStaticPaths () {
  const paths = countries.map(country => ({
    params: {
      id: country
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const post = await getPublishedPostsByCountry(params.id)
  post[0].date_created = timestampToDateString(post[0].date_created)
  post[0].date_updated = timestampToDateString(post[0].date_updated)

  return {
    props: {
      post: post[0],
    }
  }
}

function Profiles ({ post }) {
  const [country, setCountry] = useState(countries[1])

  const handleSelectCountry = (e) => {
    const { value } = e.target
    const countryValue = value?.toLowerCase()

    if (countryValue) {
      setCountry(value)
    }
  }

  return (
    <StaticPublicPostComponent
      post={post}
      country={country}
      handleSelectCountry={handleSelectCountry}
    />
  )
}

Profiles.propTypes = {
  post: PropTypes.array
}

export default Profiles
