$(function(){
  var saveButtons              = $('#editPersonalInfoForm .save-buttons');
	var editButtons              = $('#editPersonalInfoForm .edit-buttons');
  var buttonEditData           = $('#cabinetEditPersonalInfo');
  var buttonChangePassword     = $('#cabinetChangePassword');
  var buttonCancelEdit         = $('#cabinetEditPersonalInfoCancel');
  var buttonSavePassword       = $('#cabinetChangePasswordSave');
  var buttonCancelPasswordEdit = $('#cabinetChangePasswordCancel');

  var editPersonalInfoForm = $('#editPersonalInfoForm');
  var changePasswordForm   = $('#changePasswordForm');

  buttonEditData.on('click', function(){
    editPersonalInfoForm.find('input').prop('disabled', false);
    saveButtons.show();
    editButtons.hide();
  });

  buttonCancelEdit.on('click', function(){
    editPersonalInfoForm.find('input').prop('disabled', true);
    saveButtons.hide();
    editButtons.show();
  });

  buttonChangePassword.on('click', function(){
    changePasswordForm.toggle('fast');
  });
  buttonCancelPasswordEdit.on('click', function(){
    changePasswordForm.hide('fast');
  });
});

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      position = $(window).scrollTop();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});