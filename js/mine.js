// ****************** Sidebar ******************
let sidebarMenueWidth = $('.sidebar .sidebar-menu').outerWidth(true);
$('.sidebar').animate( {left: `-${sidebarMenueWidth}` });
console.log(sidebarMenueWidth);

$('.open-sidebar').click(function () { 
    if ($('.sidebar').css('left') == '0px') {
        $('.sidebar').animate( {left: `-${sidebarMenueWidth}`}, 500 )
        $('.open-sidebar').addClass('fa-bars')
        $('.open-sidebar').removeClass('fa-close')
    }
    else{
        $('.sidebar').animate({left: '0px'}, 500)
        $('.open-sidebar').removeClass('fa-bars')
        $('.open-sidebar').addClass('fa-close')
    }
});



// ****************** Slidedown ******************
$('.slidedown h3').click(function (e) {
    // this == e.target
    console.log(this);
    // مسؤولة عن انها تشوف اي ديف غير الى تبع الهيدير الحالى وتخفيه
    $('.slidedown div').not($(e.target).next()).slideUp(1000);
    // مسؤولة عن انها تشوف الديف بتاع الهيدير الحالى لو موجود تشيله ولو مختفى تضيفه
    $(e.target).next().slideToggle(1000);
})

let count= 0;
// ****************** Slidedown ******************
$('.contact textarea').keyup(function (e) {     
    count++;
    if(count >= 100){
        console.log(`count == ${count}`);
        $('.contact label').text(`Your available character finished !`);
        $('.contact label').css('color','#dc3545');
        $('.contact textarea').css('boxShadow','0 0 5px 2px green');
    }
});

// ****************** Timer countdown ******************
let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

setInterval(() => {
    let now= new Date().getTime();
    // console.log(now);

    let distanceBetweenTwoDates= countDownDate - now;

    // console.log(distanceBetweenTwoDates);

    // calculate hours, minutes and seconds from the distanceDate by Math.floor_function to get numbers < 1
    let days= Math.floor( distanceBetweenTwoDates / (1000 * 60 * 60 * 24) );
    let hours= Math.floor( (distanceBetweenTwoDates % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
    let minutes= Math.floor( (distanceBetweenTwoDates % (1000 * 60 * 60)) / (1000 * 60));
    let seconds= Math.floor( (distanceBetweenTwoDates % (1000 * 60)) / 1000);

    $('.count .days').text(`${days} D`);
    $('.count .hours').text(`${hours} h`);
    $('.count .minutes').text(`${minutes} m`);
    $('.count .seconds').text(`${seconds} s`);

}, 1000);