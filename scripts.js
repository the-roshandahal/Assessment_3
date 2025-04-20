jQuery(document).ready(function ($) {
    
    //variables
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 900, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 900, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('.control_prev').click(function () {
        moveLeft();
    });

    $('.control_next').click(function () {
        moveRight();
    });

});
$(document).ready(function() {

    // required elements
    var imgPopup = $('.img-popup');
    var imgCont  = $('.container__img-holder');
    var popupImage = $('.img-popup img');
    var closeBtn = $('.close-btn');
  
    // handle events
    imgCont.on('click', function() {
      var img_src = $(this).children('img').attr('src');
      imgPopup.children('img').attr('src', img_src);
      imgPopup.addClass('opened');
    });
  
    $(imgPopup, closeBtn).on('click', function() {
      imgPopup.removeClass('opened');
      imgPopup.children('img').attr('src', '');
    });
  
    popupImage.on('click', function(e) {
      e.stopPropagation();
    });
    
  });




  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const firstName = document.getElementById('fname');
        const lastName = document.getElementById('lname');
        const email = document.getElementById('email');
        const message = document.querySelector('textarea');
        
        resetErrors([firstName, lastName, email, message]);
        
        let isValid = true;
        
        if (!firstName.value.trim()) {
            showError(firstName, 'First name is required');
            isValid = false;
        }
        
        if (!lastName.value.trim()) {
            showError(lastName, 'Last name is required');
            isValid = false;
        }
        
        if (!email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!validateEmail(email.value.trim())) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        }
        
        if (!message.value.trim()) {
            showError(message, 'Message is required');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'Message should be at least 10 characters');
            isValid = false;
        }
        
        if (isValid) {
            alert('Form submitted successfully!');
            form.reset(); // Reset form after submission
        }
    });
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function showError(input, message) {
        const formControl = input.parentElement;
        const errorText = formControl.querySelector('.error-text') || document.createElement('small');
        errorText.className = 'error-text';
        errorText.style.color = 'red';
        errorText.textContent = message;
        
        if (!formControl.querySelector('.error-text')) {
            formControl.appendChild(errorText);
        }
        
        input.style.borderColor = 'red';
    }
    
    function resetErrors(inputs) {
        inputs.forEach(input => {
            input.style.borderColor = '';
            const errorText = input.parentElement.querySelector('.error-text');
            if (errorText) {
                errorText.remove();
            }
        });
    }
});