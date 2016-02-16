$('.SignUpNow').on('click', function(){
    alert('We are not currently taking sign ups.');
});

	$('.SignUpNow').on('click', changeText)
		function changeText(){
			$('.SignUpNow').text('NNo Sign Ups!');
		};

$('#nparagraph1').hide();

	$('.Readmore1').on('click', function(){
		$('#nparagraph1').slideToggle();
	});

		$('#nparagraph2').hide();

	$('.Readmore2').on('click', function(){
		$('#nparagraph2').slideToggle();
	});


$('#LearnMoreParagraph').hide();
	
	$('#learnmorebutton').on('click', function(){
			$('#LearnMoreParagraph').slideToggle();
	});