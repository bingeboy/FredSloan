/**
 * User: pizza
 * Date: 5/25/13
 * Time: 11:12 AM
 */

(function () {
    "use strict";

      console.log("repsonsive js loaded"); //For testing correct path on page load. Delete when loading it working - JPM

// This is an method used for webkit animations only. Added but commented out since no current use w/framework. - JPM
//    function cssAnimationEnd() {
//    //looks for the ID box from the css and fires the event listen when the animation is complete.
//        box.addEventListener( 'webkitAnimationEnd', function( event ){
//            alert( "BreakPoint!" );
//        }, false );
//    }

// code taken from http://www.paulrhayes.com/2011-11/use-css-transitions-to-link-media-queries-and-javascript/ -JPM
    var mq = document.querySelectorAll('.mq')[0];
        mq.addEventListener('webkitTransitionEnd', function() {
        /* Transition ends, media query matched */
        alert( "Media Query EventListener Goes whoooa!" );
    }, false);


}());