var modal = document.getElementById('modal')


setTimeout(function popup(){modal.style.display ='block';
		}, 2000); 

var close = document.getElementById('close')

close.addEventListener ('click', closeout)

function closeout(){modal.style.display = 'none';}

