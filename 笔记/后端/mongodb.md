## 命令行启动mongodb

```
mongod --dbpath 绝对路径
```

## 命令

```
库操作
    创建数据库/切换数据库
        use 数据库名
    删除数据库
        db.dropDatabase()
    显示当前存储位置所有的数据库
        show dbs
表操作
    显示当前存储位置所有的表
        show collections
    创建表/集合
        db.createCollection("表/集合 名")
    删除表
        db.col.drop()
```

## 增

```
插入数据
	db.表名.insert(bson)
	如果表不存在会直接创建表并把数据写入
```

## 删

```
从头开始删除
db.col.deleteOne(条件) 删除一条
db.col.deleteMany（条件）删除符合条件的全部数据
```

## 改

```
https://www.runoob.com/mongodb/mongodb-update.html
```

## 查

```
查找当前表中所有的数据
	db.col.find(查询条件bson)[.pre]		.pre格式化显示

等于 	{<key>:<value>} 	db.col.find({"by":"菜鸟教程"}).pretty() 	where by = '菜鸟教程'
小于 	{<key>:{$lt:<value>}} 	db.col.find({"likes":{$lt:50}}).pretty() 	where likes < 50
小于或等于 	{<key>:{$lte:<value>}} 	db.col.find({"likes":{$lte:50}}).pretty() 	where likes <= 50
大于 	{<key>:{$gt:<value>}} 	db.col.find({"likes":{$gt:50}}).pretty() 	where likes > 50
大于或等于 	{<key>:{$gte:<value>}} 	db.col.find({"likes":{$gte:50}}).pretty() 	where likes >= 50
不等于 	{<key>:{$ne:<value>}} 	db.col.find({"likes":{$ne:50}}).pretty() 	where likes != 50

AND
	db.col.find({key1:value1, key2:value2}).pretty()
	
OR
	db.col.find({$or: [{key1: value1}, {key2:value2}]}).pretty()
	
查询单字段	
	db.col.find({},{字段名：0或者1，...})   0是不显示，1是显示
```

## 排序

```
db.col.find().sort({KEY:1/-1})
1 为升序排列，而 -1 是用于降序排列
```

## 设计数据表格式

```
设计表的格式
const userSchema = new mongoose.Schema({
	列名 : {
        type:xxx 数据类型,		!必填!	
        	String(字符串) 
        	Date(日期) 
        	mongoose.Schema.Types.ObjectId(表关联id)
        其他选项
        required:true 或 false 是否为空,
        default:xxx 默认值,
        ref:是 mongoose.model('表名', userSchema) 第一个参数.
           例子:表关联id type:mongoose.Schema.Types.ObjectId		
	}
})

建表
const user = mongoose.model(表名,userSchema表的格式)
导出
module.exports = user
```

## node操作数据库

```
const mongoose = require("mongoose");			   //引入

mongoose.connect("mongodb://127.0.0.1:27017/数据库名字",{ useNewUrlParser: true },err=>{
	
};		//连接数据库

mongoose.connection.once("open",function () {		//只监听一次打开
    console.log("连接成功")
})

mongoose.connection.once("error",function () {		//只监听一次错误
    console.log("连接失败")
})


在用的地方先引入
const user = require('xxxxxx')
增
	user.create(bson,(err,data)=>{})
	监听错误方法
	user.create(bson,(err,data)=>{})
	user.create(bson).then(fn).catch(fn)

删
	user.deleteOne(条件,(err,data)=>{})		删除靠前匹配bson的一条数据
	user.deleteMany(条件,(err,data)=>{})		删除匹配bson的全部数据
	
改
	重点:数组的修改
	user.updateteOne
	user.updateteMany
	user.findByIdAndUpdate	通过查找id修改
	https://www.runoob.com/mongodb/mongodb-update.html
	save()能改变查找到的数据
	
	例子
	        content.findOne({_id:req.query.contentId}).populate('author').then((msg1)=>{
            msg1.views++
            msg1.save().then((data)=>{
                //msg1中的views数据就会修改并保存到data里
                })
            })
        })

查
	user.findOne()[.then(msg)]		查找一条	找不到返回undefined
	user.findOne().select('字段名')[.then()]		查找一条只显示一个字段	多个值用空格隔开
	user.find()	[.then(msg)]			查找多条	找不到返回[]
	user.find().select('字段名')[.then()]		查找多条只显示一个字段	多个值用空格隔开
	
	or
		user.find( $or: [{key1: value1}, {key2:value2}])
		
	and
		user.find({key1:value1, key2:value2}).pretty()
		
	in	只需满足[ ]内的某一个值即可
		user.find( col:{$in:[key1: value1]...})
		
	all	必须满足[ ]内的所有值	
		user.find( col:{$all:[key1: value1]...})
		
统计	
	user.countDocumentCount((err,data)=>{})
	user.countDocuments({key1:value1},(err,data)=>{})	按照条件查找
	
截取查询
	user.find().skip(0).limit(5).exec((err,data)=>{})
	skip	从第几条开始
	limit	查找多少条

排序
	user.find().sort(1或者-1)
	1 为升序排列，而 -1 是用于降序排列

自动查找关联的表里的数据
	user.find().populate('查找数据中关联的属性','查找关联属性关联的表里的什么属性').exec((err,data)=>{})
	可以写多个属性xxx.find().populate('xxx yyy','zzz mmm')
	
	
	user.find().populate({
		path:查找数据中关联的属性
		select:查找关联属性关联的表里的什么属性
		sort:
		ski:
		populate:		多层关联查找
	}).exec((err,data)=>{})
	
	例子: 
	xxx.find().populate('author category','username name')
	xxx.find().populate([{path:'author',select:'username'},{path:'category',select:'name'}])
	
	{ time: 2019-06-05T10:30:51.451Z,
    _id: 5cf79a1ac03eaf1eb09ed2e3,
    category: { _id: 5cf20de1d1d5570d546e720a, name: 'css' },
    title: 'node.js初见4',
    description: '123',
    content: '123',
    author: { _id: 5cefa6fa58a3215154129a32, username: 'admin' },
    __v: 0 }
```

