import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

import CardPreviewComponent from './cardpreview'

import useDownloadFile from '../../hooks/usedownloafile'
import useGlobalFile from '../../hooks/useglobalfile'

import {
  INPUT_PHOTO_FILE_ID,
  STORE_PHOTO_LOCAL_URL,
  STORE_OBJECT
} from '../../constants/variables'

function CardPreview () {
  const [selectedUrl, setSelectedUrl] = useState(null)
  const card = useSelector(state => state.cards.card)

  const { fileSource: pictureImage } = useGlobalFile(
    card?.picture_url,
    INPUT_PHOTO_FILE_ID,
    STORE_OBJECT,
    STORE_PHOTO_LOCAL_URL
  )

  const { loading } = useDownloadFile({ fileUrl: selectedUrl })

  useEffect(() => {
    if (!loading) {
      setSelectedUrl(null)
    }
  }, [loading])

  const cardSubTitle = useMemo(() => {
    let subtitle = <span>Subtitle</span>

    if (card !== null) {
      subtitle = <span>{card?.subtitle ?? ''}</span>

      if (card?.website_url.includes('http')) {
        subtitle = <Link href={card.website_url} target="_blank">
          {subtitle}
        </Link>
      }
    }

    return subtitle
  }, [card])

  const isDisabled = useMemo(() => {
    if (loading) {
      return true
    } else {
      return (card)
        ? (card?.download_url === '' || !card?.download_url.includes('http'))
        : true
    }
  }, [loading, card])

  const downloadFile = async () => {
    setSelectedUrl(card?.download_url)
  }

  return (
    <CardPreviewComponent
      card={card}
      loading={loading}
      pictureImage={pictureImage}
      cardSubTitle={cardSubTitle}
      isDisabled={isDisabled}
      downloadFile={downloadFile}
    />
  )
}

export default CardPreview
