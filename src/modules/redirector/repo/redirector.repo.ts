import { prisma } from '@/db'

export const getDeploy = async (domainName: string, url: string) => {
  return await prisma.deploy.findFirst({
    where: {
      url,
      domain: {
        domainName: domainName,
      },
    },
  })
}
