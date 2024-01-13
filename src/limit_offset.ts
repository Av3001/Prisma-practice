
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['info', 'query']
})

//select * from post offset 0 limit 2;
async function main() {
  let res = await prisma.post.findMany({
    take: 2,
    skip:0
  })
    console.log(res);
    
}

main()