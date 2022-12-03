const body = document.getElementById('body');
const nav = document.getElementById('nav');
const lecturerList = document.getElementById('lecturer-list');
const moreInfo = document.getElementById('more_info');
const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error');
const fname = document.getElementById('fname');
const message = document.getElementById('msg');


function openMobileMenu() {
    nav.style.display = 'block';
}
  
function closeMobileMenu() {
    nav.style.display = 'none';
}
  
openMobileMenu();
closeMobileMenu();

function getFormData() {
    const formData = {
      fname: fname.value,
      message: message.value,
      email: email.value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  }
  
  // function persistData() {
  //   if (!localStorage.getItem('formData')) {
  //     getFormData();
  //   } else {
  //     const fetchData = JSON.parse(localStorage.getItem('formData'));
  //     fname.setAttribute('value', fetchData.fname);
  //     email.setAttribute('value', fetchData.email);
  //     message.textContent = fetchData.message;
  //   }
  // }
  
  // window.onload = () => {
  //   persistData();
  // };
  
  // form.addEventListener('submit', (e) => {
  //   e.preventDefault();
  
  //   if (email.value !== email.value.toLowerCase()) {
  //     error.textContent = 'Please the content of the email field has to be in lower case.';
  //   } else {
  //     error.textContent = '';
  //     persistData();
  //     form.submit();
  //   }
  // });
  
  // fname.addEventListener('change', getFormData);
  // email.addEventListener('change', getFormData);
  // message.addEventListener('change', getFormData);
  
const LECTURERS_DATA = [
    {
        image: "images/lecturer1.png",
        name: "Dr. Bright Shaw",
        title: "Professor in Informatics",
        info: "Phd in Information science and head of Informatics dept.",
        Rank: "1",
    },
    {
        image: "images/lecturer3.png",
        name: "Jelyn Naa Barkey",
        title: "Professor in Javascript Applications",
        info: "Rich experience in Java and featured in Web Apps of various tech companies.",
        Rank: "2",
    },
    {
        image: "images/lecturer4.png",
        name: "Dr. Shenorah Mingles",
        title: "Professor in Information Technology",
        info: "A tech savvy with in-depth knowledge of modern technologies.",
        Rank: "3",
    },
    {
        image: "images/lecturer5.png",
        name: "Dr. Anastacia Clothworthy",
        title: "Principal of  Orbit Web Innovations",
        info: "Orbit Web Inno. is the brainchild of Anas. Started the school in 2019 to help educate and connect people from around the world.",
        Rank: "4",
    },
    {
        image: "images/lecturer2.png",
        name: "Dr. George Greggory",
        title: "Professor in Web Applications",
        info: "Greg a Web Application fanatic with a rich portfolio of collaborative project with great tech companies.",
        Rank: "5",
    },
    {
        image: "images/lecturer6.png",
        name: "Dr. Frederick Khan",
        title: "Professor in Artificial Intelligence",
        info: "Knowledge in simulating  human intelligence in machines that are programmed to think like humans and mimic their actions.",
        Rank: "6",
    },
];

function featuredFunction() {
  let featureCard = '';
  LECTURERS_DATA.forEach((item) => {
    const Ranking = item.Rank;
    const lecturerList = item.name;
    const { image } = item;
    const { title } = item;
    const { info} = item;
    if (Ranking <= 2) {
      featureCard += `<div class="course_lecturers">
      <img src="${image}" alt="" class="lecturer_icon">
      <div class="col-lg-6 col-6 col-sm-6">
          <h2 class="lecturer_name">${lecturerList}</h2>
          <p class="lecturer_title">${title}</p>
          <small>${info}</small>
      </div>
    </div>`;
    } else {
      featureCard += `<div class="course_lecturers class= hide">
      <img src="${image}" alt="" class="lecturer_icon">
      <div class="col-lg-6 col-6 col-sm-6">
          <h2 class="lecturer_name">${lecturerList}</h2>
          <p class="lecturer_title">${title}</p>
          <small>${info}</small>
      </div>
    </div>`;
    }
  });
  document.getElementById('lecturer-list').innerHTML = featureCard;
}
featuredFunction();
  
const moreBtn = () => {
    const lecturerItem = document.querySelectorAll(".lecturer-item");
    for (let i = items; i < items + 2; i++) {
        if (lecturerItem[i]) {
            lecturerItem[i].style.display = "flex";
        } else {
            lecturerBtn.style.display = "none";
        }
    }
    return (items += 2);
};

moreBtn;
