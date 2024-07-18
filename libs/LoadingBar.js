class LoadingBar{
	constructor(options){
		this.domElement = document.createElement("div");
		this.domElement.style.position = 'fixed';
		this.domElement.style.top = '0';
		this.domElement.style.left = '0';
		this.domElement.style.width = '100%';
		this.domElement.style.height = '100%';
		this.domElement.style.background = options.backgroundColor || '#f2b8ff'; // Change background color
		this.domElement.style.opacity = '0.7';
		this.domElement.style.display = 'flex';
		this.domElement.style.flexDirection = 'column'; // Ensure text and bar are stacked vertically
		this.domElement.style.alignItems = 'center';
		this.domElement.style.justifyContent = 'center';
		this.domElement.style.zIndex = '1111';

		// Create and style text element
		this.textElement = document.createElement("div");
		this.textElement.style.color = options.textColor || '#fff';
		this.textElement.style.marginBottom = '20px'; // Add some space between text and bar
		this.textElement.innerText = options.text || 'Lets Experience This Together';
		this.domElement.appendChild(this.textElement);

		const barBase = document.createElement("div");
		barBase.style.background = '#aaa';
		barBase.style.width = '50%';
		barBase.style.minWidth = '250px';
		barBase.style.borderRadius = '10px';
		barBase.style.height = '15px';
		this.domElement.appendChild(barBase);

		const bar = document.createElement("div");
		bar.style.background = '#22a';
		bar.style.width = '50%';
		bar.style.borderRadius = '10px';
		bar.style.height = '100%';
		bar.style.width = '0';
		barBase.appendChild(bar);

		this.progressBar = bar;
		document.body.appendChild(this.domElement);
		
		function onprogress(delta){
			const progress = delta*100;
			loader.progressBar.style.width = `${progress}%`;
		}
	}

	set progress(delta){
		const percent = delta*100;
		this.progressBar.style.width = `${percent}%`;
	}

	set visible(value){
		if (value){
			this.domElement.style.display = 'flex';
		}else{
			this.domElement.style.display = 'none';
		}
	}

	// Method to set the loading text dynamically
	set text(value){
		this.textElement.innerText = value;
	}
}

export { LoadingBar };
