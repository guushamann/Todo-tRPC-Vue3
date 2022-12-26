
# example project with prisma express trpc vue3

## A working example todo project with Vue Trpc Prisma Tailwind and Typescript in an npm monorepo workspace project

used techstack:
- npm monorepo 
- Express.js
- prisma
- typescript
- trcp
- tailwind
- vue3
- vue-query
- prettier
- eslint

# install and run

in the root of the monorep run:
npm install
# initialize the db
cd apps/api-server/
mv .env.example .env
npx prisma migrate dev --name init     
cd ../../
npm run dev

