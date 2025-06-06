function openModal(id) {
  document.getElementById(id).classList.add('active');
}
function closeModal(event, id) {
  event.stopPropagation();
  document.getElementById(id).classList.remove('active');
}
