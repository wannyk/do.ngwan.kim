$.ajax({
	url: '/instagram/recent.json',
}).done(function(data) {
	if (console && console.log) {
		console.log(data);
	}
	var delay = 500;
	for (var instance of data.data) {
		$('<img src="'+instance.images.low_resolution.url+'" width="'+instance.images.low_resolution.width+'" height="'+instance.images.low_resolution.height+'">').hide().appendTo('#instagram_photos').delay(delay).fadeIn();
		delay += 100;
	}
});
