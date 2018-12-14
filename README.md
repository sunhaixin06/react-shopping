[React全家桶安装使用指南](./React全家桶安装使用指南.md) | 项目简介

# react-shopping

#### 项目介绍

移动Web APP开发之实战美团外卖

#### 软件架构

React全家桶，移动Web开发技术全解析，理解 Hybrid 混合模式开发

#### 使用说明
  * waimaiApp: 
    * 项目页面逻辑源码 
    简介：项目页面逻辑源码
    运行：

      1.安装依赖：
         - npm install 

      2.dev环境服务启动：
         - npm run dev

      3.build环境服务启动：
         - npm run build
         
  * waimaiServer: 
    * 用来托管项目页面的服务器，采用nodejs+express框架编写

      1.安装依赖
          - npm install 

      2.启动服务
          - npm run start
   
   *启动build之后，项目打包过后的文件会自动复制到waimaiServer的public文件下*

   * webview: 
    * 简介：iOS webview源码，用来承载项目页面的webview壳子
    * 运行：安装xcode9.4.1 以上，双击 *WebviewDemo.xcodeproj* 即可运行

#### 参与贡献

- [sunhaixin](https://gitee.com/github-29425276/react-shopping)