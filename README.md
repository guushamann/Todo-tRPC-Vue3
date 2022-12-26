
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

in the root of the root repo run:
```bash
npm install
```
initialize the db in the api repo
```bash
cd apps/api-server/
mv .env.example .env
npx prisma migrate dev --name init     
cd ../../
```
start the dev client and server
```bash
npm run dev
```

