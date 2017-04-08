// Exercises
var $ = window.jQuery

// Exercise 1
$.get(('http://api.abc.com'), function () {
  alert('Success!')
})

// Exercise 2
http://api.abc.com/#abc=123

// Exercise 3
$.post(('http://api.abc.com'), function () {
  alert('Success!')
})

// Exercise 4
http://api.abc.com/#abc=123

// Exercise 5
$.get('http://api.abc.com')
  .done(function () {
    console.log('Success!')
  })
  .fail(function () {
    console.log('Error!')
  })

// Exericse 6
$.post(('http://api.xyz.com'), function (data) {
  console.log(data)
})

// Exercise 7
$('#hideme').hide()

// Exercise 8
$('#content').css('color', 'green')
