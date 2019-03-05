import { Constant } from './Constant'
import { Variable } from './Variable'

export interface Method {
  name: string
  body: string
}

export interface PAP {
  name: string
  fn?: string
  inputs: Variable[]
  outputs: Variable[]
  internals: Variable[]
  constants: Constant[]
  main: string
  methods: Method[]
}
