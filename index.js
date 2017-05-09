const personForm = document.querySelector('form')

const renderColor = (color) => (`
  <div style="height: 100px; width: 100px; background-color: ${color}">
  </div>
`)

const buildListItem = (item) => {
  return `
    <li>
      <dt>${item.name}</dt>
      <dd>${item.value}</dd>
    </li>
  `
}

const buildList = (listValues) => {
  const colorDiv = renderColor(listValues.hairColor)
  const dl = document.createElement('dl');
  dl.style.border = '1px solid #1779ba';
  dl.innerHTML = `
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
  `

  return dl
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

  details.appendChild(buildList(formValues))
}

personForm.addEventListener('submit', handleSubmit)
