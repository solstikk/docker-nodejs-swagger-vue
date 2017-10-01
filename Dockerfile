FROM node:8.6-alpine
RUN mkdir -p /usr
WORKDIR /usr
COPY ./package.json /usr
COPY ./package-lock.json /usr
RUN npm install --silent
COPY . /usr
RUN npm run lint
EXPOSE 8080
ENTRYPOINT ["npm", "run"]
CMD ["start"]
