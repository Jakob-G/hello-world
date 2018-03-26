const express = require('express');
const hbs = require('hbs')

var app = express();

hbs.registerPartials(__dirname+'/views/partials')

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
	return new Date();
})

hbs.registerHelper('message', (text) => {
	return text.toUpperCase();
})

hbs.registerHelper('square', (num) => {
	var sum = num * num
	return `${num}^2 = ${sum}`;
})

// app.use((request, response, next)=>{
// 	response.render('error.hbs');
// 	next()
// })

app.get('/', (request, response) => {
	response.render('home.hbs',{
		title:'Home Page',
		img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0bkYVaiRhLynuLiJXIjK1R1w8OmH0C3PKvXZub6WWUfNHdvtEw'
	})
});

app.get('/info', (request, response) => {
	response.render('about.hbs',{
		title:'About Page',
		img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rlUFLRgsZ9kWB2DHyelOZdsRn6vXm2HlXKULG5qfYQZVYSrClw'
	})
});

app.get('/404', (request, response) => {
	response.send({
		error: 'Page not found'
	})
})

app.listen(8080, () => {
	console.log('Server is up on the port 8080');
});