const personForm = document.querySelector('form')
function handleSubmit(ev) {
  ev.preventDefault()
  console.log({ev})
  console.log(ev.target)
  console.log({ this: this })
}

personForm.onsubmit = handleSubmit