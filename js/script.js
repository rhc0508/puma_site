var $hamIcon = document.querySelector("header .mypage ul li:nth-child(4)");
var $menu = document.querySelector("header nav");

$hamIcon.addEventListener("click", function(e){
    e.preventDefault();
    var activeMenu = $menu.classList.contains("active");
    console.log(activeMenu);
    if(!activeMenu){
        $menu.classList.add("active");
    }else{
        $menu.classList.remove("active");
    }

});

// section#new //
const $new_arr = [
    {img:"./img/newArrivalBg.jpg", title:"Products Launch", cont:"Stay in the know with the latest drops and upcoming launches, plus early access to PUMA exclusives. Catch it here first."},
    {img:"./img/products/new_01_01.jpg", title:"KING Platinum 21 FG/AG", cont:"Men's Soccer Cleats"},
    {img:"./img/products/new_02_01.jpg", title:"FUSE", cont:"Training Shoes"},
    {img:"./img/products/new_03_01.jpg", title:"Suede RE.GEN", cont:"Sneakers"},
    {img:"./img/products/new_04_01.jpg", title:"Leadcat", cont:"G Sandals"},
    {img:"./img/products/new_05_01.jpg", title:"COOLADAPT", cont:"Women’s Running Tank Top"},
    {img:"./img/products/new_06_01.jpg", title:"Sonora Waist", cont:"BAG 2.0"},
    {img:"./img/products/new_07_01.jpg", title:"High Court Regal Mid", cont:"Women's Sneakers"},
    {img:"./img/products/new_08_01.jpg", title:"Cali Star Rainbow", cont:"Women's Sneakers"},
    {img:"./img/products/new_09_01.jpg", title:"RS-Z Red", cont:"CAMPUS"},
    {img:"./img/products/new_10_01.jpg", title:"MB.01", cont:"BUZZ CITY"},
];

const $cont_wrap = document.querySelector("#new .contents");
for(i in $new_arr){
    // console.log($new_arr[i].img);
    $cont_wrap.innerHTML += `
    <div class="pd_box" style="background-image:url(${$new_arr[i].img})">
        <div class="dark">
            <div class="txt">
                <h3 class="pd_name">${$new_arr[i].title}</h3>
                <p>${$new_arr[i].cont}</p>
                <div class="btn">
                    <button>More</button>
                </div>
            </div>
        </div>
    </div>
    `;
}

// section#energy //
const $energy_arr = [
    {img: "category_01.jpg", h4_txt: "EVERYDAY", p_txt: "BEST FOR: A RUN HERE AND THERE."},
    {img: "category_02.jpg", h4_txt: "COMPETITIVE", p_txt: "BEST FOR: CHASING THE NEXT RACE."},
    {img: "category_03.jpg", h4_txt: "LONG DISTANCE", p_txt: "BEST FOR: RACKING UP THE MILES."},
]

const $energy_contBox = document.querySelector("#energy .wrap .contBox");
for(i=0; i<$energy_arr.length; i++){
    $energy_contBox.innerHTML += `
    <div class="box">
        <div class="img_part" style="background-image:url(./img/${$energy_arr[i].img})"></div>
        <div class="txt_part">
            <h4>${$energy_arr[i].h4_txt}</h4>
            <p>${$energy_arr[i].p_txt}</p>
            <div class="btn">
                <a href="">Shop Now</a>
            </div>
        </div>
    </div>
    `;
}

const $year_arr = [
    {img: "collection_01.jpg", h4_txt: "SOFT ON ANOTHER LEVEL", p_txt: "CLOUDSPUN"},
    {img: "collection_02.jpg", h4_txt: "ESCAPE FROM ROUTINE", p_txt: "PUMA x HELLY HANSEN"},
    {img: "collection_03.jpg", h4_txt: "EMPOWERED PEOPLE. CLEANER PLANET.", p_txt: "PUMA x FIRST MILE"},
]

const $year_contBox = document.querySelector("#year .wrap .contBox");
for(i=0; i<$year_arr.length; i++){
    $year_contBox.innerHTML += `
    <div class="box">
        <div class="img_part" style="background-image:url(./img/${$year_arr[i].img})"></div>
        <div class="txt_part">
            <h4>${$year_arr[i].h4_txt}</h4>
            <p>${$year_arr[i].p_txt}</p>
            <div class="btn">
                <a href="">Shop Now</a>
            </div>
        </div>
    </div>
    `;
}

// #mid_banner .txt_box 반응형
const $origin_txt = "PUMA’s history is packed with nearly 75 years of world records, firsts, and onlys from Abebe Bikila to Bill Rodgers to Sabrina Mockenhaupt to Usain Bolt. In industry years, this makes us faster since forever, and we believe now is the time for us to pick up speed again and spark change from the most sought-after marathon finish lines to local run communities.";
console.log($origin_txt.length); 
const $banner_txt = document.querySelector("#mid_banner .banner .right .txt_box p");
$banner_txt.innerText = $origin_txt;
// console.log($banner_txt.innerText);

if (window.matchMedia('(max-width: 991px)').matches)
{
    if($banner_txt.innerText.length > 246){
        const $ch_txt = $origin_txt.substr(0, 246)+"...";
        // console.log($ch_txt);
        $banner_txt.innerText = $ch_txt;
    }
}
if (window.matchMedia('(max-width: 767px)').matches)
{
    $banner_txt.innerText = $origin_txt;
}
if (window.matchMedia('(max-width: 567px)').matches)
{
    // most까지 300자
    if($banner_txt.innerText.length > 300){
        const $ch_txt = $origin_txt.substr(0, 300)+"...";
        $banner_txt.innerText = $ch_txt;
    }
}
if (window.matchMedia('(max-width: 504px)').matches)
{
    if($banner_txt.innerText.length > 186){
        const $ch_txt = $origin_txt.substr(0, 186)+"...";
        $banner_txt.innerText = $ch_txt;
    }
}

 