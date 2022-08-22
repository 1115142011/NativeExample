### react-native 示例项目

- 最近上手 rn 所以在空余时间做个样例项目，准备从头踩下坑，期望在爬坑中有所收获
- 该项目仅供学习交流

#### 开发过程记录：

1. react-native 0.68.1 最新是 0.69.3 最新版本用的是 reactv18 版本 社区 react-native 配套的库大多是支持 reactv17 的 所以暂时使用以前的稳定版
2. 在初始化项目时 同时指定 native version 和 typeStript 模版时，-- version 参数未生效(后来在 github 上查到 只需要指定模板的 version 就可以了 --template react-native-template-typescript@6.x.x)，所以 typeScript 是项目初始完成后添加的，可能是命令参数的姿势不对，暂未深究。添加 typeScript 十分容易
3. 在安装路由库时 想要路由依赖正确加载到项目必须执行该命令 npx pod-install ios (ps 需要有稳定的梯子)
4. Animate 使用本机驱动的动画支持的样式属性有限 ，在设计动画的时候要考虑实现方式
5. 想要获取元素 尺寸及位置信息时可也利用 `onLauout` 事件从事件对象中获取
6. 在 macOS M1 上配置安卓开发环境时遇到了模拟器 sdk 下载不了的问题，可以先不管，在创建模拟器时再下载 ,
7. 在构建 Android 时一直卡在 `Starting a Gradle Daemon ...` 这一步，实际上上再下载 Android 构建相关的 Gradle Sdk ，在 Android Studio 中打开 项目的 Android 文件夹 ，等待项目相关的 sdk 下载完成后 再运行 `yarn android`
8. 在 react-native 嵌套的 Touch 系列组件 如果子组件设置了 触摸事件的处理函数，那么，该事件不会冒泡到父级，原则上每个手势事件只能有一个响应者 （官方 issues:https://github.com/facebook/react-native/issues/6796）

```tsx
<TouchableHighlight onLongPress={this._onLongPress}>
  <TouchableHighlight onPress={this._onPress}>
    <Text>Press or LongPress me</Text>
  </TouchableHighlight>
</TouchableHighlight>
```

9. 键盘遮挡物问题可以用 `KeyboardAvoidingView` 组件解决

   ```tsx
       <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{
        padding: 8,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
     }}>
   <View>{....}</View>
   </KeyboardAvoidingView>

   ```

10. react-native 中图片仅支持有限格式的几种图片 `png、jpg、jpeg、bmp、gif、webp`

11. 要实现类似密码框的效果需要设置 `secureTextEntry={true}`

```tsx
<Input
  secureTextEntry={true}
  textContentType="password"
  value={inputVal.password}
  onChange={(e: any) => onAccountChange('password', e)}
  style={{height: 55}}
  textStyle={{fontSize: 18}}
  placeholder="请输入密码"
  extra={
    <View style={[commonStyle.flexRowCenter]}>
      <View
        style={{
          borderWidth: 1,
          height: 18,
          marginRight: 8,
          borderColor: '#d9d9d9',
        }}
      />
      <TouchAbleText
        onPress={toFindPassword}
        textStyle={{
          width: 80,
          color: '#e77075',
        }}>
        忘记密码
      </TouchAbleText>
    </View>
  }
/>
```
