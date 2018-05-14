function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService = new ImageService()
	imageService.getImage(setImage);
	function setImage(res) {
		var pic = res.url
		if (pic == res.large_url) {
			document.body.style.backgroundImage = `url('${res.large_url}')`
		}
		else
			document.body.style.backgroundImage = `url('${pic}')`
	}
}


