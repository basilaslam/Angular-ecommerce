export interface AddressApiResponse {
  data: AddressData
  message: string
  statusCode: number
  success: boolean
}

export interface AddressData {
  addresses: Address[]
  hasNextPage: boolean
  hasPrevPage: boolean
  limit: number
  nextPage: boolean
  page: number
  prevPage: boolean
  serialNumberStartFrom: number
  totalAddresses: number
  totalPages: number
}

export interface Address {
  __v: number
  _id: string
  addressLine1: string
  addressLine2: string
  city: string
  country: string
  createdAt: string
  owner: string
  pincode: string
  state: string
  updatedAt: string
}

export interface SignleAddressApiResponse {
  data: Address
  message: string
  statusCode: number
  success: boolean
}
