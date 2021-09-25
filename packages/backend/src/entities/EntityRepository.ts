import { PrismaClient } from '@prisma/client'

export interface EntityRepository {
  prisma: PrismaClient
}
