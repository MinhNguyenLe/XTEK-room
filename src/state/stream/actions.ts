import { createAction } from '@reduxjs/toolkit'
import { Token, Stream, Paginate, Account, TicketData, MenuItem } from './types'

export const setToken = createAction<{
  token: Token
}>('stream/token/setToken')

export const setStreamById = createAction<{
  stream: Stream
}>('stream/tournament/setStreamById')

export const updatePaginate = createAction<{
  paginate: Paginate
}>('stream/tournament/updatePaginate')

export const getListTournaments = createAction<{
  listTournaments: any[]
}>('stream/tournament/getListTournaments')

export const defaultListTournaments = createAction<{
  listTournaments: any[]
}>('stream/tournament/defaultListTournaments')

export const setAccount = createAction<{
  account: Account
}>('stream/account/setAccount')

export const setListTickets = createAction<{
  listTickets: TicketData[]
}>('stream/ticket/setListTickets')

export const setShowMenu = createAction<{
  isShow: boolean
}>('stream/menu/setShowMenu')

export const setShowChatbot = createAction<{
  isShow: boolean
}>('stream/chatbot/setShowChatbot')

export const changeTab = createAction<{
  tab: string
}>('stream/chatbot/changeTab')

export const dataMenuFromServer = createAction<{
  menu: MenuItem[]
}>('stream/menu/dataMenuFromServer')
