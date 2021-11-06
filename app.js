const input = document.getElementById('input')
const submitBtn = document.getElementById('submit')
const list = document.getElementById('list')

submitBtn.onclick = () => {
	const userInput = input.value
	input.value = ''

	const listItem = document.createElement('li')
	const listText = document.createElement('span')
	const listButton = document.createElement('button')

	list.appendChild(listItem)
	listItem.appendChild(listText)
	listText.textContent = userInput
	listItem.appendChild(listButton)
	listButton.textContent = 'Delete'

	listButton.onclick = (e) => {
		list.removeChild(listItem)
		console.log(e.target.value)
	}

	// focuses on the input area
	input.focus()
}
