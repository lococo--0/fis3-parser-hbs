# fis3-parser-hbs

## 用法
```
fis.match('src/index.hbs', {
  parser: fis.plugin('hbs', {
    data: {name: 'lococo'}
  })
});
```

## 效果
src/index.hbs
编译前
```
my name is {{name}}
```
编译后
```
my name is lococo
```
