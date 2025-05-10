
	const images = [
            'images/gallery/1.png',
            'images/gallery/2.png',
            'images/gallery/3.png',
            'images/gallery/4.png',
            'images/gallery/5.png',
            'images/gallery/6.png',
            'images/gallery/7.png',
            'images/gallery/8.png',
            'images/gallery/9.png',
            'images/gallery/10.png',
            'images/gallery/11.png',
            'images/gallery/12.png',
            'images/gallery/13.png',
            'images/gallery/14.png',
            'images/gallery/15.png',
            'images/gallery/16.png',
            'images/gallery/17.png',
            'images/gallery/18.png',
            'images/gallery/19.png',
            'images/gallery/20.png',
            'images/gallery/21.png',
            'images/gallery/22.png',
            'images/gallery/23.png',
            'images/gallery/24.png',
            'images/gallery/25.png',
            'images/gallery/26.png',
            'images/gallery/27.png',
            'images/gallery/28.png',
            'images/gallery/29.png',
            'images/gallery/30.png',
            'images/gallery/31.png',
            'images/gallery/32.png',
            'images/gallery/33.png',
            'images/gallery/34.png',
            'images/gallery/35.png',
            'images/gallery/36.png',
            'images/gallery/37.png',
            'images/gallery/38.png',
            'images/gallery/39.png',
            'images/gallery/40.png',
            // Add more manually
        ];

        const container = document.getElementById('imageScroll');
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            container.appendChild(img);
        });
		// Auto-scroll logic
        let scrollAmount = 1;

        function autoScroll() {
            container.scrollLeft += scrollAmount;
            // When it reaches end, go back to start
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                container.scrollLeft = 0;
            }
        }

        // Start auto scroll
        setInterval(autoScroll, 5); // smaller = faster
        