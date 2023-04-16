import { useEffect, useState, useRef, useCallback } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

import CardsGalleryComponent from './cardsgallery'

import useDownloadFile from '../../hooks/usedownloafile'
import { _getCardsByCategory } from '@/store/cards_gallery/cardGalleryThunks'


function CardsGallery () {
  const [pageTitle, setPageTitle] = useState('')
  const [selectedUrl, setSelected] = useState(null)
  const router = useRouter()
  const dispatch = useDispatch()
  const mounted = useRef(false)

  const { loading } = useDownloadFile({ fileUrl: selectedUrl })

  useEffect(() => {
    mounted.current = true

    return () => {
      mounted.current = false
    }
  }, [])

  useEffect(() => {
    if (!loading) {
      setSelected(null)
    }
  }, [loading])

  useEffect(() => {
    if (router.isReady && mounted.current) {
      const category = router.query.category
      const title = router.query?.title ?? ''

      if (category) {
        dispatch(_getCardsByCategory(category))
      }

      setPageTitle(title)
    }
  }, [dispatch, router.isReady, router.query])

  const cardSubTitle = useCallback((website_url, cardSubtitle) => {
    let subtitle = <span>{cardSubtitle ?? ''}</span>

    if (website_url.includes('http')) {
      subtitle = <Link href={website_url} target="_blank">
        {cardSubtitle}
      </Link>
    }

    return subtitle
  }, [])

  return (
    <CardsGalleryComponent
      pageTitle={pageTitle}
      cardSubTitle={cardSubTitle}
      selectedUrl={selectedUrl}
      loading={loading}
      mounted={mounted}
      setSelected={setSelected}
    />
  )
}

export default CardsGallery
