const personForm = document.querySelector('form')

const renderColor = (color) => (`
  <div style="height: 100px; width: 100px; background-color: ${color}">
  </div>
`)

const buildList = (listValues) => {
  const colorDiv = renderColor(listValues.hairColor)
  return `
    <dl>
      <li>
        <dt>First Name</dt>
        <dd>${listValues.firstName}</dd>
      </li>
      <li>
        <dt>Hair Color</dt>
        <dd>${colorDiv}</dd>
      </li>
      <li>
        <dt>Age</dt>
        <dd>${listValues.age}</dd>
      </li>
      <li>
        <dt>Birthplace</dt>
        <dd>${listValues.birthplace}</dd>
      </li>
    </dl>
  `
}

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const formValues = {
    firstName: form.firstName.value,
    hairColor: form.hairColor.value,
    age: form.age.value,
    birthplace: form.birthplace.value,
  }

  details.innerHTML = buildList(formValues)
}

personForm.addEventListener('submit', handleSubmit)
