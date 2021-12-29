FROM node
WORKDIR /usr/personal-website/src
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
RUN npm install pm2 -g
CMD ["pm2-runtime", "start", "npm", "--name", "personal-website", "--", "start"]