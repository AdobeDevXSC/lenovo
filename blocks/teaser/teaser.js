export default function decorate(block) {
	const blockImages = block.querySelectorAll('picture');

	// if(blockImages){
	// 	// media query match that indicates mobile/tablet width
	// 	const isDesktop = window.matchMedia('(min-width: 767px)');

	// 	function toggleImage() {
	// 		const mobileImage = blockImages[1];
	// 		const desktopImage = blockImages[0];
			
	// 		if(isDesktop.matches){
	// 			mobileImage.closest('div').className = 'hidden';
	// 			desktopImage.closest('div').className = '';
	// 		} else {
	// 			desktopImage.closest('div').className = 'hidden';
	// 			mobileImage.closest('div').className = ''
	// 		}
	// 	}
	// 	toggleImage();
	// 	isDesktop.addEventListener('change', () => toggleImage());
	// }

	if(block.classList.contains('hidden-form')){
		const blockHeadingDiv = block.querySelector('div')
		blockHeadingDiv.classList.add('visible-cta')

		const hiddenDiv = document.createElement('div')
		hiddenDiv.classList.add('hidden-content')

		const paragraph = block.querySelector('p');
		const marketingDisclosure = paragraph.outerHTML;
		paragraph.remove();

		hiddenDiv.innerHTML = `
			<form>
				<div class="form-row">
					<input placeholder="First Name">
					<input placeholder="Last Name">
				</div>
				<div class="form-row">
					<input placeholder="Email">
					<input placeholder="Company Name">
				</div>
				<div class="form-row">
					<input placeholder="Title">
					<input placeholder="Describe your business success story">
				</div>
				<div class="checkbox-wrapper">
					<input type="checkbox"> 
					${marketingDisclosure}
				</div>
				<button>Send</button>
			</form>
		`
		
		const ctaButton = document.createElement('button');
		ctaButton.innerText = 'Share success story';


		const toggleForm = () => {
			console.log('click')
			hiddenDiv.classList.toggle('visible');
		}
		
		ctaButton.addEventListener("click", toggleForm);		
		
		blockHeadingDiv.append(ctaButton);
		blockHeadingDiv.append(hiddenDiv);
	}
  }