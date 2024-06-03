var now = new Date();
function createtime(){
    // 当前时间
    now.setTime(now.getTime()+250);
    var grt= new Date("2024/01/01 00:00:00"); //网站诞生时间
    var start = new Date("08/01/2022 00:00:00"); // 旅行者1号开始计算的时间
    var dis = Math.trunc(23400000000 + ((now - start) / 1000) * 17); // 距离=秒数*速度 记住转换毫秒
    var unit = (dis / 149600000).toFixed(6);  // 天文单位

    days = (now - grt ) / 1000 / 60 / 60 / 24;
    dnum = Math.floor(days);
    hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum);
    hnum = Math.floor(hours);
    if(String(hnum).length ==1 ){hnum = "0" + hnum;}
    minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
    mnum = Math.floor(minutes);
    if(String(mnum).length ==1 ){mnum = "0" + mnum;}
    seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    snum = Math.round(seconds);
    if(String(snum).length ==1 ){snum = "0" + snum;}

    document.getElementById("timeDate").innerHTML = "本站已稳定运行 "+dnum+" 天 ";
    document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
    document.getElementById("voyager").innerHTML = "旅行者 1 号当前距离地球 "+ dis +" 千米，约为 "+ unit +" 个天文单位 🚀"
}
setInterval("createtime()",250); 