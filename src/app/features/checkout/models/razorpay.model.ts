export interface RazorpayApiResponse {
  data: RazorpayApiData
  message: string
  statusCode: number
  success: boolean
}

export interface RazorpayApiData {
  amount: number
  amount_due: number
  amount_paid: number
  attempts: number
  created_at: number
  currency: string
  entity: string
  id: string
  notes: any[]
  offer_id: any
  receipt: string
  status: string
}

export interface RazorpaySuccessResponse {
  razorpay_payment_id: string
  razorpay_order_id: string;
  razorpay_signature: string;
}
