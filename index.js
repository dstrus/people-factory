const personForm = document.querySelector('form')

const renderColor = (color) => (`
  <div style="height: 100px; width: 100px; background-color: ${color}">
  </div>
`)

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')
  const firstName = form.firstName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthplace.value
  
  const colorDiv = renderColor(hairColor)

  details.innerHTML = `
    <dl>
      <li>
        <dt>First Name</dt>
        <dd>${firstName}</dd>
      </li>
      <li>
        <dt>Hair Color</dt>
        <dd>${colorDiv}</dd>
      </li>
      <li>
        <dt>Age</dt>
        <dd>${age}</dd>
      </li>
      <li>
        <dt>Birthplace</dt>
        <dd>${birthplace}</dd>
      </li>
    </dl>
  `
}

personForm.addEventListener('submit', handleSubmit)
