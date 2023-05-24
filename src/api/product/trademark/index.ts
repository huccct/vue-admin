import request from '@/utils/request'
import type { TradeMarkResponseData } from './type'
enum API {
  TRADEMARK_URL = '/admin/product/baseTrademark/',
}

export const reqHasTradeMark = (page: number, limit: number) =>
  request.get<any, TradeMarkResponseData>(
    API.TRADEMARK_URL + `${page}/${limit}`,
  )
