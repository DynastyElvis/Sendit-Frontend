export interface PostParcel  {
    name: string
    description: string
    weight: number
    destination: string
}


export interface Parcel  {
    name: string
    description: string
    weight: any
    price: number
    parcel_status: string
    destination: string
    photo:{ url: string }
}
