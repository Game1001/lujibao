// 定义变量
let runs = null;
let a =0;
let temp=0;
let MuiscAll=[
    '1369798757',
    '574566207'
];
let Seconds = 0
function runAudio(audioM){
    clearInterval(runs);
    let audios = document.getElementById('ljb-audio');
    audios.src=`http://music.163.com/song/media/outer/url?id=${audioM}.mp3`;
    if(audios!=null){
        audios.load();
        audios.oncanplay = function(){
           Seconds = parseInt(audios.duration)*1000;
           console.log(audios.duration,Seconds);
           if(Seconds != 0){
               runs=setInterval(()=>{
                   runAudio(MuiscAll[temp]);
                   if(MuiscAll.length>temp){
                       ++temp;
                   }else if(MuiscAll == temp){
                       temp=0;
                   }
                    //    console.log(a+1,',',Seconds);
               },Seconds);
           }
        }
    }
}
runAudio(MuiscAll[temp]);

function openLinks(item){
    let aLink = document.getElementById("ljb_link");
    switch (item) {
        case 1:
            aLink.href="../content/blog_text/index.html";
            break;
        case 2:
            alert('creat... , 搭建中');
            aLink.href="#搭建中";
            break;
        case 3:
            alert('creat... , 搭建中');
            aLink.href="#搭建中";
            break;
        default:
            console.log("none");
            break;
    }
    aLink.click();
}