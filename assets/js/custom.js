$(document).ready(function () {
    // Loader JS
    $('.loader-wrapper').fadeOut("slow");

    // Fixed header
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 10) {
    //         $("header").addClass("stickyHeader");
    //     } else {
    //         $("header").removeClass("stickyHeader");
    //     }
    // });

    // Responsive Navbar
    $('.navbar-toggler').click(function () {
        $('.toggle-menu-icon').toggleClass('open');
        $('body').toggleClass('open-menu');
    })
    $("#main-content").click(function () {
        $('.navbar-collapse').removeClass('show');
        $('.toggle-menu-icon').removeClass('open');
        $('body').removeClass('open-menu');
    })

    // Toggle Active class in Nav-link
    $(".nav-link").click(function () {
        if (!$(this).hasClass('active')) {
            $(".nav-link.active").removeClass("active");
            $(this).addClass("active");
        }
    });


    // Grid active class toggle
    $(".grid-btn").click(function () {
        $(".grid-btn").removeClass("active");
        $(".browse-job-card-wrapper").toggleClass("vertical");
        $(this).addClass("active");
    });



});
// custom select
let index = 1;

const on = (listener, query, fn) => {
    document.querySelectorAll(query).forEach(item => {
        item.addEventListener(listener, el => {
            fn(el);
        })
    })
}
// on('click', '.selectBtn', item => {
//     const next = item.target.nextElementSibling;
//     next.classList.toggle('toggle');
//     next.style.zIndex = index++;

// });
on('click', '.option', item => {
    item.target.parentElement.classList.remove('toggle');
    const parent = item.target.closest('.select').children[0];
    parent.setAttribute('data-type', item.target.getAttribute('data-type'));
    parent.innerText = item.target.innerText;

});

$(function () {
    $(".selectBtn").on("click", function (a) {
        let elem = $(this).parent().children('div');
        if (elem.hasClass('toggle')) {
            $('.selectDropdown').removeClass('toggle');
            elem.removeClass('toggle');
        } else {
            $('.selectDropdown').removeClass('toggle');
            elem.addClass('toggle');
        }
        a.stopPropagation()
    });
    $(document).on("click", function (a) {
        if ($(a.target).is(".selectDropdown") === false) {
            $(".selectDropdown").removeClass("toggle");
        }
    });
});
$(function () {
    $("#add-btn").on("click", function (a) {
        window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: "0xF26E1",
              rpcUrls: ["https://rpc.efcglobal.org/"],
              chainName: "Galaxy Network",
              nativeCurrency: {
                name: "Galaxy",
                symbol: "GALAXY",
                decimals: 18
              },
              blockExplorerUrls: ["https://galaxyexplorer.online/"]
            }]
          });
    });
});
function copyText() {
    const element = document.querySelector('#GfGInput');
    element.select();
    element.setSelectionRange(0, 99999);
    document.execCommand('copy');
}