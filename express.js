const express = require('express');
const app = express();//导入express 模块并实例化
const cors = require('cors');//导入cors模块

app.use(cors());//使用cors中间件
app.use(express.urlencoded({ extended: false }))



const router1 = require('./router/01');//输入个人信息（不于数据库中的数据重复）
app.use('/api', router1);//使用路由中间件1(注册)

const router2 = require('./router/02');//输入个人信息（与数据库中的数据重复）
app.use('/api', router2);//使用路由中间件2(登录)

const router3 = require('./router/03');//更改数据库中的个人信息
app.use('/api', router3);//使用路由中间件3(修改)

const router4 = require('./router/04');//上传个人简介
app.use('/api', router4);//使用路由中间件4(简介)






app.listen(8080, () => {
  console.log('Server is running at http://127.0.0.1:8080');
});

