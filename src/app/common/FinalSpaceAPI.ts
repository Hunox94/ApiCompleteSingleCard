
export type FinalSpace = FinalsSpace[]

export interface FinalsSpace {
  id: number
  name: string
  status: string
  species?: string
  gender: string
  hair: string
  alias: string[]
  origin: string
  abilities: string[]
  img_url: string
}
