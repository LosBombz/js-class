/*global jQuery:true, TweenMax:true*/
(function($){
	'use strict';



	// doc ready
	$(function(){
		var $circle = $('.circle');	

		// animate to the right
		// TweenMax.to($circle, 1, {left: 1000});
		
		// scale to nothing
		// TweenMax.to($circle, 1, {scale: 0});
		
		// from right
		// TweenMax.from($circle, 1, {left: 1000});
		
		// scale to nothing
		// TweenMax.from($circle, 1, {scale: 0});
		
		// scale to nothing
		// TweenMax.fromTo($circle, 1, {scale: 0, top: 500}, {scale: 3, left: 1000, top: 0}); 
		

		// with easing
		// TweenMax.to($circle, 1, {left: 1000, ease: 'Power1.easeOut'});
		
		// yoyo
		// TweenMax.to($circle, 1, {left: 1000, ease: 'Power4.easeInOut', yoyo: true, repeat: 3});

		// 2d transform
		// TweenMax.to($circle, 1, {x: 1000});
		
		// 3d transform
		// TweenMax.set('body', {})
		TweenMax.to($circle, 1, {scale: 2, z: 0.1, ease: 'Power4.easeInOut', onComplete: function(){console.log('Hi Salem');}});
		
	});
}(jQuery));