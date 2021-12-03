FROM node:14-alpine

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./package*.json ./

# Bundle app source
COPY . .

RUN touch crontab.tmp \
#TODO add 2>> to stdterr for console.error()
    && echo ' */5 * * * * cd /usr/src/app && npm start >> /var/log/cron.log' > crontab.tmp \
    && crontab crontab.tmp \
    && rm -rf crontab.tmp \
    && npm install

# Run the command on container startup
CMD ["/usr/sbin/crond", "-f", "-d", "0"]
#CMD cron && tail -f /var/log/cron.log