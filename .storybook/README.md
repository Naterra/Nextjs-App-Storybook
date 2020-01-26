### Installation

```
npm i --save-dev @storybook/preset-scss @storybook/addon-actions @storybook/addon-links @storybook/addons @storybook/react
```


### Scss
While .scss files coud be loaded by Next.js, we have to use IDE fileWatcher to compile scss into css



```
'program':node-sass 
'arg': $FileName$ $FileNameWithoutExtension$.css
'output path': $FileNameWithoutExtension$.css
'Working dir':$FileDir$  
``` 


### Babel
```{
  "sourceType": "unambiguous",
  "presets": [
    ["@babel/preset-env", {
      "modules": false,
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
      }
    }]
  ],
  "plugins": ["@babel/plugin-transform-runtime", "@babel/plugin-syntax-dynamic-import"]
}
```