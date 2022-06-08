const header_sticky = document.querySelector('.header-top');
const icon = document.querySelectorAll('.icon-fill');

const logoFill = './img/onetouch.svg'

const menuBar = document.querySelector('.menu-bar-icon')

const logo = document.querySelector('.logo')
const backToTop = document.querySelector('.back-to-top')
const searchIcon = document.querySelector('.search-icon')
const search = document.querySelector('.search-form')

if (header_sticky) {
    searchIcon.addEventListener('click', () => {
        search.classList.toggle('active')
    })

    menuBar.addEventListener('click', () => {
        menuBar.classList.toggle('active')
    })

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            header_sticky.classList.add("active")
            icon.forEach((item) => {
                item.classList.add('scroll-fill')
            })
            if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
                backToTop.classList.add('active')
            } else {
                backToTop.classList.remove('active')

            }
            logo.src = logoFill
        } else {
            header_sticky.classList.remove("active")
            icon.forEach((item) => {
                item.classList.remove('scroll-fill')
            })
            if (!header_sticky.parentElement.classList.contains('header-404')) {
                logo.src = './img/Logo_2.svg'
            }
        }
    });

    backToTop.addEventListener('click', scroll)
}

function scroll() {
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
        window.scrollBy(0, -50);
        var timeout = setTimeout('scroll()', 10);
    } else clearTimeout(timeout);
};


$('.owl-slide-courses').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})
$('.owl-organization-carousel').owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})
$('.banner-slider').owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    singleItem: true,
    items: 1,
    itemsDesktop: true,
    itemsDesktopSmall: true,
    itemsTablet: true,
    itemsMobile: true,
    // dots: false,
    animateOut: 'fadeOut'

})
$('.owl-professor-carousel').owlCarousel({
    loop: true,
    margin: 100,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})
$('.details-slide-courses').owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 3
        }
    }
})
const menuMobile = document.querySelector('.header-top .container .menu-mobile')

if (menuBar) {
    menuBar.addEventListener('click', () => {
        menuMobile.classList.toggle('active')
    })
}

const mbItem = document.querySelectorAll('.header-top .container .menu-mobile .menu-mobile-list .menu-mobile-item')
const subMb = document.querySelectorAll('.header-top .container .menu-mobile .menu-mobile-list .sub-menu-mobile')
if (mbItem) {
    mbItem.forEach((item) => {
        item.addEventListener('click', () => {
            if (!item.classList.contains('active')) {

                mbItem.forEach(item => {
                    item.classList.remove('active')
                })
                subMb.forEach(sub => {
                    sub.classList.remove('show')
                })
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }
        })
    })
}

const menuProfileControl = document.querySelector('.profile-control .main-content-menu .header-menu .menu-bar')
const overlay = document.querySelector('.overlay')
if (menuProfileControl) {
    menuProfileControl.addEventListener('click', () => {
        document.querySelector('.profile-control .sidebar-control').classList.toggle('open-menu')
        document.querySelector('.overlay').classList.toggle('active')
    })
    overlay.addEventListener('click', () => {
        document.querySelector('.profile-control .sidebar-control').classList.remove('open-menu')
        overlay.classList.remove('active')
    })
}

const filter = document.querySelector('.filter-by-cover')
const filterDropdown = document.querySelector('.filter-dropdown')
const filterItem = document.querySelectorAll('.filter-item')
const filterSelect = document.querySelector('.filter-select')

if (filter) {
    filter.addEventListener('click', () => {
        filterDropdown.classList.toggle('active')
    })

    filterItem.forEach(item => {
        if (filterSelect.textContent === item.textContent) {
            item.classList.add('selected')
        }
        item.addEventListener('click', () => {
            filterItem.forEach(item => {
                item.classList.remove('selected')
            })
            filterSelect.textContent = item.textContent
            item.classList.add('selected')
        })
    })
}


// const pagination1 = new tui.Pagination('pagination1', {
//     totalItems: 500,
//     itemsPerPage: 3,
//     visiblePages: 3

// });
const pagination = document.querySelectorAll('.row-pagination')
const prevBtn = document.querySelectorAll('.pag-icon-action-prev')
const nextBtn = document.querySelectorAll('.pag-icon-action-next')
let currentIndex = 0
if (pagination) {
    pag = () => {
        pagination.forEach((pag, index) => {
            const prev = prevBtn[index]
            const next = nextBtn[index]
            const pagNumber = pag.querySelectorAll('.pag-number')
            pagNumber.forEach((item, index) => {
                item.addEventListener('click', () => {
                    currentIndex = index
                    pagNumber.forEach(item => {
                        item.classList.remove('active')
                    })
                    activePag()
                })
            })

            function activePag() {
                for (let i = 0; i <= pagNumber.length; i++) {
                    pagNumber[currentIndex].classList.add('active')
                }
            }
            if (prev) {
                prev.addEventListener('click', () => {
                    currentIndex--;
                    pagNumber.forEach(item => {
                        item.classList.remove('active')
                    })
                    if (currentIndex < 0) {
                        currentIndex = 0
                    }
                    activePag()
                })
            }
            if (next) {
                next.addEventListener('click', () => {
                    currentIndex++;
                    pagNumber.forEach(item => {
                        item.classList.remove('active')
                    })
                    if (currentIndex > pagNumber.length - 1) {
                        currentIndex = pagNumber.length - 1
                    }
                    activePag()
                })
            }
        })

    }
    pag()
}

const numberCount = document.querySelectorAll('.panel-progress-item .progress-count')
if (numberCount) {
    numberCount.forEach(item => {
        let interval = 5000
        let startValue = 0;
        let endValue = parseInt(item.getAttribute('data-count'))

        if (endValue < 100) {
            interval = 500
        }
        let duration = Math.floor(interval / endValue)
        let progress = setInterval(() => {
            startValue += 1;
            item.innerHTML = startValue
            if (startValue == endValue) {
                clearInterval(progress)
            }
        }, duration);
    })
}

const progressRange = document.querySelectorAll('.progress-count-range')
const number = document.querySelectorAll('.details-courses-rate .finish-count .number')
if (progressRange) {
    rangeProgress = () => {
        progressRange.forEach((item, index) => {
            const num = number[index]
            let interval = 2000
            let startValue = 0;
            let endValue = parseInt(item.getAttribute('data-progress'))
            let duration = Math.floor(interval / endValue)
            let progress = setInterval(() => {
                startValue += 1;
                num.innerHTML = `${startValue}%`
                item.setAttribute('style', `width : ${startValue}%`)
                if (startValue == endValue) {
                    clearInterval(progress)
                }
            }, duration);

        })

    }
    rangeProgress()
}


const tabsActive = document.querySelectorAll('.sidebar-menu-item .menu-link.tab-link')
const tabsParent = document.querySelectorAll('.sidebar-menu-item')
if (tabsActive) {
    tabsActive.forEach((tab, index) => {
        const tabPane = tabsParent[index];
        tabsActive.forEach(tab => {
            if (tab.classList.contains('active')) {
                tab.parentElement.classList.add('active')
            }
        })
        tab.addEventListener('click', () => {
            tabsParent.forEach((item) => {
                item.classList.remove('active')
            })
            tabPane.classList.add('active')
            rangeProgress()
            currentIndex = 0
        })
    })
}

const coursesActionFilter = document.querySelectorAll('.suggest-courses-action-filter .select')
const selected = document.querySelectorAll('.suggest-courses-action-filter .select .text-select')
const menuFilter = document.querySelectorAll('.suggest-courses-action-filter .select .menu-filter')
if (coursesActionFilter) {
    coursesActionFilter.forEach((item, index) => {
        const menu = menuFilter[index]
        const select = selected[index]
        item.addEventListener('click', () => {
            menu.classList.toggle('active')
            const menuFilterItem = item.querySelectorAll('.suggest-courses-action-filter .select .menu-filter .filter-item')
            menuFilterItem.forEach(item => {
                if (select.textContent === item.textContent) {
                    item.classList.add('active')
                }
                item.addEventListener('click', () => {
                    menuFilterItem.forEach(item => {
                        item.classList.remove('active')
                    })
                    select.textContent = item.textContent
                    item.classList.add('active')
                })
            })

        })
    })
}