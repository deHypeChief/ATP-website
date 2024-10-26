FROM oven/bun AS build

WORKDIR /api

# Cache packages installation
COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile

COPY . .

ENV NODE_ENV=production

RUN bun run build

CMD ["bun", "start"]

EXPOSE 8001