const personForm = document.querySelector('form')
const details = document.querySelector('.details')

const handleSubmit = (ev) => {
  ev.preventDefault()
  const firstName = ev.target.firstName.value
  console.log(firstName)
  // details.textContent = firstName
  // details.innerHTML = `<strong>${firstName}</strong>`

  const em = document.createElement('em')
  em.textContent = firstName
  details.appendChild(em)
}

personForm.addEventListener('submit', handleSubmit)
