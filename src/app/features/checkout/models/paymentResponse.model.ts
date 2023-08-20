export interface SuccessRazorpayPayment {
  data: SuccessRazorpayData
  message: string
  statusCode: number
  success: boolean
}

export interface SuccessRazorpayData {
  __v: number
  _id: string
  address: string
  createdAt: string
  customer: string
  isPaymentDone: boolean
  items: Item[]
  orderPrice: number
  paymentId: string
  paymentProvider: string
  status: string
  updatedAt: string
}

export interface Item {
  _id: string
  productId: string
  quantity: number
}
