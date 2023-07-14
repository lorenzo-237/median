Petit tuto que j'ai adapté (surtout le docker-compose)

- [Chapter 1 : Building a REST API with NestJS and Prisma](https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0)
- [Chapter 2 : Building a REST API with NestJS and Prisma: Input Validation & Transformation](https://www.prisma.io/blog/nestjs-prisma-validation-7D056s1kOla1)
- [Chapter 3 : Building a REST API with NestJS and Prisma: Error Handling](https://www.prisma.io/blog/nestjs-prisma-error-handling-7D056s1kOop2)
- [Chapter 4 : Building a REST API with NestJS and Prisma: Handling Relational Data](https://www.prisma.io/blog/nestjs-prisma-relational-data-7D056s1kOabc)
- [Chapter 5 : Building a REST API with NestJS and Prisma: Authentication](https://www.prisma.io/blog/nestjs-prisma-authentication-7D056s1s0k3l)

# Docker compose 

```bash
docker-compose up -d
```

# Prisma

- [Prima errors](https://www.prisma.io/docs/reference/api-reference/error-reference#prisma-client-query-engine)
- [nestjs-prisma](https://nestjs-prisma.dev/docs/installation/)

nestjs-prisma semble être interressant je cite : "When using this package, you will not need to manually create a separate `prisma` module and service, as this package will automatically make them for you."

```bash
npx prisma migrate dev --name "init"
npx prisma migrate dev --name "add-user-model"
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

```bash
nest generate filter prisma-client-exception
```

