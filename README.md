Petit tuto que j'ai adapté (surtout le docker-compose)

[Ici](https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0)

# Docker compose 

```bash
docker-compose up -d
```

# Prisma

```bash
npx prisma migrate dev --name "init"
```

```bash
npx prisma db seed
```

# Swagger

```bash
yarn add @nestjs/swagger swagger-ui-express
```

# Nest

```bash
nest generate resource
```

