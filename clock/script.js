function st(){
    let d = new Date();
    let h = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let fh = convertFormat(h);
    h = checktime(h);
    h = addzero(h);
    min = addzero(min);
    sec = addzero(sec);
    document.getElementById('c').innerHTML = `${h}:${min}:${sec}:${fh}`
}
function convertFormat(t){
    let f = 'AM';
    if(t>=12){
        f = 'PM';
    }
    return f;
}

function checktime(t){
    if(t>12){
        t = t-12;
    }
    if(t==0){
        t = 12
    }
    return t
}

function addzero(t){
    if(t<10){
    t = '0'+t
    } return t
}
st()
setInterval(st,1000)