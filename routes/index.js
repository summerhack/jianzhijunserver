var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Job = mongoose.model('Job');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('helloworld');
});

router.get('/job',function(req,res,next) {
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
})
router.get('/test',function(req,res,next) {
	console.log('jobType: '+req.query.jobType)



	if(req.query.jobType == 'food') {
		res.send(req)
	}
	if (req.query.jobType == 'bank') {
		res.send('bank')
	};

	next();
})

router.get('/jobdb',function(req,res,next) {
	Job.find({},function(err, docs){
		if (err) {
			console.log('err:',err);
			return;
		};

		res.send(docs);
	})

})
module.exports = router;
