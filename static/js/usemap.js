
var count = 0;
settimr= 10;
var timer = null;
var info_lists=[
    {
        img_url:"办公区域Q.jpg",
        title:"办公区域",  
        total:4,
        currnum:1,
        posList:[
            [432, 256],
            [175, 335],
            [547, 460],
            [389, 667]
        ],
        targetsize:[
            ["1.8","1.2"],
            ["1.2","1.5"],
            ["1.4","1"],
            ["1.2","0.8"],
        ],
    
        answer:"①工作区域的大门呈直角敞开,存在外部人员进入的风险。<br/>②开会过程中,未关闭会议室大门,未拉上会议室百叶窗,存在会议内容泄露的风险。<br/>③第二排无人工位电脑未锁屏,存在被其他人看到文件内容、拷走资料的风险。<br/>④在第三排无人工位桌面上,摆放有U盘和写有“公司机密”字样的文件,存在被他人复制或窃取的风险。"
    },
   {
       img_url:"个人电脑Q.jpg",
       title:"个人电脑",  
       total:4,
       currnum:1,
       posList:[
            [421, 365],
            [512, 413],
            [384, 485],
            [528, 472]
       ],
       targetsize:[
        ["1.2","1.5"],
        ["1.8","0.6"],
        ["1","1"],
        ["1.6","0.6"],
    ],
       answer:"①将存储工作文件的故障硬盘未经处理直接丢弃,存在信息泄露的风险。<br/>②未及时安装操作系统或应用程序补丁更新,存在被不法分子利用漏洞攻击的风险。<br/>③工位上贴着写有密码的便签,存在被其他人得知密码的风险,且该密码为弱密码,存在被猜测或暴力破解的风险。<br/>④访问名为“破解软件园”的网站下载非官方来源的软件,存在恶意软件捆绑等安全风险。"
   },
   {
       img_url:"敏感文件Q.jpg",
       title:"敏感文件",
       total:4,  
       currnum:1,
       posList:[
        [315, 223],
        [152, 373],
        [575, 227],
        [295, 622]
       ],
       targetsize:[
        ["2.2","0.6"],
        ["2","1"],
        ["2.2","1"],
        ["1.2","0.6"],
    ],
       answer:"①创建微信群用于同步工作进展,容易因管理员成员维护不及时、外部人员加入而产生泄密风险。<br/>②将标书通过QQ方式发送给外部人员,打印店老板往往不会主动清除打印过的文件,将导致文档泄密的风险。<br/>③一位员工找其他同事索要项目文档,已超出该员工的授权接触范围,容易产生一系列风险和不良影响。<br/>④将工作代码上传到互联网代码共享平台GitHub,容易导致相应产品或系统存在被攻击、被抄袭等风险。"
    },
    {
        title:"WI-FI安全",  
        img_url:"WI-FI安全Q.jpg",
        total:3,
        currnum:1,
        posList:[
            [328, 400],
            [288, 606],
            [460, 610]
        ],
        targetsize:[
            ["1.4","1"],
            ["1","1.2"],
            ["1","1.4"]
        ],
        answer:"安全风险</br>①在工作场所私自搭建路由器,该路由器加密方式与企业级Wi-Fi相比较弱,可能会导致攻击者在破解后直接访问企业内网。</br> ②在无线网络列表中选择了名称与运营商非常接近的“ChinaNat”仿冒网络中,可能产生信息泄露、流量被劫持等风险。</br> ③使用手机下载Wi-Fi密码共享工具,这类软件可能会自动上传已经连接过的Wi-Fi密码,其中很可能包含工作单位的Wi-Fi密码。"
    },
    {
        img_url:"邮件安全Q.jpg",
        title:"邮件安全",  
        total:3,
        currnum:1,
        posList:[
            [152, 667],
            [520, 548],
            [243, 239]
        ],
        targetsize:[
            ["2.8","1.2"],
            ["1.6","0.6"],
            ["0.8","0.8"]
        ],
        answer:"①在配合邮箱过程中，忽略“SSL”安全协议的设置，容易导致攻击者截获明文传输的邮件正文和附件，产生信息泄露风险。<br/>②在收到自称来自“XX人民法院”的钓鱼邮件后，点击了邮件中的链接，并按照邮件上面的要求拔打电话，容易存在感染病毒的风险，更容易落入诈骗者的陷饼之中。<br/>③在收到一封未知邮件后，受到标题的吸引，直接打开了其中的附件，存在感染病毒的风险"
    },
    {
        img_url:"移动安全Q.jpg",
        title:"移动安全", 
        total:3, 
        currnum:1,
        posList:[
            [281, 679],
            [487, 464],
            [404, 603]
        ],
        targetsize:[
            ["1.6","1.2"],
            ["2.2","0.6"],
            ["1","1"]
        ],
    answer:"①在第三方“外挂”类APP上绑定游戏帐号,一旦这些第三方APP存在问题,可能产生游戏帐号被盗的风险。<br/>②关闭手机短信验证(双因素认证)功能,一旦攻击者通过病布、撞库等方式获得密码,便可以直接登录游戏帐号并修改密码。<br/> ③轻信短信中的“中奖通知“内容,点击外部发来的未知链接,容易产生手机感染病毒的风险"
    },
    {
        img_url:"隐私保护Q.jpg",
        title:"隐私保护",  
        total:3,
        currnum:1,
        posList:[
            [627, 307],
            [180, 680],
            [192, 727]
        ],
        targetsize:[
            ["1","1"],
            ["1","0.4"],
            ["1.2","1.2"]
        ],
        answer:"①快捷酒店的墙壁插座上，隐藏着一个针孔摄像头，该房间内的住客存在被偷拍的风险。<br/>②收集屏幕上提示”一起聊天APP正在使用麦克风“，说明该APP具有后台录音的权限，导致机主存在被暗中窃听的风险。<br/>③收到一条消息，推荐距离住处仅有5分钟的健身房，说明家庭住址的信息已经遭到泄露。"
    },
    
];
$(function(){
    loadImgs();
    $(".next").on("click",function(){
        $(document).off("click");
        $(".answer-title").html("");
        $(".answer-box .answer").html("");
        $('.error-point').addClass("hide");
        $(".tip").removeClass("hide");
        $(".tip b").html(info_lists[count].total);
        clearInterval(timer);
        var timeStr= settimr+"s";
        $(".time").html(timeStr);
        settimr = 10;
        render();
        setTimeFn(settimr);
    })
    setTimeFn(settimr);
});
function setTimeFn(settimr){
    timer = setInterval(() => {
        settimr--;
        if(settimr == 0){
            clearInterval(timer);
            setPoints(true);
            $(".tip").addClass("hide");
            $(".answer-title").html(info_lists[count].title);
            $(".answer-box .answer").html(info_lists[count].answer);
            
        };
        var timeStr= settimr+"s";
        $(".time").html(timeStr);
    }, 1000);
};
/**
 * 根据原心设置点击区域
 */
function setPoints(type){
    var pointList = info_lists[count].posList;
    var pointSizeList = info_lists[count].targetsize;
    var html = '';
    pointList.forEach((ele,index) => {
        var itemSize = pointSizeList[index];
        let dfs = Number(document.documentElement.style.fontSize.replace("px",""));
        let offsetX = ele[0]-(itemSize[0]/2)*dfs;
        let offsetY = ele[1]-(itemSize[1]/2)*dfs;
        var styleStr="width:"+itemSize[0]+"rem;height:"+itemSize[1]+"rem;top:"+ offsetY +"px;left:"+ offsetX +"px;";
        html += '<div class="area" style="'+styleStr+'">\
                    <div class="center_point"></div>\
                    <div class="center_num hide">'+(index+1)+'</div>\
                </div>';
    });
    $('#area_list').html(html);
    if(type){
        $('.center_point').addClass('choosen');
        $('.center_num').removeClass('hide');
    };
}
// 绑定事件
function bindClick(){
    $(document).on("click", '.area, .center_point',function (e) {
        $('.error-point').addClass("hide");
        var $target = $(e.target);
        e.stopPropagation();
        if($target .hasClass("area")||$target .hasClass("center_point")){
            if($target.hasClass("area")){
                if(!$target.children('.center_point').hasClass('choosen')){
                    $target.children('.center_point').addClass('choosen');
                    $target.children('.center_num').removeClass('hide');
                };
            }else{
                if(!$target.hasClass('choosen')){
                    $target.addClass('choosen');
                    $target.next().removeClass('hide');
                };
            };
            if(info_lists[count].currnum == info_lists[count].total){
                  clearInterval(timer);
                  $(".tip").addClass("hide");
                  $(".answer-title").html(info_lists[count].title);
                  $(".answer-box .answer").html(info_lists[count].answer);
            }else{
                info_lists[count].currnum++;
            }
        }
    });
  
    $('.pic_box').on('click',  function(e){
        $('.error-point').addClass("hide");
        e.stopPropagation();
        var posx = e.clientX-25,
            posy = e.clientY-25;
        $('.error-point').removeClass("hide").css({"left":posx,"top":posy});
    });
}

function render(){
    ++ count;
    if(count >= 7){
        count = 0;
    }else{};
    $('.img').attr('src', '../static/imgs/'+info_lists[count].img_url);
    loadImgs();
}

function loadImgs(arr = null){
    var centerPoints = info_lists[count].posList;
    var centerPoints = info_lists[count].posList;
    setPoints();
    bindClick(centerPoints.length);
};