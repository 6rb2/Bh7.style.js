<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
    <style>
        .chat-clock-container {
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            background-image: url(https://up6.cc/2025/02/173912904532253.png);
            background-size: cover;
            padding: 10px 0;
            text-align: center;
            z-index: 99999;
            border: 1px solid #000;
            border-radius: 0px 8px 0px 8px;
            margin-bottom: 5px;
        }
        .digital-clock {
            font-family: monospace;
            font-size: 18px;
            font-weight: bold;
            color: #fff;
            text-shadow: 0 0 5px #000;
            letter-spacing: 1px;
        }
        @media (max-width: 768px) {
            .digital-clock {
                font-size: 14px;
            }
        }
    </style>
</head>
<body>

<script>
$(document).ready(function() {
    if($('#chats').length > 0) {
        $('#chats').before('<div class="chat-clock-container"><div id="clock" class="digital-clock">loading ...</div></div>');
        
        function updateClock() {
            $('#clock').html(moment().format('D MMMM YYYY - hh:mm:ss'));
        }
        updateClock();
        setInterval(updateClock, 1000);
    }
    
    $('#chats')['append'](`
        <div id="balloon-container" style="position: relative; margin-top: 20px; margin-bottom: 10px; text-align: center; clear: both;">
            <button class="balloon-btn" id="balloonBtn" style="width: 55px; height: 55px; border-radius: 50%; border: none; cursor: pointer; font-size: 30px; background: radial-gradient(circle at 30% 30%, #ff9acb, #ff4fd8, #8b5cf6); color: #fff; box-shadow: 0 5px 15px rgba(0,0,0,.2), inset 0 0 8px rgba(255,255,255,.25); display: inline-flex; align-items: center; justify-content: center; animation: floaty 3s ease-in-out infinite; transition: transform 0.2s;">
                🎁
            </button>
        </div>
        <style>
            .balloon-btn:active {
                transform: scale(0.95);
            }
            @keyframes floaty {
                0%,100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
            }
            .confetti {
                position: fixed;
                top: -20px;
                opacity: 1;
                z-index: 9998;
                pointer-events: none;
                animation: fall linear forwards;
            }
            @keyframes fall {
                to {
                    transform: translateY(120vh) rotate(540deg);
                    opacity: 0.9;
                }
            }
        </style>
    `);
    
    function showConfetti(count) {
        const colors = ['#ff4fd8', '#ff0080', '#8b5cf6', '#5f00ff', '#00e5ff', '#00c3ff', '#4fdd79', '#00ff9d', '#ffd54f', '#ffb300', '#ff6b6b', '#ff1744', '#ffffff'];
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            const color = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.background = color;
            const size = 7 + Math.random() * 4;
            if (Math.random() < 0.5) {
                confetti.style.width = size + 'px';
                confetti.style.height = size + 'px';
                confetti.style.borderRadius = '2px';
            } else {
                confetti.style.width = size + 'px';
                confetti.style.height = size + 'px';
                confetti.style.borderRadius = '50%';
            }
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = -20 - Math.random() * 40 + 'px';
            confetti.style.animationDuration = 2.5 + Math.random() * 2.5 + 's';
            confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 6000);
        }
    }
    
    $('#balloonBtn')['on']('click', function() {
        showConfetti(120);
    });
    
    $(`<center><div id="sultan13"><a class="btn minix btn-primary sultanbtn" target="_blank" href="https://07z.net">شات بحــه</a><a class="btn minix btn-primary sultanbtn" target="_blank" href="https://8moud.com">شات غمــوض</a><a class="btn minix btn-primary sultanbtn" target="_blank" href="https://chatmalaki.com">شات ملاكــي</a><a class="btn minix btn-primary sultanbtn" target="_blank" href="">مواقعنــا</a></div></center>`).insertBefore('.nav.nav-tabs');
    
    $(`<div><marquee direction="right" width="100%" class="bg" onmouseover="this.stop()" onmouseout="this.start()" scrolldelay="0" scrollamount="4" style="text-align:center;height:23px;color:#ffffff;font-family:jazeera,FontAwesome;margin-right:-1px;margin-top:5px;border-radius:0px 10px 0px 10px;width:100%;padding:1px;">منورين حياكم جميعاً : [ شات بحـــه الصوتي للجوال ] ، مسابقات ، فعاليات ، جوائز - نتمنـى لكم قضاء أطيب الاوقات | الاداره ..</marquee></div>`).insertBefore('div#tlogins .lonline.light.break');
    
    $("<div class='fr borderg' style='padding:2px;background-color:white;margin-right:4px;border-radius:0px 10px 0px 10px;'><a href='#' style='font-weight:bold;color:#000;'>طـــرب ديزاين</a></div>").insertAfter($(".loginstat"));
    
    $(`<style>#sultan13{margin-top:4px;}#sultan13 a.sultanbtn{width:85px;padding:1px;height:22px;border-radius:0px 10px 0px 10px !important;margin:1px;}#sultan13 a.sultanbtn:hover{transform:scale(1.05);box-shadow:0 0 5px rgba(0,0,0,0.5);}div#l1 input#u1,div#l2 input#u2,div#l2 input#pass1,div#l3 input#u3,div#l3 input#pass2{border-radius:0px 10px 0px 10px !important;border:2px solid #999999 !important;text-align:center;height:27px!important;box-shadow:none !important;outline:none !important;}div#l1 input#u1{width:100%!important;margin-top:2px!important;}div#l2 input#u2,div#l2 input#pass1,div#l3 input#u3,div#l3 input#pass2{width:49%!important;float:right;margin:2px 3px 2px 0;}div#l1 button,div#l2 button,div#l3 button{border-radius:0px 10px 0px 10px !important;height:27px;width:90%!important;margin-top:4px!important;margin-left:auto!important;margin-right:0!important;}div#l1 button:hover,div#l2 button:hover,div#l3 button:hover{transform:scale(1.05);box-shadow:0 0 5px rgba(0,0,0,0.5);}.nav-tabs{background-color:#bfbfbfa6!important;border-radius:0px 10px 0px 10px !important;margin-top:2px!important;float:right;padding:3px 1px;border-top:3px solid #2E576E;height:30px!important;}#tlogins .fa.fa-eye{position:relative;margin:-30px 17px 2px 0!important;color:inherit!important;}ul.nav.nav-tabs.fl li a{text-align:center;padding:0!important;border:0;color:#2E576E;border-radius:0px 10px 0px 10px !important;background:#fff;}ul.nav-tabs.fl li{width:33.3%;margin-left:0;border-radius:0px 10px 0px 10px !important;margin-bottom:4px!important;}</style>`).prependTo('body');
    
    $(`<style>#upro .light.fl.pro.break{background-color:#000!important;background-image:linear-gradient(225deg,#e5e8f7 0%,#fff 29%,#fafafc 67%,#e5e8f7 100%);}</style>`).appendTo('body');
    
    $(`<style>#sultan{color:#f00!important;}#room .btn-primary,#d0 .label-primary,#settings .label-primary,#settings .btn-primary,.corner.border.label.label-primary,.modal-header.label-primary,.head.d-flex.nosel.bg.fl,.rsave.btn.btn-primary.fr,.fa.fa-send.sndpm.fl.btn.btn-primary,.fr.fa.fa-share-alt.sndfile.fl.btn.btn-primary,.fr.fa.fa-share-alt.sndfilebc.fl.btn.btn-primary,.bdel.corner.btn.minix.btn-primary.fa.fa-times,.fa.fa-send.sndbc.fl.btn.btn-primary,.btn.btn-primary.u-nickc.fr.fa.fa-save,.label.fl.label-primary,button.rsave.btn.btn-primary.fl,#users .nosel.ninr.fl.uzr.label.bg{border-radius:0px 8px 0px 8px!important;border:1px solid #000;background-image:url(https://up6.cc/2025/02/173912904532253.png);background-size:cover;color:#fff;}#room #mic{background-image:url(https://up6.cc/2025/02/173912904532253.png);background-size:cover;border-radius:0px 6px 6px 6px!important;}</style>`).appendTo('body');
    
    $('.nonot').remove();
    
    $(`<style>#mic .mic{text-align:center;width:56px;background-color:#ffffff;border:2px solid #afbfc2!important;border-radius:30% 1%!important;margin:1px!important;height:47px!important;background-position:center!important;background-repeat:no-repeat!important;background-size:cover;}#chats .fitimg.u-pic{height:52px!important;border:1px solid;border-radius:100px;box-shadow:0 0 0px rgb(0,0,0),inset 0 0 4px rgb(0,0,0),0 0 0 0px #707070;margin-left:-10px;}#chats img.ustat{width:11px!important;height:11px!important;border-radius:50px;border:1px solid #000;box-shadow:0 0 3px rgb(0,0,0),inset 0 0 4px rgb(0,0,0);margin-left:1px;margin-top:1px;}#chats .d-flex.fl{background-image:url(https://up6.cc/2026/03/177354194520751.jpg);background-size:cover;}#chats .mini.u-msg.dots{color:#000!important;}#d2bc{background-color:#000!important;background-image:url(https://up6.cc/2026/03/177498669806721.jpg);background-size:100%;}#upro .modal-header.label-primary,#d0,.broadcasters,#rooms .label-primary,#users .nosel.ninr.fl.uzr.label.bg{border-radius:0px 8px 0px 8px!important;border:1px solid #000;background-image:url(https://up6.cc/2025/02/173912904532253.png);color:#fff;}#users img.co{border-radius:0px 8px 0px 8px!important;transform:rotate(20deg);margin-top:2px!important;}#dpnl{background-image:url(https://up6.cc/2025/02/173912904532253.png);background-size:100%!important;}</style>`).appendTo('body');
    
    $('style').last().append('#TH_PM_EMPTY{display:none!important;}#chats{background-image:url(https://up6.cc/2026/03/177498574705441.jpeg);background-size:100%;}');
});
</script>
</body>
</html>
