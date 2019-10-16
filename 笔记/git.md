## 签名

```
用于区分不同开发人员身份
```

### 级别优先级

```
就近原则:项目级别优先于系统用户级别,二者都有时采用项目级别
如果只有系统用户级别的签名,就以系统用户级别的签名
二者都没有不允许
```

### 项目级别/仓库级别

```
git config user.name xxxxx
git config user.email xxxxx@xx.com

信息保存在当前目录的.git/config里面
```

### 系统用户级别

```
git config --global user.name xxxxx
git config --global user.email xxxxx@xx.com

cd ~	切换到家目录
信息保存在家目录.gitconfig
```

## git指令

### 查看git状态

```
git status
```

### 添加暂存区

```
git add 文件名
```

### 提交操作

```
git commit -m "commit message" 文件名
```

### 删除操作

```
rm 文件名
```

### 查看历史记录

```
git log		最详细		//且能显示过去
git log --pretty=oneline	索引值(哈希值) 描述 文件名 操作
git log --oneline		索引值(短哈希) 描述 文件名 操作	//只能显示到当前
git reflog 		索引值(短哈希) HEAD@{移动到当前版本需要多少步} 描述 文件名 操作 
```

### 前进后退版本

#### 基于索引值前进后退版本

```
git reset --hard [索引值(短哈希)]
可以前进后退任意版本
```

#### 使用^后退版本

```
git reset --hard HEAD^
后退一步
```

#### 使用~后退版本

```
git reset --hard HEAD~n
后退n步
```

#### reset参数 

##### --hard 

```
--soft	仅仅在本地库移动HEAD指针
```

##### --soft 

```
--mixed	在本地库移动HEAD指针
		重置暂存区	
```

##### --mixed

```
--hard	在本地库移动HEAD指针
		重置暂存区
		重载工作区
```

### 删除文件找回

```
前提:删除前,文件存在时的状态提交到了本地库
操作:git reset --hard[指针位置]
    删除操作已经提交到本地库:指针位置指向历史记录
    删除操作尚未提交到本地库:指针位置使用HEAD
```

### 比较命令

```
git diff	比较当前所有文件
git diff 文件名	将工作区中的文件和暂存区进行比较
git diff HEAD 文件名	将工作区中的文件和本地库历史记录
```

## 分支

```
同时并行推进多个功能开发,提高开发效率
各个分支在开发过程中,如果某一个分支开发失败,不会对其他分支有任何影响,失败的分支删除重新开始即可
```

### 创建分支

```
git branch [分支名]
```

### 查看分支

```
git branch -v
```

### 切换分支

```
git checkout [分支名]
```

### 合并分支

```
第一步:切换到接受修改的分支(被合并,增加新内容)上
	git checkout [分支名]
	如:要合并到主干上面时就切换master上

第二步:执行merge命令
	git merge [有新内容的分支名]
```

### 解决合并冲突

```
冲突表现
<<<<<<< HEAD
hhhhhhhhhh edit by hot_fix
=======
>>>>>>>
hhhhhhhhhh edit by master

第一步:编辑文件,删除特殊符号
第二步:把文件修改到满意的程度,保存退出
第三步:git add [文件名]
第四步:git commit -m "日志信息"
	注意:此时commit一定不能带具体文件名
```

## 远程库

### 创建远程库

```
在github上创建一个新的远程库
```

### 查看远程库地址别名

```
git add remote -v
```

### 保存远程库地址别名

```
git remote add [远程库别名] [远程库地址]
```

### 推送远程库

```
git push [远程库别名] [分支]
```

### 克隆远程库

```
git clone [远程库地址]
```

### 拉取远程库(不安全)

```
git rull [远程库别名] [远程分支]
```

### 拉取远程库(较安全)

```
使用 fetch+merge 不会直接覆盖本地文件
可以查看内容再做合并
git fetch [远程库别名] [远程分支]
git merge [远程库别名/远程分支]
```

### 协同开发时冲突的解决

```
如果不是基于github远程库的最新版所做的修改,不能推送,必须先拉取
拉取下来后如果进入冲突状态,则按照"分支冲突解决"操作解决即可
```

