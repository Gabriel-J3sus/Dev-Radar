/* eslint-disable @typescript-eslint/ban-types */
import { PrismaClient } from '@prisma/client'

export type allTypes = number | string | object | boolean

export type OnlyDefined<T, D = allTypes> = {
  [property in keyof T]: T[property] extends D
    ? D extends undefined
      ? never
      : T[property]
    : never
}

export interface EntityRepository {
  prisma: PrismaClient
}
