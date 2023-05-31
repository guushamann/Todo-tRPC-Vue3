import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createTodo = async (todo: Prisma.TodoCreateInput) => {
    await prisma.todo.create({ data: todo })
}

export const deleteTodo = async (id: number) => {
    await prisma.todo.update({ data: { completed: true }, where: { id } })
}

export const getTodos = async ({ filter }: { filter?: boolean }) => {
    return prisma.todo.findMany({
        where: {
            completed: filter,
        },
    })
}
