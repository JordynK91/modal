var modal = document.getElementById('modal')


setTimeout(function popup(){modal.style.display ='block';
		}, 2000); 

var close = document.getElementById('close')

close.addEventListener ('click', closeout)

function closeout(){modal.style.display = 'none';}


var submit = document.getElementById('submit')

submit.addEventListener('click', thankYou)

function thankYou(){thanks.style.display = 'block';
					modaltext.style.display = 'none';
					email.style.display = 'none';
					submit.style.display = 'none'}