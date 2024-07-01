FROM node:lts-iron
 
WORKDIR /wang_yaxiong_ui_garden/
 
COPY public/ /wang_yaxiong_ui_garden/public
COPY src/ /wang_yaxiong_ui_garden/src
COPY package.json /wang_yaxiong_ui_garden/
COPY . /wang_yaxiong_ui_garden
 
RUN npm install
 
CMD ["npm", "run", "storybook"]