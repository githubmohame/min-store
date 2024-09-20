variables={pages:true,pages2:true};
resolution_products_show={}
function onClickPages(){
    
    
    let pages=document.getElementById("pages");
    console.log(pages);
    if(variables["pages"]){
        console.log("hhhh");
        pages.classList.remove("list-navg-hidden");
        variables["pages"]=false;
        return;
    }
    pages.classList.add("list-navg-hidden");
    variables["pages"]=true;
}
map_scroll={"product_show1":{"left":0,top:0,flag:false,cur_index:0}};
function scrollToNext(){
    console.log("iii");
    let next=document.getElementsByClassName("slider-show")[0];
    console.log(next);
    let next2=document.getElementById("slider-show-item2");
    next2.scrollIntoView({behavior:"smooth"});
    //next.scrollLeft+=next2.scrollWidth;
    //next.scrollTo(0,0);
    //next.scrollTo({left:next.scrollWidth*25,behavior:"smooth"});
}

function scrollToPrev(){
    console.log("iii");
    let next=document.getElementsByClassName("slider-show")[0];
    console.log(next);
    
    //next.scrollTo(0,0);
    next.scrollTo({left:0,behavior:"smooth"});

}
function onClickPages2(){
    let pages=document.getElementById("pages2");
    console.log(pages);
    if(variables["pages2"]){
        console.log("hhhh");
        pages.classList.remove("list-navg-hidden");
        variables["pages2"]=false;
        return;
    }
    pages.classList.add("list-navg-hidden");
    variables["pages2"]=true;
}

function openNavBarPhone(){
    let div= document.getElementsByClassName("container-navg-shadow")[0];
    console.log(div);
    
    div.classList.remove("container-navg-shadow-hidden");
    div=document.getElementsByClassName("nav-mobile")[0];
    div.classList.remove("nav-mobile-hidden");

}
function closeNavBarPhone(){
    let div= document.getElementsByClassName("container-navg-shadow")[0];
    div.classList.add("container-navg-shadow-hidden");
    div=document.getElementsByClassName("nav-mobile")[0];
    div.classList.add("nav-mobile-hidden");
    
}
/*
const resize_ob = new ResizeObserver(function(entries) {
	// since we are observing only a single element, so we access the first element in entries array
	let rect = entries[0].contentRect;

	// current width & height
	let width = rect.width;
    let values=310*6/rect.width;
	values=Math.ceil(values);
    let dots=document.getElementsByClassName("circle-scroll-product-show")[0];
    dots.innerHTML="";
    let curWidth =0;
    console.log(`${map_scroll["cur_index"]==undefined}kkkk` )
    if(map_scroll["cur_index"]==undefined){
        map_scroll.cur_index=0;
    }
    for(let i=0; i<values&&curWidth<=310*6; i++) {
        console.log("jjuutt");
        let dot=document.createElement("span");
        dot.onclick=function(){
            console.log(values.length);
            
            smoothScrollShowProduct((6/values)*315,i);
            
        }
        
        curWidth+=300;
        dot.classList.add("dot");   
        if(map_scroll.cur_index==i||(map_scroll.cur_index==undefined&&i==0)){
            dot.classList.add("dot-click");

        }
        else{
            dot.classList.add("dot-not-click");
        }
        dots.append(dot);
    }
    let height = rect.height;
});
console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
let element1=document.querySelector(".show-product");
*/
function showProduct(element,element2){
    const resize_ob = new ResizeObserver(function(entries) {
        // since we are observing only a single element, so we access the first element in entries array
        let rect = entries[0].contentRect;
    
        // current width & height
        let width = rect.width;
        let values=310*6/rect.width;
        values=Math.ceil(values);
        //let dots=document.getElementsByClassName("circle-scroll-product-show")[0];
        let dots=element2;
        dots.innerHTML="";
        let curWidth =0;
        console.log(`${map_scroll["cur_index"]==undefined}kkkk` )
        if(map_scroll["cur_index"]==undefined){
            map_scroll.cur_index=0;
        }
        for(let i=0; i<values&&curWidth<=310*6; i++) {
            console.log("jjuutt");
            let dot=document.createElement("span");
            dot.onclick=function(){
                console.log(values.length);
                let ele1=element.getElementsByClassName("show-product")[0];
                smoothScrollShowProduct((6/values)*315,i,ele1,element2);
                
            }
            
            curWidth+=300;
            dot.classList.add("dot");   
            if(map_scroll.cur_index==i||(map_scroll.cur_index==undefined&&i==0)){
                dot.classList.add("dot-click");
    
            }
            else{
                dot.classList.add("dot-not-click");
            }
            dots.append(dot);
        }
        let height = rect.height;
    });
    let element1=element.getElementsByClassName("show-product")[0];
    element1.addEventListener("scroll",function(e){
    
        //let scrollTop =element1.scrollTop;
        //let scrllLeft=element1.scrollLeft;
        //element1.scrollTo( , map_scroll.product_show1.top);
        
        if(map_scroll.flag){
            element1.scrollTo({left:map_scroll.product_show1.left,behavior:"smooth"})
            //map_scroll.flag = false;
            return;
        }
        element1.scrollTo({left:map_scroll.product_show1.left,})
        
    })
    resize_ob.observe(element);
}
/*
console.log(element1);

element1.addEventListener("scroll",function(e){
    
    //let scrollTop =element1.scrollTop;
    //let scrllLeft=element1.scrollLeft;
    //element1.scrollTo( , map_scroll.product_show1.top);
    
    if(map_scroll.flag){
        element1.scrollTo({left:map_scroll.product_show1.left,behavior:"smooth"})
        //map_scroll.flag = false;
        return;
    }
    element1.scrollTo({left:map_scroll.product_show1.left,})
    
})
resize_ob.observe(document.querySelector(".container-product-show"));
*/
function smoothScrollShowProduct(scrollWidth,n,ele1,dots_container){
    
    //ele1.scrollWidth+=(scrollWidth*n);
    map_scroll.product_show1.left=scrollWidth*n;
    map_scroll.product_show1.top=0;
    map_scroll.flag=true;
    ele1.scrollTo({left:scrollWidth*n,behavior:"smooth"});
    //console.log(map_scroll.flag);
    //#cbcbcb gray
    //#4a4a4a black;
    map_scroll.cur_index=n;
    map_scroll.flag = true;
    setTimeout(()=>{
        map_scroll.flag = false;
    },500)
    let circles=dots_container.getElementsByClassName("dot");
    console.log(dots_container);
    console.log("^^^^^^")
    for(let i=0;i<circles.length;i++){
        circles[i].classList.remove("dot-click");
        circles[i].classList.remove("dot-not-click");
        if(n==i){
            circles[i].classList.add("dot-click");
        }
        else{
            circles[i].classList.add("dot-not-click");
        }
    }
    
}
let show_product_containers=document.getElementsByClassName("container-product-show");
let circle_show_product_containers=document.getElementsByClassName("circle-scroll-product-show");

for(let i=0;i<show_product_containers.length;i++){
    showProduct(show_product_containers[i],circle_show_product_containers[i])
}
//quote  