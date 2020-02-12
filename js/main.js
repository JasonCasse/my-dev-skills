let newSkill = ''

$('.addSkillBtn').on('click',function(evt) {
    newSkill = $('.addSkill').val()
let section = `
  <tr>
  <td><button class="remove">X</button>${newSkill}</td>
  </tr>`
  $('tbody').append(section)
  $('.addSkill').val('');
})

$('tbody').on('click', 'button', function(evt) {
    $(this).closest('td').fadeOut(500, function() {
        $(this).remove()
    });


});