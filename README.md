# JianZhiJun-server-API

##用户信息接口列表
---
####读取接口

| name | info  |
|:----------:|:----------:|
| [/job](#api-job) |  获取兼职讯息 |

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
| time | Array | False | [min,max] | 数组中传入Date类型 |
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
/job?place=315100&sex=all&newDate=true&topMore=571bad0fa6852518f72118e1
```
####返回结果
---
- json示例

```
{
    "_id" : ObjectId("571bb31aa6852518f72118e7"),
    "name" : "高校校园代理",
    "company" : "易倍特电子",
    "price" : "100/日",
    "priceState" : 2,
    "place" : {
        "code" : 315040,
        "city" : "NB",
        "district" : "江东区"
    },
    "compType" : "通信/电子",
    "time" : [ 
        ISODate("2016-04-19T00:38:20.201Z"), 
        ISODate("2016-04-29T00:48:20.201Z")
    ],
    "distance" : {
        "longitude" : 46.14476,
        "atitude" : 126.97443
    },
    "sex" : "all",
    "thumbUrl" : {
        "2x" : "138.128.221.194:3000/images/2x/yibeite.jpg",
        "3x" : "138.128.221.194:3000/images/3x/yibeite.jpg"
    },
    "publishDate" : ISODate("2016-04-17T23:21:11.201Z"),
    "jobType" : [ 
        "agent", 
        "校园代理"
    ],
    "key" : [ 
        "校园", 
        "代理"
    ]
}
```

- 错误返回值 (暂无)

| code | msg | info |
|:--:|:--:|:--:|
| -- | --  | -- |

