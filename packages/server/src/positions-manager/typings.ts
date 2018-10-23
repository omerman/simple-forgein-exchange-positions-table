export interface IPosition {
  id: string,
  fuOriginId: string, // finantial unit id
  data: {
    currency: {
        ccy: string,
        notionalValue: number
    },
  },
}
