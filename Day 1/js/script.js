// let contactForm = document.forms.contactForm;

function submitData(e){
  e.preventDefault(); 
  contactForm.classList.add('hide');
  
  const data = document.getElementById("data");
  const item1 = document.createElement("li");
  const item2 = document.createElement("li");
  
  item1.appendChild(document.createTextNode(`${contactForm.elements.firstName.value} ${contactForm.elements.lastName.value} from ${contactForm.elements.country.value}`));
  
  data.appendChild(item1);
   item2.appendChild(document.createTextNode(`${contactForm.elements.subject.value}`));
  
  data.appendChild(item2);
}