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
#### /job  （GET方法）<a name="api-job">
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
| jobType | String| False |  [见附表](#tab-jobType)  | -- |
| sex | String | False | all,m,f | -- |
| place | String | False | 待定 | 暂无此功能 |
| time | String | False | 待定 | 暂无此功能 |
| **排序关键字** |||| 只允许一个排序key |
| nearby | Bool | False | true | 暂无此功能 |
| highPrice | Bool | False | true | 暂无此功能 |
| newDate | Bool | False | true | -- |
| **加载关键字** |||||
| topMore/endMore | String | False | _id | top/end信息的id值 |

#####附表
---
- jobType <a name="tab-jobType">


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

####调用样例
---
```
/job?jobType=sale&newDate=true&topMore=456328183
```
 ####返回结果
---
- json示例

>     {
        "_id": "5717c81cffd51c0b58a720e4",
        "name": "德芙巧克力超市促销",
        "company": "宁波德芙环城南路店",
        "price": "20/时",
        "compType": "销售/超市",
        "time": "4.2,4.21",
        "sex": "f",
        "thumbUrl": {
            "2x": "138.128.221.194:3000/public/images/2x/defu.jpg",
            "3x": "138.128.221.194:3000/public/images/3x/defu.jpg"
        },
        "publishDate": "2016-04-14T05:12:13.000Z",
        "key": [
            "超市",
            "促销",
            "导购"
        ],
        "distance": {
            "longitude": 47.13426,
            "atitude": 127.58854
        }
    }

- 错误返回值 (暂无)

| code | msg | info |
|:--:|:--:|:--:|
| -- | --  | -- |

