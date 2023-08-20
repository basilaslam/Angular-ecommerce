export interface PaypalApiResponse {
  data: PaypalResponseData
  message: string
  statusCode: number
  success: boolean
}

export interface PaypalResponseData {
  id: string
  links: Link[]
  status: string
}

export interface Link {
  href: string
  method: string
  rel: string
}
