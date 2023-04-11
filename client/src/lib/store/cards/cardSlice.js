import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

import {
  _createCard,
  _getCards,
  _getCard,
  _deleteCard,
  _updateCard,
  _getCardsByCategory
} from '@/store/cards/cardThunks'

import { ADAPTER_STATES } from '@/store/constants'

// Entity adapter - redux state of this slice
// By default, `createEntityAdapter` gives you `{ ids: [], entities: {} }`.
export const cardsAdapter = createEntityAdapter({
  selectId: (card) => card.id,
  sortComparer: (a, b) => (new Date(b.date_created) - new Date(a.date_created))
})

const cardSlice = createSlice({
  name: 'cards',
  initialState: cardsAdapter.getInitialState({
    status: ADAPTER_STATES.IDLE,
    currentRequestId: null,
    error: '',
    picturefilename: '',
    attachmentfilename: '',
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
      state.picturefilename = ''
      state.attachmentfilename = ''
      state.card = null
    },
    cardReceived (state, action) {
      state.card = action.payload
    },
    cardPictureReceived (state, action) {
      state.picturefilename = action.payload

      if (state.card) {
        state.card.picture_url = ''
      }
    },
    cardFileReceived (state, action) {
      state.attachmentfilename = action.payload

      if (state.card) {
        state.card.download_url = ''
      }
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
    // Fetch all Cards thunk handler
    builder.addCase(_getCards.fulfilled, (state, { payload }) => {
      state.status = ADAPTER_STATES.IDLE
      state.currentRequestId = undefined
      cardsAdapter.setAll(state, payload)
    })

    builder.addCase(_getCards.rejected, (state, action) => {
      const { message } = action.error
      state.status = ADAPTER_STATES.IDLE
      state.error = action?.payload ?? message
      state.currentRequestId = undefined
      state.card = null
    })

    // Fetch Card thunk handler
    builder.addCase(_getCard.fulfilled, (state, action) => {
      state.status = ADAPTER_STATES.IDLE
      state.currentRequestId = undefined
      state.card = action.payload
    })

    builder.addCase(_getCard.rejected, (state, action) => {
      const { message } = action.error
      state.status = ADAPTER_STATES.IDLE
      state.error = action?.payload ?? message
      state.currentRequestId = undefined
      state.card = null
    })

    // Create new Card thunk handler
    builder.addCase(_createCard.fulfilled, (state, action) => {
      const { requestId } = action.meta

      if (
        state.status === ADAPTER_STATES.PENDING &&
        state.currentRequestId === requestId
      ) {
        state.status = ADAPTER_STATES.IDLE
        state.currentRequestId = undefined
        state.card = action.payload

        // Remove the content field
        const card = { ...action.payload, content: '-' }

        // Insert the new Card to the collection of Cards
        cardsAdapter.addOne(state, card)
      }
    })

    builder.addCase(_createCard.rejected, (state, action) => {
      const { message } = action.error
      state.status = ADAPTER_STATES.IDLE
      state.error = action?.payload ?? message
      state.currentRequestId = undefined
      state.card = null
    })

    // Delete Card thunk handler
    builder.addCase(_deleteCard.fulfilled, (state, action) => {
      const { requestId } = action.meta

      if (
        state.status === ADAPTER_STATES.PENDING &&
        state.currentRequestId === requestId
      ) {
        state.status = ADAPTER_STATES.IDLE
        state.currentRequestId = undefined
        state.card = null
        cardsAdapter.removeOne(state, action.payload)
      }
    })

    builder.addCase(_deleteCard.rejected, (state, action) => {
      const { message } = action.error
      state.status = ADAPTER_STATES.IDLE
      state.error = action?.payload ?? message
      state.currentRequestId = undefined
    })

    // Update Card thunk handler
    builder.addCase(_updateCard.fulfilled, (state, action) => {
      const { requestId } = action.meta

      if (
        state.status === ADAPTER_STATES.PENDING &&
        state.currentRequestId === requestId
      ) {
        state.status = ADAPTER_STATES.IDLE
        state.currentRequestId = undefined
        state.card = action.payload

        // Remove the content field
        const card = { ...action.payload, content: '-' }

        // Insert the new Card to the collection of Cards
        cardsAdapter.setOne(state, card)
      }
    })

    builder.addCase(_updateCard.rejected, (state, action) => {
      const { message } = action.error
      state.status = ADAPTER_STATES.IDLE
      state.error = action?.payload ?? message
      state.currentRequestId = undefined
    })

    // Fetch Cards by categoty thunk handler (uses a collectionGroup query)
    builder.addCase(_getCardsByCategory.fulfilled, (state, action) => {
      state.status = ADAPTER_STATES.IDLE
      state.currentRequestId = undefined

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
  }
})

export const {
  cardsLoading,
  cardsReceived,
  cardsReset,
  cardReceived,
  cardFileReceived,
  cardPictureReceived
} = cardSlice.actions

export default cardSlice.reducer