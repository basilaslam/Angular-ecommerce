export interface CartApiResponse {
  data: CartData
  message: string
  statusCode: number
  success: boolean
}

export interface CartData {
  _id: string
  cartTotal: number
  coupon: Coupon
  discountedTotal: number
  items: CartItem[]
}

export interface Coupon {
  __v: number
  _id: string
  couponCode: string
  createdAt: string
  discountValue: number
  expiryDate: string
  isActive: boolean
  minimumCartValue: number
  name: string
  owner: string
  startDate: string
  type: string
  updatedAt: string
}

export interface CartItem {
  _id: string
  coupon: string
  product: Product
  quantity: number
}

export interface Product {
  __v: number
  _id: string
  category: string
  createdAt: string
  description: string
  mainImage: MainImage
  name: string
  owner: string
  price: number
  stock: number
  subImages: SubImage[]
  updatedAt: string
}

export interface MainImage {
  _id: string
  localPath: string
  url: string
}

export interface SubImage {
  _id: string
  localPath: string
  url: string
}
