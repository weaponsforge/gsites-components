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
} from '@/store/cards/cardThunks'

import { ADAPTER_STATES } from '@/store/constants'

// Entity adapter - redux state of this slice
// By default, `createEntityAdapter` gives you `{ ids: [], entities: {} }`.
export const cardsAdapter = createEntityAdapter({
  selectId: (post) => post.id,
  sortComparer: (a, b) => (new Date(b.date_created) - new Date(a.date_created))
})

const cardSlice = createSlice({
  name: 'cards',
  initialState: cardsAdapter.getInitialState({
    status: ADAPTER_STATES.IDLE,
    currentRequestId: null,
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
      state.card = null
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
    // Fetch all Posts thunk handler
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

    // Fetch Post thunk handler
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

    // Create new Post thunk handler
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

        // Insert the new Post to the collection of Posts
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

    // Delete Post thunk handler
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

    // Update Post thunk handler
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

        // Insert the new Post to the collection of Posts
        cardsAdapter.setOne(state, card)
      }
    })

    builder.addCase(_updateCard.rejected, (state, action) => {
      const { message } = action.error
      state.status = ADAPTER_STATES.IDLE
      state.error = action?.payload ?? message
      state.currentRequestId = undefined
    })
  }
})

export const {
  cardsLoading,
  cardsReceived,
  cardsReset
} = cardSlice.actions

export default cardSlice.reducer