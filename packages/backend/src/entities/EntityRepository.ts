/* eslint-disable @typescript-eslint/ban-types */
import { PrismaClient } from '@prisma/client'

export type allTypes = number | string | object | boolean

// take just values that aren't optional
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

/*
Separate and turn optional in obligatory types (vice-versa)
  T: type,
  R: intersection of keys to be obrigatory
  O: intersection of keys to be optional
*/
type SeparateRequired<
  T,
  R extends keyof T,
  O extends keyof T = Exclude<keyof T, R>
> = Partial<Pick<T, O>> & Required<Pick<T, R>>
// intersection of type keys
type Keys<T> = keyof T
