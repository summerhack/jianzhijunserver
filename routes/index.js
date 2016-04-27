var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
// var Job = mongoose.model('Job');
// var dateFormat = require('dateformat');

// //切割url关键字函数
// var getUrlParms = function(url) {
//     var args=new Object();   
//     var query=url;//获取查询串   
//     var pairs=query.split("&");//在&号处断开   
//     for(var i=0;i<pairs.length;i++) {   
//         var pos=pairs[i].indexOf('=');//查找name=value   
//             if(pos==-1)   continue;//如果没有找到就跳过   
//             var argname=pairs[i].substring(0,pos);//提取name   
//             var value=pairs[i].substring(pos+1);//提取value   
//             args[argname]=unescape(value);//存为属性   
//     }
//     return args;
// }
// //对象遍历函数,获取目标字符串在对象中的值
// var getValueInObj = function(obj,string) {
// 	for(i in obj) {
// 		if(i == string) {
// 			return obj[i];
// 		}
// 	}
// }
// //对象遍历函数，剔除传入参数在对象中值为空的key，用剩余key构建新对象
// var newUseObj = function(obj,array) {
// 	var newObj = obj;
// 	for(i in newObj) {
// 		for(n in array) {
// 			if(array[n] == i){
// 				delete newObj[i];
// 			}
// 		}
// 	}
// 	return newObj;
// }
// //


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('helloworld');
});

router.get('/test',function(req,res,next) {
	res.send({
	'page1':
	[{
	'job' : '服务员',
	'company' : '星火酒店',
	'jobType' : '餐饮/服务',
	'time' : '4.18-5.18',
	'distance' : {
		'longitude' : 45.334677,
		'atitude' : 125.44444	
		}
	},{
	'job' : '发传单',
	'company' : '樱花日语',
	'jobType' : '教育/推广',
	'time' : '4.19-4.20',
	'distance' : {
		'longitude' : 34.7859599,
		'atitude' : 136.887773
		}
	},{
	'job' : '扫二维码',
	'company' : '宁波银行',
	'jobType' : '金融/推广',
	'time' : '4.19',
	'distance' : {
		'logitude' : 35.444445,
		'atitude' : 139.45732
		}
	}]
	})
});

// router.get('/job',function(req,res,next) {	
// 	var originalUrl = /(?!((.*)\?))(.*)/.exec(req.originalUrl),//剔除/test?
// 		searchData = getUrlParms(originalUrl[0]),//转化为obj
// 		sortKey = searchData.sort || 'newDate', //存入排序类型
// 		job = searchData.jobType || '',//存入jobType
// 		placeCode = searchData.place || 0,//存入地区
// 		time = searchData.time || '',//存入time
// 		topMore = searchData.topMore || '',//存入上拉ID
// 		endMore = searchData.endMore || '';//存入下拉ID
		
// 	//变量赋值
// 	var	queryObj = newUseObj(searchData,['jobType','place','time','sort','endMore','topMore']),//剔除sort&&loadmore
// 		sortType = 'publishDate',//默认按时间排序
// 		sortWay = -1, //默认从大到小
// 		compare = '$lt'; //默认降序
	
// 	//处理queryObj
// 	//处理jobType
// 	if(job !== '') {
// 		var type = job,
// 			keyjob = 'jobType.0';
// 		queryObj[keyjob] = type;
// 	};
	
// 	//place处理
// 	if(placeCode !== 0) {
// 		var keyplace = 'place.code';
// 		queryObj[keyplace] = Number(placeCode); 	
// 	};
// 	//time处理
// 	//处理time，存入minDate&&maxDate
// 	if(time !== '') {
// 		var minDate = time[0],
// 			maxDate = time[1];
// 		var keytime1 = 'time.0';
// 		queryObj[keytime1] = { '$lte' : maxDate };
// 		var keytime2 = 'time.1';
// 		queryObj[keytime2] = { '$gte' : minDate };	
// 	}
	
	
// 	//sort处理,根据排序类型选择关键字
// 	if(sortKey) {
// 			switch(sortKey){
// 				case 'nearby':
// 					sortType = '';
// 					sortWay = 1;
// 					compare = '$gt';
// 					break;
// 				case 'highPrice':
// 					sortType = 'priceState';
// 					sortWay = -1;
// 					compare = '$lt';
// 					break;
// 				case 'newDate':
// 					sortType = 'publishDate';
// 					sortWay = -1;
// 					compare = '$lt';
// 					break;
// 			}
// 	}
	
// 	//加载处理,当此请求为load endmore 或load topmore
// 	if(topMore || endMore) {
// 		var id = endMore;
// 		//若为上拉加载
// 		if(topMore) {
// 			compare = (compare == '$lt')? '$gt' : '$lt';//topmore时取反
// 			id = topMore;  
// 		}
// 		//寻找此id排序值
// 		var condition = {};
// 		condition[sortType]=1;//{sortType:1}
// 		Job.find({_id : id},condition,function(err,docs){
// 				console.log(JSON.stringify(docs));
// 				var target = docs[0].get(sortType);
// 				// if(sortType == 'publishDate'){
// 				// 	var sortTag= target
// 				// }else{
// 				// 	var sortTag = target
// 				// } 
// 				sortTag = target;
				
// 				//在queryObj中添加sortType对象
// 				queryObj[sortType] = {};
// 				queryObj[sortType][compare] = sortTag
				
// 				//创建sortObj
// 				var sortObj={};
// 				sortObj[sortType] = sortWay;

				
// 				//取出数据
// 				console.log('queryObj-load: '+JSON.stringify(queryObj));
// 				console.log('sortObj: '+JSON.stringify(sortObj));
// 				Job.find(queryObj,null,{sort:sortObj,limit:5},function(err, docs){
// 					if (err) {
// 						console.log('err:',err);
// 						return;
// 					};
// 					var sendData=docs
// 					res.send(sendData);
// 					return
// 				})
// 		});
// 	}else{
// 		//创建sortObj
// 		var sortObj={};
// 		sortObj[sortType] = sortWay;
		
// 		//取出数据
// 		console.log('queryObj: '+JSON.stringify(queryObj));
// 		console.log('sortObj: '+JSON.stringify(sortObj));
// 		Job.find(queryObj,null,{sort:sortObj,limit:5},function(err, docs){
// 			if (err) {
// 				console.log('err:',err);
// 				return;
// 			};
// 			var sendData=docs;
// 			res.send(sendData);
// 			return
// 		})
// 	}
// })

// router.get('/jobdb',function(req,res,next) {
// 	Job.find({},function(err, docs){
// 		if (err) {
// 			console.log('err:',err);
// 			return;
// 		};

// 		res.send(docs);
// 	})

// })
module.exports = router;
