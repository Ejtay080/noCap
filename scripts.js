var tabEl = document.querySelector('a[data-bs-toggle="list"]')
tabEl.addEventListener('shown.bs.tab', function (event) {
  event.target // newly activated tab
  event.relatedTarget // previous active tab
})
