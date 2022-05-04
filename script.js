(function () {

	let a = document.getElementsByTagName('*'),
		 tip, text,
		 base = document.createElement('tooltip');
	
	for (let i = 0; i < a.length; i++) {
		  a[i].onmouseover = function () {
				text = this.getAttribute('tooltip');
				tip = document.createTextNode(text);
				if (text != null) {
						base.innerHTML = '';
						base.appendChild(tip);
						if (document.getElementsByTagName('tooltip')[0]){
							 document.getElementsByTagName('tooltip')[0].remove();
						}
						base.style.top = (event.pageY + 15) + 'px';
						base.style.left = (event.pageX + 15) + 'px';
						document.body.appendChild(base);
				}
	
		  };
		  a[i].onmouseout = function () {
				document.getElementsByTagName('tooltip')[0].remove();
		  };
	}
	
	})();