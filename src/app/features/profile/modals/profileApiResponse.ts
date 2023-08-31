export interface ProfileApiResponse {
  data: Profile
  message: string
  statusCode: number
  success: boolean
}

export interface Profile {
  __v: number
  _id: string
  countryCode: string
  createdAt: string
  firstName: string
  lastName: string
  owner: string
  phoneNumber: string
  updatedAt: string
}
