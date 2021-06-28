const phone = document.getElementById('phone')
const name = document.getElementById('name')
const email = document.getElementById('email')
const credit = document.getElementById('credit')
const cvc = document.getElementById('cvc')
const billing = document.getElementById('billing')

billing.addEventListener('submit', (e)=>{
	let messages = []
		if (name.value === '' || name.value == null){
			messages.push('Name is Required')
		}
		if (messages.length > 0) {
			e.preventDefault()
			errorElement.innerText = messages.join(',')
		}
}