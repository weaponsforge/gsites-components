import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

import {
  _getCardsByCategory,
  _getPublicCardById
} from '@/store/cards_gallery/cardGalleryThunks'

import { ADAPTER_STATES } from '@/store/constants'

// Entity adapter - redux state of this slice
// By default, `createEntityAdapter` gives you `{ ids: [], entities: {} }`.
export const cardsAdapter = createEntityAdapter({
  selectId: (card) => card.id,
  sortComparer: (a, b) => (new Date(b.date_created) - new Date(a.date_created))
})

const cardGallerySlice = createSlice({
  name: 'cards_gallery',
  initialState: cardsAdapter.getInitialState({
    status: ADAPTER_STATES.IDLE,
    currentRequestId: null,
    initialized: false,
    error: '',
    card: null
  }),
  reducers: {
    cardsLoading (state, action) {
      state.status = ADAPTER_STATES.PENDING
      state.currentRequestId = action.payload || undefined
      state.error = ''
    },
    cardsReset (state, action) {
      state.status = ADAPTER_STATES.IDLE
      state.currentRequestId = action.payload || undefined
      state.error = ''
      state.picturelocalurl = ''
      state.attachmentfilename = ''
      state.card = null
    },
    cardReceived (state, action) {
      state.card = action.payload
    },
    cardsReceived (state, action) {
      cardsAdapter.setAll(state, action.payload)
      state.status = ADAPTER_STATES.IDLE
      state.currentRequestId = undefined
    }
  },
  // extraReducers offers automated ways for monitoring Entity adapters
  // and adjusting the slice's states
  extraReducers: (builder) => {

    // Fetch Cards by category thunk handler (uses a collectionGroup query)
    builder.addCase(_getCardsByCategory.fulfilled, (state, action) => {
      state.status = ADAPTER_STATES.IDLE
      state.currentRequestId = undefined
      state.initialized = true

      // TO-DO: Investigate why action.payload is sometimes undefined on localhost dev
      // (when navigating using next/router)
      if (action.payload) {
        cardsAdapter.setAll(state, action.payload)
      }
    })

    builder.addCase(_getCardsByCategory.rejected, (state, action) => {
      const { message } = action.error
      state.status = ADAPTER_STATES.IDLE
      state.error = action?.payload ?? message
      state.currentRequestId = undefined
      state.card = null
    })

    // Fetch a Card by cardId thunk handler (uses a collectionGroup query)
    builder.addCase(_getPublicCardById.fulfilled, (state, action) => {
      state.status = ADAPTER_STATES.IDLE
      state.currentRequestId = undefined
      state.card = action.payload
    })

    builder.addCase(_getPublicCardById.rejected, (state, action) => {
      const { message } = action.error
      state.status = ADAPTER_STATES.IDLE
      state.error = action?.payload ?? message
      state.currentRequestId = undefined
      state.card = null
    })
  }
})

export const {
  cardsLoading,
  cardsReceived,
  cardsReset,
  cardReceived
} = cardGallerySlice.actions

export default cardGallerySlice.reducer