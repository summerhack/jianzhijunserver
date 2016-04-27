# JianZhiJun-server-API

##用户信息接口列表
---
####读取接口

| name | info  |
|:----------:|:----------:|
| [/job](#api-job) |  获取兼职讯息 |
| [/jobone](#api-jobone) |  获取单个兼职详细讯息 |

####写入接口
| name | info |
|:----------:|:----------:|
|  Todo | Todo  |


##用户信息接口详情
<a name="api-job">
#### /job  （GET方法）
---
获取兼职讯息
##### 是否需要权限验证
---
暂不需要
####请求参数
---
| 参数名 | 类型 | 必要 | 值 | 说明|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| **类型关键字** |||| 允许多个key |
| key | String | False | 待定 | 暂无此功能 |
| jobType | String| False |  [见附表](#tab-jobType) | -- |
| sex | String | False | all,m,f | -- |
| place | Num | False | [见附表](#tab-place) | -- |
| date | Array | False | [min,max] | 数组中传入Date类型 |
| **排序关键字** |||| 只允许一个排序key |
| sort | String | False | nearby,highPrice,newDate | 暂不支持nearby |
| **加载关键字** |||||
| topMore/endMore | String | False | _id | top/end信息的id值 |

<a name="tab-jobType">
#####附表
---
- jobType 


    - promotion  推广/注册 
    - billing 发单/举牌
    - shopping 促销/导购
    - sale 销售/签单
    - audience 充场/观众
    - survey 调研/问卷
    - customer 话务/客服
    - waiter 店员/服务生
    - tutor 老师/家教
    - model 礼仪/模特
    - arts 演艺/主持
    - agent 校园代理   
    
    
<a name ="tab-place">
- palce
 
 
    - 315100 鄞州区
    - 315040 江东区
    - 315020 江北区
    - 315010 海曙区
    - 待添加
    
    

####调用样例
---
```
/job?sex=all&sort=newDate&place=315100&topMore=571bb065a6852518f72118e4
```
####返回结果
---
- json示例

```
[
    {
        "_id": "571baea0a6852518f72118e2",
        "name": "短期客服",
        "company": "宁波诺丁汉",
        "price": "20/时",
        "place": {
            "code": 315100,
            "city": "NB",
            "district": "鄞州区"
        },
        "date": "Mon Apr 25 2016 20:45:20 GMT-0400 (EDT),Wed Apr 27 2016 20:47:20 GMT-0400 (EDT)",
        "thumbUrl": {
            "ios2x": "138.128.221.194:3000/images/2x/nuodinghan.jpg",
            "ios3x": "138.128.221.194:3000/images/3x/nuodinghan.jpg"
        },
        "distance": {
            "longitude": 46.14544,
            "atitude": 126.97433
        }
    }
]
```

- 错误返回值 (暂无)

| code | msg | info |
|:--:|:--:|:--:|
| -- | --  | -- |

**---**

<a name="api-jobone">
####/jobone  (GET方法)
---
获取此id详细讯息

#####是否需要权限验证
---
暂不需要
####请求参数
---
| 参数名 | 类型 | 必要 | 值 | 说明 |
|:--:|:--:|:--:|:--:|:--:|:--:|
| id | String | True | 值为此讯息id | -- |

####调用样例
---
```
/jobone?id=571bac32a6852518f72118e0
```
####返回结果
---
- json示例
```
  [
    {
        "_id" : ObjectId("571bac32a6852518f72118e0"),
        "name" : "诗朗诵充场",
        "company" : "橘子星球",
        "price" : "50/日",
        "priceState" : 1,
        "place" : {
            "code" : 315020,
            "city" : "NB",
            "district" : "江北区"
        },
        "compType" : "互联网/计算机",
        "date" : [ 
            ISODate("2016-04-24T00:43:20.201Z"), 
            ISODate("2016-04-28T00:47:20.201Z")
        ],
        "jobInfo" : {
            "peopleNum" : 2,
            "countDay" : "日结",
            "time" : "14:00-17:00",
            "sub" : "演出充场",
            "demand" : "按时到达，保持基本礼仪",
            "cutDate" : ISODate("2016-04-24T00:43:20.201Z")
        },
        "distance" : {
            "longitude" : 46.56326,
            "atitude" : 126.45243,
            "detail" : "江北万达旁"
        },
        "sex" : "all",
        "thumbUrl" : {
            "ios2x" : "138.128.221.194:3000/images/2x/juzi.jpg",
            "ios3x" : "138.128.221.194:3000/images/3x/juzi.jpg"
        },
        "imgUrl" : {
            "img" : "138.128.221.194:3000/images/img/juzi.jpg"
        },
        "publishDate" : ISODate("2016-04-17T17:20:11.201Z"),
        "jobType" : [ 
            "audience", 
            "充场/观众"
        ],
        "key" : [ 
            "充场", 
            "观众"
        ]
    }
 ]
```

- 错误返回值 (暂无)

| code | msg | info |
|:--:|:--:|:--:|
| -- | --  | -- |