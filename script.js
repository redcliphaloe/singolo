;(function() {
    let menuLinks = document.querySelectorAll(".menu__link");
    addToggleActiveMenuLinks(menuLinks);    
    
    const srcSliderImages = ['assets/images/slider image 01.png', 'assets/images/slider image 02.png'];
    const backgroundColorSliderImages = ['#F06C64', '#648BF0'];
    let srcSliderImagesIndex = 0;
    let slider = document.querySelector(".slider"); 
    let sliderImage = document.querySelector(".slider__image"); 
    let sliderButtons = document.querySelectorAll(".slider__button");
    let ibutton = document.querySelector(".ibutton");
    ibutton.addEventListener('click', function() {
        iscreen.classList.toggle('iscreen--black');                              
    });      
    let iscreen = document.querySelector(".iscreen");
    let ibuttonSecond = document.querySelector(".ibutton--second");
    ibuttonSecond.addEventListener('click', function() {
        iscreenSecond.classList.toggle('iscreen--black');                              
    });        
    let iscreenSecond = document.querySelector(".iscreen--second");
    addClickSliderButtons(sliderButtons); 

    let imageGalleryFilterButtons = document.querySelectorAll(".imageGallery__filterButton");
    addToggleActiveImageGalleryFilterButtons(imageGalleryFilterButtons); 

    let imageGalleryImages = document.querySelectorAll(".imageGallery__image");
    addToggleActiveImageGalleryImages(imageGalleryImages);   
    
    let form = document.querySelector(".form");
    form.addEventListener('submit', formSubmit);     

    function addToggleActiveMenuLinks(menuLinks) {
        for (let i = 0; i < menuLinks.length; i++) {
            let menuLink = menuLinks[i];      
            menuLink.addEventListener("click", function() {
                for (let i = 0; i < menuLinks.length; i++) {
                    menuLinks[i].classList.remove("menu__link--active");
                }        
                menuLink.classList.add("menu__link--active");
            });	
        }
    }

    function addClickSliderButtons(sliderButtons) {
        for (let i = 0; i < sliderButtons.length; i++) {
            let sliderButton = sliderButtons[i];      
            sliderButton.addEventListener("click", function() {
                if (sliderButton.classList.contains('slider__button--direction--right')) {
                    srcSliderImagesIndex == srcSliderImages.length - 1 ? srcSliderImagesIndex = 0 : srcSliderImagesIndex++;
                } else {
                    srcSliderImagesIndex == 0 ? srcSliderImagesIndex = srcSliderImages.length - 1 : srcSliderImagesIndex--;
                }
                sliderImage.src = srcSliderImages[srcSliderImagesIndex];
                slider.style.backgroundColor = backgroundColorSliderImages[srcSliderImagesIndex];
                if (!srcSliderImagesIndex) {
                    ibutton = document.createElement('div');
                    ibutton.classList.add('ibutton');                              
                    slider.appendChild(ibutton);
                    ibutton.addEventListener('click', function() {
                        iscreen.classList.toggle('iscreen--black');                              
                    });                       
                    iscreen = document.createElement('div');
                    iscreen.classList.add('iscreen');
                    slider.appendChild(iscreen);
                    ibuttonSecond = document.createElement('div');
                    ibuttonSecond.classList.add('ibutton', 'ibutton--second');
                    slider.appendChild(ibuttonSecond);  
                    ibuttonSecond.addEventListener('click', function() {
                        iscreenSecond.classList.toggle('iscreen--black');                              
                    });                        
                    iscreenSecond = document.createElement('div');
                    iscreenSecond.classList.add('iscreen', 'iscreen--second');
                    slider.appendChild(iscreenSecond);                      
                } else {
                    ibutton.remove();
                    iscreen.remove();
                    ibuttonSecond.remove();
                    iscreenSecond.remove();
                    
                }
            });	
        }
    }

    function addToggleActiveImageGalleryFilterButtons(imageGalleryFilterButtons) {
        let imageGalleryList = document.querySelector(".imageGallery__list");
        const imageGalleryItems = document.querySelectorAll(".imageGallery__item");

        for (let i = 0; i < imageGalleryFilterButtons.length; i++) {
            let imageGalleryFilterButton = imageGalleryFilterButtons[i];      
            imageGalleryFilterButton.addEventListener("click", function() {
                for (let i = 0; i < imageGalleryFilterButtons.length; i++) {
                    imageGalleryFilterButtons[i].classList.remove("imageGallery__filterButton--active");
                }        
                imageGalleryFilterButton.classList.add("imageGallery__filterButton--active");


                imageGalleryList.innerText = '';
                switch (imageGalleryFilterButton.innerText) {
                    case 'All':
                        for (let index = 0; index < imageGalleryItems.length; index++) {
                            imageGalleryList.appendChild(imageGalleryItems[index]);                            
                        }                    
                        break; 
                    case 'Web Design':
                        for (let index = 1; index < imageGalleryItems.length; index++) {
                            imageGalleryList.appendChild(imageGalleryItems[index]);                            
                        }
                        imageGalleryList.appendChild(imageGalleryItems[0]);
                        break;
                    case 'Graphic Design':
                        for (let index = 2; index < imageGalleryItems.length; index++) {
                            imageGalleryList.appendChild(imageGalleryItems[index]);                            
                        }
                        imageGalleryList.appendChild(imageGalleryItems[0]);
                        imageGalleryList.appendChild(imageGalleryItems[1]);
                        break;
                    case 'Artwork':
                        for (let index = 3; index < imageGalleryItems.length; index++) {
                            imageGalleryList.appendChild(imageGalleryItems[index]);                            
                        }
                        imageGalleryList.appendChild(imageGalleryItems[0]);
                        imageGalleryList.appendChild(imageGalleryItems[1]);
                        imageGalleryList.appendChild(imageGalleryItems[2]);
                        break;                                                                        
                
                    default:
                        break;
                }
            });	
        }
    } 

    function addToggleActiveImageGalleryImages(imageGalleryImages) {
        for (let i = 0; i < imageGalleryImages.length; i++) {
            let imageGalleryImage = imageGalleryImages[i];      
            imageGalleryImage.addEventListener("click", function() {
                for (let i = 0; i < imageGalleryImages.length; i++) {
                    imageGalleryImages[i].classList.remove("imageGallery__image--active");
                }        
                imageGalleryImage.classList.add("imageGallery__image--active");
            });	
        }
    }    

    function formSubmit(event) {
        event.preventDefault();
        let subject = event.target.elements['subject'].value; 
        subject = subject ? 'Тема: ' + subject: 'Без темы';
        let describe = event.target.elements['describe'].value;
        describe = '<pre>' + (describe ? 'Описание: ' + '' + describe : 'Без описания') + '</pre>';
        let notification = document.createElement('div');
        notification.innerHTML = 'Письмо отправлено<br>' + subject + '<br>' + describe;
        let pre = notification.querySelector('pre');
        pre.style.fontFamily = '"Lato", sans-serif';
        pre.style.fontSize = 18 + 'px';
        pre.style.fontWeight = 300;      
        pre.style.lineHeight = 30 + 'px';          
        pre.style.margin = 0;
        document.body.appendChild(notification);   
        let button = document.createElement('button');
        notification.appendChild(button);   
        button.addEventListener("click", function() {notification.remove()});
        button.innerText = 'OK';
        button.style.color = '#2d303a';             
        button.style.borderRadius = 5 + 'px';
        button.style.display = 'block';        
        button.style.fontFamily = '"Lato", sans-serif';
        button.style.fontSize = 18 + 'px';
        button.style.fontWeight = 700;      
        button.style.lineHeight = 30 + 'px';   
        button.style.margin = '10px auto 0';              
        notification.style.backgroundColor = '#2d303a';
        notification.style.border = '1px solid #fff';
        notification.style.borderRadius = 5 + 'px';
        notification.style.boxSizing = 'border-box';
        notification.style.color = '#fff';
        notification.style.fontFamily = '"Lato", sans-serif';
        notification.style.fontSize = 18 + 'px';
        notification.style.fontWeight = 300;
        notification.style.padding = 20 + 'px';
        notification.style.width = 'fit-content';        
        notification.style.left = (document.documentElement.clientWidth - notification.clientWidth) / 2 + 'px';        
        notification.style.lineHeight = 30 + 'px';
        notification.style.position = 'fixed';       
        notification.style.top = (document.documentElement.clientHeight - notification.clientHeight) / 2 + 'px';
        notification.style.zIndex = '1000';        
    }    
})();