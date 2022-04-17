import { createReducer } from '@reduxjs/toolkit'
/* eslint-disable no-param-reassign */
import {
  updatePaginate,
  setToken,
  setStreamById,
  getListTournaments,
  setAccount,
  setListTickets,
  setShowMenu,
  changeTab,
  setShowChatbot,
  dataMenuFromServer,
  defaultListTournaments,
} from './actions'
import { State } from './types'

const initialState: State = {
  email: '',
  token: '',
  stream: {
    id: '',
    title: '',
    desc: '',
    categoryId: '',
    organization: '',
    ticket: {
      enable: false,
      price: 0,
      currency: '',
    },
    passwordEnable: false,
    privacy: '',
    online: false,
    liveStreamingSchedule: new Date().toString(),
    thumbnailUrl: '',
    status: '',
    settings: {
      streamKey: '',
      rtmpUrl: '',
      playerUrl: '',
      username: '',
      password: '',
    },
  },
  tournament: {
    paginate: {
      limit: 5,
      page: 1,
      totalPages: 0,
      totalItems: 0,
    },
  },
  listTournaments: [],
  account: {
    id: '',
    username: '',
    primaryEmail: '',
    firstname: '',
    lastname: '',
    createdAt: '',
    updatedAt: '',
    channel: {
      title: '',
      desc: '',
    },
  },
  listTickets: [],
  menuIsShow: false,
  chatbotIsShow: false,
  tab: 'public',
  menu: [],
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(setToken, (state, { payload: { token } }) => {
      state.token = token.token
    })
    .addCase(setStreamById, (state, { payload: { stream } }) => {
      state.stream = stream
    })
    .addCase(updatePaginate, (state, { payload: { paginate } }) => {
      state.tournament.paginate = paginate
    })
    .addCase(getListTournaments, (state, { payload: { listTournaments } }) => {
      state.listTournaments = listTournaments
    })
    .addCase(setAccount, (state, { payload: { account } }) => {
      state.account = account
    })
    .addCase(setListTickets, (state, { payload: { listTickets } }) => {
      state.listTickets = listTickets
    })
    .addCase(setShowMenu, (state, { payload: { isShow } }) => {
      state.menuIsShow = isShow
    })
    .addCase(setShowChatbot, (state, { payload: { isShow } }) => {
      state.chatbotIsShow = isShow
    })
    .addCase(changeTab, (state, { payload: { tab } }) => {
      state.tab = tab
    })
    .addCase(dataMenuFromServer, (state, { payload: { menu } }) => {
      state.menu = menu
    })
    .addCase(defaultListTournaments, (state, { payload: { listTournaments } }) => {
      state.listTournaments = listTournaments
    }),
)
