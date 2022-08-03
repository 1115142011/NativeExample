### react-native 示例项目

- 最近上手 rn 所以在空余时间做个样例项目，准备从头踩下坑，期望在爬坑中有所收获
- 该项目仅供学习交流

#### 开发过程记录：

1. react-native 0.68.1 最新是 0.69.3 最新版本用的是 reactv18 版本 社区 react-native 配套的库大多是支持 reactv17 的 所以暂时使用以前的稳定版
2. 在初始化项目时 同时指定 native version 和 typeStript 模版时，-- version 参数未生效(后来在 github 上查到 只需要指定模板的 version 就可以了 --template react-native-template-typescript@6.x.x)，所以 typeScript 是项目初始完成后添加的，可能是命令参数的姿势不对，暂未深究。添加 typeScript 十分容易
3. 在安装路由库时 想要路由依赖正确加载到项目必须执行该命令 npx pod-install ios
