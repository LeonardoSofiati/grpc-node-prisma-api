# grpc-node-prisma-api

To start a server and cliente run:

npm install
docker compose up -d --build
npm run generate-proto
npm run db:migrate && npm run db:generate && npm run db:push
npm run start:server
npm run start:client
