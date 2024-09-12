import { createSerializer, parseAsInteger } from "nuqs"
import { createSearchParamsCache } from "nuqs/server"

export const params = {
  limit: parseAsInteger.withDefault(6),
  offset: parseAsInteger.withDefault(0),
}
export const paramsCache = createSearchParamsCache(params)
export const paramsSerializer = createSerializer(params)
