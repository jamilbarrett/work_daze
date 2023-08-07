

$(function () {

  // current day
  const today = dayjs()
  $('#currentDay').text(today.format('dddd, MMMM, DD, YYYY'))


// Save button of user input and localstorage
  $('.saveBtn').on('click', function () {
    const timeBlock = $(this).closest('.time-block')
    const timeBlockId = timeBlock.attr('id')
    const userInput = timeBlock.find('.description').val()

    localStorage.setItem(timeBlockId, userInput)
  })

  // coordinates timeblock
  let currentHour = dayjs().get('hour')
  $('.time-block').each(function () {
    let timeBlockId = +$(this).attr('id')

    switch (true) {
      case timeBlockId < currentHour:
        $(this).addClass('past');
        break;
      case timeBlockId === currentHour:
        $(this).addClass('present');
        break;
      default:
        $(this).addClass('future');
        break;
    }

  let savedUserInput = localStorage.getItem(timeBlockId)
  $(this).find('.description').val(savedUserInput)

  })
});
