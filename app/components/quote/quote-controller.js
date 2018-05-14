function QuoteController(){
	var qs = new QuoteService()
	qs.getQuote(drawQuote)
	function drawQuote(res){
		var template = ''
		template =`
		<p>${res.quote}</p>
		`
		document.getElementById('quote').innerHTML = template
	}
	
}
