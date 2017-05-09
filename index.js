const personForm = document.querySelector('form')
const details = document.querySelector('.details')
function handleSubmit(ev) {
  ev.preventDefault()
  console.log(this.firstName.value)
  // details.textContent = this.firstName.value
  // details.innerHTML = `<strong>${this.firstName.value}</strong>`
  
  const em = document.createElement('em')
  em.textContent = this.firstName.value
  details.appendChild(em)
}

personForm.onsubmit = handleSubmit