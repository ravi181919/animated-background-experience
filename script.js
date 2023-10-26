// ImageAnimation
function imageAnimation(){
    Shery.imageEffect("#backPosition",{
        style:5,
        config:{
        "a":{"value":2,"range":[0,30]},
        "b":{"value":0.75,"range":[-1,1]},
        "aspect":{"value":1.98429314162299},
        "gooey":{"value":true},
        "infiniteGooey":{"value":true},
        "durationOut":{"value":1,"range":[0.1,5]},
        "durationIn":{"value":1,"range":[0.1,5]},
        "displaceAmount":{"value":0.5},
        "masker":{"value":false},
        "maskVal":{"value":1.07,"range":[1,5]},
        "scrollType":{"value":0},
        "geoVertex":{"range":[1,64],"value":1},
        "noEffectGooey":{"value":true},
        "onMouse":{"value":1},
        "noise_speed":{"value":0.2,"range":[0,10]},
        "metaball":{"value":0.2,"range":[0,2]},
        "discard_threshold":{"value":0.5,"range":[0,1]},
        "antialias_threshold":{"value":0,"range":[0,0.1]},
        "noise_height":{"value":0.5,"range":[0,2]},
        "noise_scale":{"value":14.02,"range":[0,100]}},
        gooey:true,
    });
};
imageAnimation();
// TextAnimation
function textAnimation(){
    var elems = document.querySelectorAll("#elem");
    elems.forEach(function(e){
        var head = e.querySelectorAll("h1");
        var index = 0;
        document.querySelector("#main").addEventListener("click",function () {
            gsap.to(head[index],{
                top:"-=100%",
                ease:Expo.easeInOut,
                duration:1,
                onComplete: function(){
                gsap.set(this._targets[0],{
                    top:"100%",
                })
                }
            });
            index === head.length-1 ? (index = 0) : index++;
            gsap.to(head[index],{
                top:"-=100%",
                ease:Expo.easeInOut,
                duration:1,
            });
        });
    });
};
textAnimation();
// TextLoadingAnimation 
function textLoadingAnimation(){
    gsap.from("#heroLeft",{
        right:"300px",
        duration:1,
        delay:0.5,
    });
    gsap.from("#heroRight",{
        left:"300px",
        duration:1,
        delay:0.5,
    });
    gsap.from("#navleft",{
        top:"-100px",
        duration:1,
        delay:0.5,
    });
    gsap.from("#navRight",{
        top:"-100px",
        duration:1,
        delay:0.5,
    });
    
};
textLoadingAnimation();



