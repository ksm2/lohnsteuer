import sax from 'sax'

export interface Item extends sax.Tag {
  comment: string[]
}
