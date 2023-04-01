// import 'jquery-validation'



// $(function () {
//   var form = $('.form');
//   if (form.length) {
//     form.validate({
//       rules: {
//         Имя: {
//           required: true
//         },
//         Телефон: {
//           required: true
//         },
//         Город: {
//           required: true
//         },
//         Адрес: {
//           required: true
//         },
//         Сайт: {
//           required: true
//         },
//         Ссылка_на_товар: {
//           required: true
//         },
//         Название_компании: {
//           required: true
//         },
//         Тема: {
//           required: true
//         }

//       },
//       messages: {
//         Имя: {
//           required: 'ФИО обязательно для заполнения'
//         },
//         Телефон: {
//           required: 'Телефон обязателен для заполнения'
//         },
//         Город: {
//           required: 'Город обязателен для заполнения'
//         },
//         Адрес: {
//           required: 'Адрес обязателен для заполнения'
//         },
//         Сайт: {
//           required: 'Необходимо выбрать сайт'
//         },
//         Ссылка_на_товар: {
//           required: 'Необходимо ввести ссылку'
//         },
//         Название_компании: {
//           required: 'Необходимо ввести название компании'
//         },
//         Тема: {
//           required: 'Необходимо указать тему'
//         }
//       }
//     })
//     $('.form, .popup__form form').submit(function () {
//       var th = $(this);
//       $.ajax({
//         type: "POST",
//         url: "mail.php",
//         data: th.serialize()
//       }).done(function () {
//         $('body').addClass('no-scroll');
//         $('.popup#done').addClass('open');
//         $('.popup#consultation').removeClass('open');
//       });
//       return false;
//     });
//   }
// });

// $(function () {
//   var form = $('#consultation form');
//   if (form.length) {
//     form.validate({
//       rules: {
//         Имя: {
//           required: true
//         },
//         Телефон: {
//           required: true
//         }
//       },
//       messages: {
//         Имя: {
//           required: 'Имя обязательно для заполнения'
//         },
//         Телефон: {
//           required: 'Телефон обязателен для заполнения'
//         }
//       }
//     })
//     // $('form').submit(function () {
//     //   var th = $(this);
//     //   $.ajax({
//     //     type: "POST",
//     //     url: "mail.php",
//     //     data: th.serialize()
//     //   }).done(function () {
//     //     $('body').addClass('no-scroll');
//     //     $('.popup#done').addClass('open');
//     //     $('.popup#consultation').removeClass('open');
//     //   });
//     //   return false;
//     // });
//   }
// });



$(' .form-wrap__checkbox input,  .form-wrap__checkbox label span').on('click', function () {
  if ($(' .form-wrap__checkbox input').is(':checked')) {
    $('.order__form .btn').removeAttr('disabled')
  } else {
    $('.order__form .btn').prop('disabled', true);
  }
});

$('form').submit(function () {
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php",
    data: th.serialize()
  }).done(function () {
    $('body').addClass('no-scroll');
    $('.popup#done').addClass('open');
    $('.popup#consultation').removeClass('open');
  });
  return false;
});