;(function() {
    let menuLinks = document.querySelectorAll(".menu__link");
    addToggleActiveMenuLinks(menuLinks);        
    
    const srcSliderImages = ['assets/images/slider image 1.png', 'assets/images/slider image 2.png'];
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
    // addClickSliderButtons(sliderButtons); 

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

                document.querySelector(".burger").classList.remove('burger--burger');
                document.querySelector(".header").classList.remove('header--burger');
                document.querySelector(".logo").classList.remove('logo--burger');
                document.querySelector(".menu").classList.remove('menu--burger');
            });	
        }
    }

    function addClickSliderButtons(sliderButtons) {
        for (let i = 0; i < sliderButtons.length; i++) {
            let sliderButton = sliderButtons[i];      
            sliderButton.addEventListener("click", function() {
            if (cimage.style.background == 'url("assets/images/slider image 1.png") no-repeat center/contain') {
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
        describe = describe ? 'Описание: ' + '' + describe : 'Без описания';
        let notification = document.createElement('div');
        notification.innerHTML = 'Письмо отправлено<br>' + subject + '<br>' + describe;
        document.body.appendChild(notification);   
        let button = document.createElement('button');
        notification.appendChild(button);   
        button.addEventListener("click", function() {
            notification.remove();
            document.querySelectorAll('input, textarea').forEach(element => {
                element.value = '';
            });
        });
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
        notification.style.lineHeight = 30 + 'px';
        notification.style.maxWidth = 610 + 'px';
        notification.style.padding = 20 + 'px';
        notification.style.position = 'fixed';
        notification.style.wordBreak = 'break-all';
        notification.style.zIndex = '1000';  
        notification.style.left = (document.documentElement.clientWidth - notification.clientWidth) / 2 + 'px';        
        notification.style.top = (document.documentElement.clientHeight - notification.clientHeight) / 2 + 'px';        
    }      

    let lbutton = document.querySelector('.slider__button');
    let rbutton = document.querySelector('.slider__button--direction--right');
    let arrows = document.querySelectorAll('.slider__button');
    let limage = document.querySelector('.slider__image--left');
    let cimage = document.querySelector('.slider__image--center');
    let rimage = document.querySelector('.slider__image--right');
    let timerId = setTimeout(() => {
        rbutton.click();
    }, 500000000);
    cimage.style.background = 'url("' + srcSliderImages[srcSliderImagesIndex] + '") no-repeat center/contain';        
    arrows.forEach(arrow => {
        arrow.addEventListener('click', function () {    
            arrows.forEach(arrow => {
                arrow.disabled = 'true';
            });               
            clearTimeout(timerId);             
            if (arrow.classList.contains('slider__button--direction--right')) {
                srcSliderImagesIndex == 0 ? srcSliderImagesIndex = srcSliderImages.length - 1 : srcSliderImagesIndex--;
                rimage.style.background = 'url("' + srcSliderImages[srcSliderImagesIndex] + '") no-repeat center/contain';
                cimage.style.transform = 'translateX(-100%)';
                rimage.style.transform = 'translateX(-100%)';
                cimage.style.transition = 'transform linear 1s';
                rimage.style.transition = 'transform linear 1s'; 
                iscreen.style.transform = 'translateX(-1020px)'; 
                iscreenSecond.style.transform = 'translateX(-1020px)';
                iscreen.style.transition = 'transform linear 1s';
                iscreenSecond.style.transition = 'transform linear 1s'; 
                ibutton.style.border = 'none';
                ibutton.style.cursor = 'auto';
                ibuttonSecond.style.border = 'none';
                ibuttonSecond.style.cursor = 'auto';            
            } else {
                srcSliderImagesIndex == srcSliderImages.length - 1 ? srcSliderImagesIndex = 0 : srcSliderImagesIndex++;
                limage.style.background = 'url("' + srcSliderImages[srcSliderImagesIndex] + '") no-repeat center/contain';
                limage.style.transform = 'translateX(100%)';
                cimage.style.transform = 'translateX(100%)';
                limage.style.transition = 'transform linear 1s';
                cimage.style.transition = 'transform linear 1s';  
                iscreen.style.transform = 'translateX(1020px)'; 
                iscreenSecond.style.transform = 'translateX(1020px)'; 
                iscreen.style.transition = 'transform linear 1s';
                iscreenSecond.style.transition = 'transform linear 1s'; 
            }          
        });      
        arrow.addEventListener('click', function () {       
            timerId = setTimeout(() => {
                rbutton.click();
            }, 5000);                     
            if (arrow.classList.contains('slider__button--direction--right')) {
                setTimeout(() => {
                    cimage.style.transform = 'translateX(0)';
                    rimage.style.transform = 'translateX(0)';
                    cimage.style.transition = '';
                    rimage.style.transition = ''; 
                    cimage.style.background = rimage.style.background; 
                    arrows.forEach(arrow => {
                        arrow.disabled = '';
                    });  
                    turnPhones();
                }, 1000);   
            } else {
                setTimeout(() => {
                    limage.style.transform = 'translateX(0)';
                    cimage.style.transform = 'translateX(0)';
                    limage.style.transition = '';
                    cimage.style.transition = '';      
                    cimage.style.background = limage.style.background;
                    arrows.forEach(arrow => {
                        arrow.disabled = '';
                    });  
                    turnPhones();                 
                }, 1000);                             
            }          
        });           
        
    });

    function turnPhones() {        
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
    }


    let anchors = document.querySelectorAll(".anchor");
    document.addEventListener("scroll", addSetActiveMenuLink);
    window.onload = addSetActiveMenuLink();
    
    function addSetActiveMenuLink() {
        anchors.forEach(element => {
            document.querySelector('a[href="#' +  element.getAttribute('id')).classList.remove("menu__link--active");
            let kostyl = element.getAttribute('id') == 'contact' ? 89 : 0; 
            if ((element.parentNode.offsetTop + element.offsetTop - kostyl <= pageYOffset) && 
                (pageYOffset < element.parentNode.offsetTop + element.offsetTop + element.parentNode.offsetHeight)) {
                document.querySelector('a[href="#' +  element.getAttribute('id')).classList.add("menu__link--active");
                if (kostyl) {
                    document.querySelector('a[href="#about').classList.remove("menu__link--active");
                }
            }
        });
    }

    document.querySelector(".burger").addEventListener('click', function () {
        event.target.classList.add('burger--burger');
        document.querySelector(".header").classList.add('header--burger');
        document.querySelector(".logo").classList.add('logo--burger');
        document.querySelector(".menu").classList.add('menu--burger');
    })
})();