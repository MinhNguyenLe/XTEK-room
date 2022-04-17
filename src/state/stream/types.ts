export interface Token {
  token: string
}

export interface Paginate {
  limit: number
  page: number
  totalPages: number
  totalItems: number
}

export interface MenuItem {
  iconUrl: string
  name: string
  desc: string
  id: string
}

export interface State {
  email: string
  token: string
  stream: Stream
  tournament: {
    paginate: Paginate
  }
  listTournaments: any[]
  account: Account
  listTickets: TicketData[]
  menuIsShow: boolean
  chatbotIsShow: boolean
  tab: string
  menu: MenuItem[]
}

export interface TicketData {
  id: string
  streamId: string
  code: string
  isUsed: boolean
  usedBy: string
  email: {
    sent: boolean
    address: string
    sentAt: string
  }
  createdBy: string
  createdAt: string
  updatedAt: string
}

export interface Account {
  id: string
  username: string
  primaryEmail: string
  firstname: string
  lastname: string
  createdAt: string
  updatedAt: string
  channel: {
    title: string
    desc: string
  }
  walletAddresses?: any[]
}

export interface Stream {
  id: string
  title: string
  desc: string
  categoryId: string
  organization: string
  privacy: string
  ticket: {
    enable: boolean
    price: number
    currency: string
  }
  liveStreamingSchedule: string
  passwordEnable: boolean
  owner?: {
    username: string
    avatarUrl: string
    firstname: string
    lastname: string
    channel: {
      title: string
      desc: string
    }
    userId: string
  }
  online: boolean
  thumbnailUrl: string
  status: string
  settings?: {
    streamKey: string
    rtmpUrl: string
    playerUrl: string
    username: string
    password: string
  }
}
