const unread = document.querySelectorAll('.unread');
const markButton = document.querySelector('.mark');
const sumNotification = document.querySelector('.numbernotification');

if (unread) {
  sumNotification.innerText = unread.length;
}

markButton.addEventListener('click', () => {
  unread.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove('unread');
      item.classList.add('read');
      const checkNewsNotify = document.querySelectorAll('.unread');
      sumNotification.innerText = checkNewsNotify.length;
    }, index * 600);
  });
});
