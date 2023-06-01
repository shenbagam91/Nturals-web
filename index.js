const numbers = document.querySelectorAll('.count');
const speed = 200; 

numbers.forEach(time => {
	const updateCount = () =>
	 {
		const target = +time.getAttribute('data-target');
		const count = +time.innerText;

		
		const inc = target / speed;

		 //console.log(inc);
		 //console.log(count);

		// Check if target is reached
		if (count < target) 
         {
		
            time.innerText = count + inc;
		
		 	setTimeout(updateCount, 5);
		 }
          else {
            time.innerText = target;
		 }
	};

	updateCount();
});