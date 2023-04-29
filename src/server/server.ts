const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const createNewUser = async () => {
    const newUser = await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io',
        },
    });
    return newUser;
}

const getAllUsers = async (value: string) => {

    const users = await prisma.user.findMany({
        select: {
            id:true,
            firstName: true,
        },
        where:{
            firstName: {
                contains: value
            }
        }
    });

    return users;
}



