export type Game = {
  round: number,
  turn: string,
}

export type Card = {
  suit : string, 
  number : number
}

export type Judge = {
  winner : string,
  playerHand : string,
  villanHand : string
}

export type ChipInfo = {
  playerStack : number,
  playerBet : number,
  villanBet : number
}

export interface HandRank {
  StraightFlush : {
      form : boolean,
      info : number[]
  },
  Quads : {
      form : boolean,
      info : number[]
  },
  FullHouse : {
      form : boolean,
      info : number[]
  },
  Flush : {
      form : boolean,
      info : number[]
  },
  Straight : {
      form : boolean,
      info : number[]
  },
  Three : {
      form : boolean,
      info : number[]
  },
  TwoPair : {
      form : boolean,
      info : number[]
  },
  OnePair : {
      form : boolean,
      info : number[]
  },
  HighCard : {
      form : boolean,
      info : number[]
  },
  [key: string]: {
    form : boolean,
    info : number[]
  }
} 