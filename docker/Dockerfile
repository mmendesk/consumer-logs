FROM public.ecr.aws/bitnami/node:14-prod

WORKDIR /app

COPY . /app

RUN yarn install --pure-lockfile

EXPOSE 3000

CMD [ "yarn","run","start:dev" ]
