FROM node:current-alpine

WORKDIR /app

COPY package.json yarn.lock ./

# To Fix Permissions for Packages
RUN npm config set unsafe-perm true

RUN yarn install

COPY . ./

EXPOSE 3000

RUN chown -R node /app/node_modules

USER node

CMD ["npm", "run", "dev"]