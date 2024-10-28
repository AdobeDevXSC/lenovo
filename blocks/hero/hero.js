import { makeVideo } from '../../scripts/scripts.js';
import { decorateIcons } from '../../scripts/aem.js';

export default async function decorate(block) {
  decorateIcons(block);
  
  if (Object.values(block.classList).includes('video')) {
    const videoSrc = block.querySelector('div > a');

    if(videoSrc.href.includes(window.hlx.codeBasePath)) {
      videoSrc.href = videoSrc.text;
    }

    makeVideo(block.querySelector('div'), videoSrc.href);
    videoSrc.remove();

	if(block.classList.contains('story')){
		const backBtn = document.createElement('a');
		backBtn.innerText = '< Back to all customer stories';
		backBtn.href = "https://main--lenovo--adobedevxsc.aem.live/"
		block.append(backBtn);
	}
  }
}