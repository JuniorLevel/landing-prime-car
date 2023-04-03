'use strict';

import './index.html';
import './index.scss';
import './js/burger/burger';
import './js/goTop/goTop';
import './js/popup/popup';
import './js/scroll-animation/scroll';

//Валидация формы

function clearForm(formFields) {
	formFields.map(formField => {
		formField.value = '';
		formRemoveError(formField);
	});
}

function emailTest(formElement) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
		formElement.value
	);
}

function formAddError(formElement) {
	formElement.parentElement.classList.add('_error');
	formElement.classList.add('_error');
}

function formRemoveError(formElement) {
	formElement.parentElement.classList.remove('_error');
	formElement.classList.remove('_error');
}

function getSelectedOption() {
	const options = Array.from(select.childNodes).filter(
		item => item.nodeName !== '#text' && item.hasAttribute('selected')
	);
	const [defaultOptionValue] = [...options];
	return defaultOptionValue.value;
}

function formValidation() {
	let error = 0;
	let formReq = document.querySelectorAll('._req');
	Array.from(formReq).forEach(item => {
		const formElement = item;

		formRemoveError(formElement);

		if (formElement.classList.contains('form-input__name')) {
			if (formElement.value === '') {
				formAddError(formElement);
				error++;
			}
		}

		if (formElement.type === 'email') {
			if (emailTest(formElement) || formElement.value === '') {
				formAddError(formElement);
				error++;
			}
		}

		if (formElement.type === 'tel') {
			if (formElement.value === '') {
				formElement.placeholder = '+7 xxx xxx xx xx';
				formAddError(formElement);
				error++;
			} else {
				const changeValue = formElement.value
					.split('')
					.join('')
					.replaceAll(' ', '');
				formElement.placeholder = 'Phone Number';
			}
		}

		if (formElement.classList.contains('select')) {
			if (formElement.value === getSelectedOption()) {
				formAddError(select);
				error++;
			}
		}

		if (formElement.classList.contains('textarea')) {
			if (formElement.value === '') {
				formAddError(formElement);
				error++;
			}
		}
	});

	const errorText = document.createElement('p');
	const errorTextElement = document.querySelector('.error-text');

	if (error === 0 && errorTextElement) {
		errorTextElement.remove();
	}

	if (error !== 0 && !errorTextElement) {
		const formBtn = document.querySelector('.form-input__btn');
		const formLastChild = form.lastChild.previousSibling;
		errorText.classList.add('error-text');
		errorText.style.display = 'block';
		errorText.style.width = '100%';
		errorText.style.fontSize = '20px';
		errorText.style.color = 'red';
		errorText.innerText = 'Please fill fields correctly!';
		form.insertBefore(errorText, formLastChild);
	}

	return error;
}

async function getResource(url) {
	const res = await fetch(url, {
		method: 'POST',
		body: new FormData(form),
	});

	if (res.ok) {
		let result = await res.json();
		const formFields = Array.from(document.querySelectorAll('input, textarea'));
		clearForm(formFields);
		form.classList.remove('_sending');
		alert('Your message sent!');
	}

	if (!res.ok) {
		throw new Error(`Не удалось получить ${url}, статус: ${res.status}`);
	}
	return await res.json();
}

async function formSend(e) {
	e.preventDefault();
	let error = formValidation();

	if (error === 0) {
		form.classList.add('_sending');
		getResource('./sendmail.php')
			.then(data => response(data))
			.catch(error => console.error(error));
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('#form');
	form.addEventListener('submit', formSend);
});
