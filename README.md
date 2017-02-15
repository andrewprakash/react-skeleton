# REACT Skeleton With Flux and Compiler
    Use this is as a basis to start developing a react app, on going development

## Instructions
Run the following commands to start developing

### Will Install the dependencies
```
npm install
```
### Will compile all js, jsx and less and have watch running in background
```
npm run dev
```
### Will compile and minify all js, jsx and less for production 
```
npm run prod
```
All compiled output is available in 
```
dist/index.js
```
```
dist/index.css
```

### Recommendations
Use store folder for stores created, have a folder for each store i.e todoStore will be:
```
src/stores/todo/todoStore.js
```
Use view folder for components, have a folder for each component i.e. todo.jsx  will be:
```
src/views/todo/todo.jsx
```