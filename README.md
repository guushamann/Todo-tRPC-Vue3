
# example project with prisma express.js tRPC vue3

## An example todo project with Vue tRPC Prisma Tailwind and Typescript in an npm monorepo workspace project

used in this project:
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

