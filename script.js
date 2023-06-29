const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav =document.getElementById('navbar');

if(bar)
{
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
if(close)
{
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}



function computecost()
{
    var one=document.getElementById("one").value;
    var two=document.getElementById("two").value;
    var three=document.getElementById("three").value;

    document.getElementById("1cost").value=one*799 + two*849 + three*799;
    document.getElementById("2cost").value=one*799 + two*849 + three*799;
}
function couponcomputecost30()
{
    var one=document.getElementById("one").value;
    var two=document.getElementById("two").value;
    var three=document.getElementById("three").value;

    document.getElementById("1cost").value=one*800*70/100 + two*850*70/100 + three*800*70/100;
    document.getElementById("2cost").value=one*800*70/100 + two*850*70/100 + three*800*70/100;
}
function couponcomputecost50()
{
    var one=document.getElementById("one").value;
    var two=document.getElementById("two").value;
    var three=document.getElementById("three").value;

    document.getElementById("1cost").value=one*800*50/100 + two*850*50/100 + three*800*50/100;
    document.getElementById("2cost").value=one*800*50/100 + two*850*50/100 + three*800*50/100;
}
function coupon_computecost_ornot(){
    var b;
    if(document.getElementById("couponno").value=="SHOP$4430")
    {
        b=1;
    }
    if(document.getElementById("couponno").value=="SHOP$4450")
    {
        b=2;
    }
    switch(b){
        case 1:couponcomputecost30();
                break;
        case 2:couponcomputecost50();
                break;
        default:computecost();
                break;
    }
}


function coupon30()
{
    var o=document.getElementById("one").value;
    var t=document.getElementById("two").value;
    var thr=document.getElementById("three").value;
    
    document.getElementById("cost1").value=o*800*70/100;
    document.getElementById("cost2").value=t*850*70/100;
    document.getElementById("cost3").value=thr*800*70/100;
}
function coupon50()
{
    var o=document.getElementById("one").value;
    var t=document.getElementById("two").value;
    var thr=document.getElementById("three").value;
    
    document.getElementById("cost1").value=o*800*50/100;
    document.getElementById("cost2").value=t*850*50/100;
    document.getElementById("cost3").value=thr*800*50/100;
}

function subtotalcost()
{
    var on=document.getElementById("one").value;
    var tw=document.getElementById("two").value;
    var thre=document.getElementById("three").value;
    
    document.getElementById("cost1").value=on*799;
    document.getElementById("cost2").value=tw*849;
    document.getElementById("cost3").value=thre*799;
}
function cost_coupon_ornot()
{
    var a;
    if(document.getElementById("couponno").value=="SHOP$4430")
    {
        a=1;
    }
    if(document.getElementById("couponno").value=="SHOP$4450")
    {
        a=2;
    }
    switch(a){
        case 1:coupon30();
                break;
        case 2:coupon50();
                break;
        default:subtotalcost();
                break;
    }
}





