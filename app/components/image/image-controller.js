function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService = new ImageService()
	imageService.getImage(setImage);
	function setImage(res){
		debugger
		var pic = res.url
		document.body.style.backgroundImage = `url('${pic}')`
		debugger
	}


	
	


}


