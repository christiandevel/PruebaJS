const tipoSubcripcion = 'ExpertPlus';

if(tipoSubcripcion == 'Free'){
	console.log('Solo puedes tomar los cursos gratis')
}else if(tipoSubcripcion == 'Basic'){
	console.log('Puedes tomar casi todos los cursos de platzi durante un mes')
}else if(tipoSubcripcion == 'Expert'){
	console.log('Puedes tomar todos los cursos de platzi durante un año')
}else{
	console.log('Puedes tomar  todos los cursos de platzi durante un año (Dos personas)')
}