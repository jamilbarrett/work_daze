

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

  let currentHour = dayjs().get('hour')
  $('.time-block').each(function () {
    let timeBlockId = +(this).attr('id')

    switch (true) {
      case timeBlockId < currentHour:
        $(this).removeClass('present future').addClass('past');
        break;
      case timeBlockId === currentHour:
        $(this).removeClass('past future').addClass('present');
        break;
      default:
        $(this).removeClass('past present').addClass('future');
        break;
    }

  let savedUserInput = localStorage.getItem(timeBlockId)
  $(this).find('.description').val(savedUserInput)

  })
});
