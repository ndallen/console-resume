const resume = {
  name: 'Neil Allen',
  career: 'Entrepreneur / Web Developer',
  description: 'I live in beautiful Thailand with my wife, son and labrador Rosie. I am into all things tech and currently self learning front end Javascript.',
  interests: ['Football', 'Music', 'Playing guitar', 'Coding', 'Gaming', 'Movies', 'Food'],
  previousExperience: [
    'started ecommerce retail company that turned over $2M revenue in 4 years',
    '15 years experience of ecommerce marketplaces such as Amazon, Ebay, Fruugo',
    'In a previous life I was a production planner with SAP skills'
  ],
  skills:['HTML', 'CSS', 'Bootstrap', 'BAM: Javascript', 'BAM: Photoshop', 'BAM: Guitar']
}

//name (CAPITALISED), job title and description 

function displayPosition(name, career, description){
console.log(`Name: ${name.toUpperCase()}`);
console.log(`Career: ${career}`)
console.log(`Description: ${description}`)

}
displayPosition(resume.name,resume.career, resume.description);

function displayInterests(previousExperience) {
  console.log('My Interests includes;')
  for (let i = 0; i < previousExperience.length; i++) {

    console.log('* ' + previousExperience[i]);
  }
}

displayInterests(resume.interests)

function displayExperience(previousExperience) {
  console.log('My Previous Experience includes;')
  for(let i = 0; i < previousExperience.length; i++) {
    
    console.log('* ' + previousExperience[i]);
  }
}

displayExperience(resume.previousExperience);


function displaySkill(){
  console.log('My Skills Include;');
  for(i = 0; i < resume.skills.length; i++) {
    console.log('* ' + resume.skills[i]);
  }
  
};

displaySkill();