export interface gameStats {
  language: string,
  correctAnsw: {
    id: number,
    pos: number,
    selected: number
  }
  hpLeft: number,
  answers: number[],
  score: number,
  start: boolean
}
