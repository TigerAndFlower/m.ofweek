/**
 * 
 * @authors shuai
 * @date    2017-05-03 10:21:57
 * @version 1.0
 */
Zepto(function ($) {
    // �������¼�300�����ӳ�
    FastClick.attach(document.body);

    //���ض���
    var backTop = (function () {


        $("body").on('click', '#back-top', function () {
            if ($("#scroller").length) {
                myScroll.scrollTo(0, 0, 100);
            } else {
                $(window).scrollTop(0);
            }
        });

        if (!$("#scroller").length) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > $(window).height() * 2) {
                    if (!$("#back-top").length) {
                        $("<div id='back-top'></div>").appendTo($("body"));
                    }
                } else {
                    $("#back-top").remove();
                }
            });

        }


    })();

    $(".dropmenu-click").on('click', function () {
        $(this).toggleClass('active');
        $(".drop-menu").toggle();
    })
    $(".mask").on('click', function () {
        $(".dropmenu-click").triggerHandler("click");
    })

    $("#header h1").click(function () {
        $(this).toggleClass('active');
        $("#dropmenu-subsite").toggle();
    });


    //�ֲ�
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,
        // pagination: '.swiper-pagination' //��ҳ��
        observer: true, //�޸�swiper�Լ�����Ԫ��ʱ���Զ���ʼ��swiper
        observeParents: true //�޸�swiper�ĸ�Ԫ��ʱ���Զ���ʼ��swiper

    });


    /**
    ��ҵ����(˼·:Ĭ��ѡ�����ҵ ��ҳ����ҵ����ҳ��Ĭ����ҵ����js���ɵ�,����Ժ�Ĭ����ҵ���,
    ֻ���޸�defaultConfig���ݼ���,�����޸�html,������ҵ����ҳ�� ��ajax����õ�ȫ����ҵ,Ȼ��ѭ����defaultConfig�Ƚ�,������,��ȥ���������,�����ʾ�� ��ӵ���ҵ��)
    ���Ӻ�ɾ����ҵ������
    **/
//     var selectInstrudy = (function () {
//         var $removeCon = $("#remove-control"),
//             $removeUl = $removeCon.find("ul"),
//             $addCon = $("#add-control"),
//             $addUl = $addCon.find("ul"),
//             $all = $addCon.find(".all");
//         //Ĭ��ѡ�е���ҵ            
//         var defaultConfig = [{
//                 "sitename": "̫���ܹ��",
//                 "id": "6000",
//                 "url": "http://m.solar.ofweek.com/"
//             },
//             {
//                 "sitename": "������",
//                 "id": "898800",
//                 "url": "http://m.robot.ofweek.com/"
//             },
//             {
//                 "sitename": "����",
//                 "id": "4000",
//                 "url": "http://m.laser.ofweek.com/"
//             },
//             {
//                 "sitename": "﮵�",
//                 "id": "16000",
//                 "url": "http://m.libattery.ofweek.com/"
//             },
//             {
//                 "sitename": "��ͨѶ",
//                 "id": "2000",
//                 "url": "http://m.fiber.ofweek.com/"
//             },
//             {
//                 "sitename": "����Ӳ��",
//                 "id": "123000",
//                 "url": "http://m.znyj.ofweek.com/"
//             },
//             {
//                 "sitename": "�뵼������",
//                 "id": "692007",
//                 "url": "http://m.lights.ofweek.com/"
//             },
//             {
//                 "sitename": "������",
//                 "id": "11000",
//                 "url": "http://m.iot.ofweek.com/"
//             },
//             {
//                 "sitename": "����",
//                 "id": "879100",
//                 "url": "http://m.gongkong.ofweek.com/"
//             },
//             {
//                 "sitename": "ҽ�ƿƼ�",
//                 "id": "103100",
//                 "url": "http://m.medical.ofweek.com/"
//             },
//             {
//                 "sitename": "�˹�����",
//                 "id": "201700",
//                 "url": "http://m.ai.ofweek.com/"
//             },
//             {
//                 "sitename": "���ӹ���",
//                 "id": "879012",
//                 "url": "http://m.ee.ofweek.com/"
//             },
//             {
//                 "sitename": "�ɴ����豸",
//                 "id": "5000",
//                 "url": "http://m.wearable.ofweek.com/"
//             },
//             {
//                 "sitename": "���ܼҾ�",
//                 "id": "911000",
//                 "url": "http://m.smarthome.ofweek.com/"
//             },
//             {
//                 "sitename": "3D��ӡ",
//                 "id": "11500",
//                 "url": "http://m.3dprint.ofweek.com/"
//             },
//             {
//                 "sitename": "��ʾ",
//                 "id": "692028",
//                 "url": "http://m.display.ofweek.com/"
//             },
//             {
//                 "sitename": "������",
//                 "id": "88000",
//                 "url": "http://m.sensor.ofweek.com/"
//             }
//         ];

//         var leaveHtml = "";
//         var selectedStore = [];
//         var noSelectdStore = [];

//         function loadIndexIndustry() {
//             var html = "";
//             var hydata = null;

//             //����ÿ���޸���ҵ���ƣ���ѡ��洢��cookie������û�Ĺ��������⣬ÿ�κ�̨�޸����ƺ������ҵѡ��cookie
//             var refreshCookieName = "selectedStore20170225";
//             if ($.fn.cookie(refreshCookieName)) {

//             } else {
//                 $.fn.cookie(refreshCookieName, '1', {
//                     expires: 30,
//                     path: '/',
//                     domain: 'ofweek.com'
//                 });
//                 $.fn.cookie('selectedStore', '[]', {
//                     expires: -1,
//                     path: '/',
//                     domain: 'ofweek.com'
//                 });
//                 $.fn.cookie('noSelectdStore', '[]', {
//                     expires: -1,
//                     path: '/',
//                     domain: 'ofweek.com'
//                 });
//             }

//             if ($.fn.cookie('selectedStore')) {
//                 hydata = JSON.parse($.fn.cookie('selectedStore'));
//             } else {
//                 hydata = defaultConfig;
//                 $.fn.cookie('selectedStore', JSON.stringify(hydata), {
//                     expires: 30,
//                     path: '/',
//                     domain: 'ofweek.com'
//                 });
//             }

//             for (var i = 0; i < hydata.length; i++) {
//                 html += "<li><a href=" + hydata[i].url + " data-id=" + hydata[i].id + ">" + hydata[i].sitename + "</a></li>"
//             }
//             $(".index-nav ul").prepend(html);

//         }
//         //δѡ����ҵ
//         function loadWaitIndustry() {
//             if (!$.fn.cookie('noSelectdStore')) {
//                 $.ajax({
//                     url: '/newsite/getAllProductTypeList.xhtml',
//                     dataType: "json",
//                     success: function (data) {
//                         for (var i = 0; i < data.length; i++) {
//                             for (var j = 0; j < defaultConfig.length; j++) {
//                                 if (data[i].id == defaultConfig[j].id) {
//                                     delete data[i];
//                                     break;
//                                 }
//                             }
//                         }
//                         for (var k = 0; k < data.length; k++) {
//                             if (data[k] != null && data[k] != undefined) {
//                                 leaveHtml += "<li class='channelFigure'><a href='javascript:;' data-url=" + data[k].url + " data-id=" + data[k].id + " >" + data[k].sitename + "</a></li>";
//                             }
//                         }

//                         $("#add-control ul").append(leaveHtml);
//                     }
//                 });

//             } else {
//                 loadSubIndustry("noSelectdStore", "#add-control ul");
//             }
//         }

//         function loadSubIndustry(store, ele) {
//             var html = "";
//             var hydata = null;
//             if ($.fn.cookie(store)) {
//                 hydata = JSON.parse($.fn.cookie(store));
//             } else {
//                 hydata = defaultConfig;
//             }

//             for (var i = 0; i < hydata.length; i++) {
//                 html += '<li class="channelFigure"><a href="javascript:;" data-url=' + hydata[i].url + ' data-id=' + hydata[i].id + '>' + hydata[i].sitename + '</a></li>'
//             }
//             $(ele).append(html);
//         }

//         function selectedHyStore() {
//             $.fn.cookie('selectedStore', '[]', {
//                 expires: 30,
//                 path: '/',
//                 domain: 'ofweek.com'
//             });
//             selectedStore = JSON.parse($.fn.cookie("selectedStore"));

//             $("#remove-control li").each(function () {
//                 var $a = $(this).find("a");
//                 selectedStore.push({
//                     "sitename": $a.text(),
//                     "id": $a.data("id"),
//                     "url": $a.data("url")
//                 });

//             })
//             $.fn.cookie('selectedStore', JSON.stringify(selectedStore), {
//                 expires: 30,
//                 path: '/',
//                 domain: 'ofweek.com'
//             });

//         }

//         function noSelectedHyStore() {
//             $.fn.cookie('noSelectdStore', '[]', {
//                 expires: 30,
//                 path: '/',
//                 domain: 'ofweek.com'
//             });
//             noSelectdStore = JSON.parse($.fn.cookie("noSelectdStore"));

//             $("#add-control li").each(function () {
//                 var $a = $(this).find("a");
//                 noSelectdStore.push({
//                     "sitename": $a.text(),
//                     "id": $a.data("id"),
//                     "url": $a.data("url")
//                 });

//             })
//             $.fn.cookie('noSelectdStore', JSON.stringify(noSelectdStore), {
//                 expires: 30,
//                 path: '/',
//                 domain: 'ofweek.com'
//             });

//         }

//         //��ӵ�����ҵ
//         $addCon.on('click', 'li', function () {
//             $(this).appendTo($removeUl);
//             selectedHyStore();
//             noSelectedHyStore();

//         })
//         //���ȫ����ҵ
//         $all.on('click', function () {
//             $addUl.children().appendTo($removeUl);
//             selectedHyStore();
//             noSelectedHyStore();
//         })

//         //ɾ����ҵ(����Ҫѡ��һ����ҵ)
//         $removeCon.on('click', 'li', function () {
//             if ($removeUl.find("li").length > 1) {
//                 $(this).appendTo($addUl);
//                 selectedHyStore();
//                 noSelectedHyStore();
//             }
//         })

//         loadIndexIndustry(); //��ҳ��ҵ
//         loadSubIndustry("selectedStore", ".selected-control"); //��ѡ����ҵ
//         loadWaitIndustry(); //δѡ�����ҵ

//     })();

//     var siteflag = $('#siteflag').val();
//     if (siteflag != null && siteflag == 'subsite') {
//         $(".news-list li:not(.ad)").each(function () {
//             var addtimestrap = $(this).find("input[name='news_timstrap']").val();
//             $.fn.cookie('beginaddtime_subsite', addtimestrap, {
//                 expires: 30,
//                 path: '/',
//                 domain: 'ofweek.com'
//             });
//             return false;
//         });
//     }

// });

// function getSelectedHyid() {
//     var hydata = JSON.parse($.fn.cookie('selectedStore'));
//     var hydataArray = new Array();
//     for (var i = 0; i < hydata.length; i++) {
//         hydataArray.push(hydata[i].id);
//     }
//     return hydataArray.join();

// }

// var isFocusPictureNewsListLoaded = false;
// var isTopNewsListLoaded = false;
// var isNewsListLoaded = false;

// function initFocusPictureNewsList() {
//     var hydata = getSelectedHyid();
//     $.ajax({
//         url: '/getFocusPictureNewsList.html',
//         data: "producttype=" + hydata,
//         type: 'get',
//         dataType: 'json',
//         success: function (rs) {
//             var data = {
//                 focusnewslist: rs
//             }
//             var html = baidu.template('templateFocusPictureNews', data);
//             $("#focusPicNewsList").html(html);
//             $("#focusPicNewsList").show();
//             isFocusPictureNewsListLoaded = true;
//             if (isTopNewsListLoaded && isNewsListLoaded) {
//                 $('#isFirstPageLoaded').val('101');
//             }
//         }
//     })
// }

// function initTopNewsList() {
//     var hydata = getSelectedHyid();
//     var newstype = $('#newstype').val();
//     $.ajax({
//         url: '/getTopNewsList.html',
//         data: "producttype=" + hydata + "&page=1&newstype=" + newstype,
//         type: 'get',
//         dataType: 'json',
//         success: function (rs) {
//             var data = {
//                 topnewslist: rs
//             }
//             var html = baidu.template('templateTopnews', data);
//             $("#topnewslist .head-news").each(function () {
//                 $(this).remove();
//             });
//             $("#topnewslist").prepend(html);
//             isTopNewsListLoaded = true;
//             if (isFocusPictureNewsListLoaded && isNewsListLoaded) {
//                 $('#isFirstPageLoaded').val('101');
//                 $("#topnewslist").show();
//             } else if (isNewsListLoaded) {
//                 $("#topnewslist").show();
//             }
//         }
//     })
// }

// function initNewsList() {
//     var newstype = $('#newstype').val();
//     var hydata = getSelectedHyid();
//     $.ajax({
//         url: '/getNewsListByPage.html',
//         data: 'newstype=' + newstype + '&producttype=' + hydata + '&page=1&appflag=5000000',
//         type: 'get',
//         dataType: 'json',
//         success: function (rs) {
//             var data = {
//                 list: rs
//             }
//             var html = baidu.template('templatestr1', data);
//             $(".news-list").html(html);
//             if (rs.length > 0) {
//                 var news0 = rs[0];
//                 if (rs[0].type == '101') {
//                     news0 = rs[1];
//                 }
//                 $.fn.cookie('beginaddtime_index', news0.addtimestrap, {
//                     expires: 30,
//                     path: '/',
//                     domain: 'ofweek.com'
//                 });
//             }
//             isNewsListLoaded = true;
//             if (isFocusPictureNewsListLoaded && isTopNewsListLoaded) {
//                 $('#isFirstPageLoaded').val('101');
//                 $("#topnewslist").show();
//             } else if (isTopNewsListLoaded) {
//                 $("#topnewslist").show();
//             }
//         }
//     })


// }

// function initIndexCatNewsList() {
//     var newstype = $('#newstype').val();
//     var hydata = getSelectedHyid();
//     $.ajax({
//         url: '/getNewsListByPage.html',
//         data: 'newstype=' + newstype + '&producttype=' + hydata + '&page=1&appflag=5000000',
//         type: 'get',
//         dataType: 'json',
//         success: function (rs) {
//             var data = {
//                 list: rs
//             }
//             var html = baidu.template('templatestr1', data);
//             $(".news-list").html(html);
//             if (rs.length > 0) {
//                 var news0 = rs[0];
//                 if (rs[0].type == '101') {
//                     news0 = rs[1];
//                 }
//                 $.fn.cookie('beginaddtime_index', news0.addtimestrap, {
//                     expires: 30,
//                     path: '/',
//                     domain: 'ofweek.com'
//                 });
//             }
//             $(".news-list").show();
//             $('#isFirstPageLoaded').val('201');
//         }
//     })


// }

// function getSearchListByPage() {
//     var hydata = $('#producttype').val();
//     var keyword = $('#keyword').val();
//     var page = parseInt($('#currentPage').val()) + 1;
//     $.ajax({
//         url: '/getSearchListByPage.html',
//         data: "producttype=" + hydata + "&page=" + page + "&keyword=" + encodeURI(encodeURI(keyword)),
//         type: 'get',
//         dataType: 'json',
//         success: function (rs) {
//             var data = {
//                 list: rs
//             }
//             var html = baidu.template('templatestr1', data);
//             $(".news-list").append(html);
//             $('#currentPage').val(page);
//         }
//     })

// }

// function dealdata() {
//     var keyword = $('#keywordtemp').val();
//     $('#keyword').val(encodeURI(keyword));
//     return true;
// }

function searchHotWord(key) {
    var url = "/searchlist.html?keyword=" + encodeURI(encodeURI(key)) + "&page=1&producttype=";
    window.location.href = url;
}

function login() {
    window.location.href = "http://m.ofweek.com/users/gotoIndex.xhtml";
}