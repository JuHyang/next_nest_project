export interface Product {
  id: number
  name: string
  price: number
}

export interface CreateProductInput {
  name: string
  price: number
}

export interface UpdateProductInput {
  id: number
  name: string
  price: number
}
