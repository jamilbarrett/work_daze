

$(function () {

  // current day
  const today = dayjs()
  $('#currentDay').text(today.format('dddd, MMMM, DD, YYYY'))


// Save button of user input and localstorage
  $('.saveBtn').on('click', function () {
    const userInput = timeBlock.find('.description').val()
    const timeBlock = $(this).closest('.time-block')
    const timeBlockId = timeBlock.attr('id')

    localStorage.setItem(timeBlockId, userInput)
  })

  // places current hour tracker for scheduler
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
