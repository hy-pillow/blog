## 1. 初始化项目
1.1 创建一个空文件夹
1.2 创建readme文件
1.3 创建ignore文件
```
node_modules
lib
.idea
```
1.4 初始化项目配置文件
配置此项目的名称、作者还有依赖的node模块信息等等
```
npm init -y
```
1.5 创建bower配置文件bower.json
配置此项目依赖哪些前端框架
```
bower init
```
1.6 创建 bower安装 配置文件.bowerrc
```
{
  "directory":"./public/lib"
}
```
1.7 初始化git仓库
```
git init
git add -A
git commit -m"init"
git remote add origin https://github.com/zhufengnodejs/1608blog.git
git push -u origin master
```

## 2. 安装依赖的前端和后端的框架
前端依赖
```
bower install bootstrap --save
```
后端依赖
```
npm install express body-parser mongoose --save
```

## 3. 配置路由