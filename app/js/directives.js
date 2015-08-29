'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])

    .directive('helloworld', function () {

        return {
            restrict: 'E',
            template: '<p">This is a Simple Directive  </p>'           
            }
      
    })
.directive('venkat1', function () {

    return {
        scope: {},
        restrict: 'E',
        template: ['<p title ="I am a directive">',
        'Mouseover me to see a color change',
        '</p>'].join(''),
        link: function (scope, element, attrs) {
            var katattr = attrs.mycolor || "red";
            element.bind('mouseover', function (e) {
                element.css("color", katattr);
            });
            element.bind('mouseleave', function (e) {
                element.css("color", "black");
            });
        }
    }
})

.directive('slider', function () {
    return {
        scope: {},
        restrict: 'E',
        template: ['<div class=\"boxgrid\">',
        '<img class=\"cover\"/>',
        '<h3></h3>',
        '<p><span></span><br /><a target=\"_BLANK\"></a></p>',
        '</div>'].join(''),

        link: function (scope, element, attrs) {

            //element.find('.boxgrid').css({
            //    width: '325px',
            //    height: '260px'
            //});

            var tempSrc = attrs.src || "img/jareck.jpg";
            var tempTitle = attrs.title || "Default Behaviour";
            var tempParaText = attrs.paratext || "Complex Angular Directive";
            var tempHref = attrs.href || "http://plnkr.co/edit/OAwUc3Oy9BGPOfoBCQAU?p=preview";
            var tempLinkText = attrs.linktext || 'Plunker';
            var tempDirection = attrs.direction || 'thecombo';
            var tempDuration = attrs.duration || 300;

            element.find('img').attr("src", tempSrc);
            element.find('h3').html(tempTitle);
            element.find('p > span').html(tempParaText);
            element.find('p > a').attr("href", tempHref).html(tempLinkText);

            var slideparams = {
                slideup: { top: '-260px' },
                slideupzero: { top: '0px' },
                combo: { top: '260px', left: '325px' },
                combozero: { top: '0px', left: '0px' },
                slideright: { left: '325px' },
                sliderightzero: { left: '0px' }
            };

            function slide(inparam, outparam, durationTime) {
                element.bind('mouseover', function () {
                    $(".cover", this).stop().animate(inparam, { queue: false, duration: parseInt(durationTime, 10) });
                });
                element.bind('mouseleave', function () {
                    $(".cover", this).stop().animate(outparam, { queue: false, duration: parseInt(durationTime, 10) });
                });
            }

            //sliding
            if (tempDirection === "slideup") {
                slide(slideparams.slideup, slideparams.slideupzero, tempDuration);
            }
            else if (tempDirection === "slideright") {
                slide(slideparams.slideright, slideparams.sliderightzero, tempDuration);
            }
            else {
                slide(slideparams.combo, slideparams.combozero, tempDuration);
            }
        }
    }
});


