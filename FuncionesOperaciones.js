const user = {
	name: 'Christian',
	lastName: 'Moreno',
	nickname: 'Christian_Andres'
}

const miFuntion = ({ name, lastName, nickname}) => {
	const fullname = `${name} ${lastName}`
	console.log(`Mi nombre es ${fullname} pero prefiero que me digas ${nickname}`)
}

miFuntion(user);

