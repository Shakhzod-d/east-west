const socialsData = [
  { link: "#", icon: "/images/icons/telegram.svg" },
  { link: "#", icon: "/images/icons/instagram.svg" },
  { link: "#", icon: "/images/icons/facebook.svg" },
  { link: "#", icon: "/images/icons/twitter.svg" },
  { link: "#", icon: "/images/icons/in.svg" },
];

const socials = document.querySelector("#socials");

socialsData.map((item) => {
  return (socials.innerHTML += `
  <li>
   <a href="${item.link}">
    <img src="${item.icon}" alt="socials"/>
   </a>
  </li>
  `);
});

const servicesData = [
  { id: "1", text: "Machinery and equipment for the mining industry" },
  { id: "2", text: "Construction equipment" },
  { id: "3", text: "Road construction machines" },
  { id: "4", text: "Energy systems and engines" },
  { id: "5", text: "Lubricants" },
  { id: "6", text: "Tires" },
];

const services = document.querySelector("#services");

servicesData.map(
  (item) =>
    (services.innerHTML += `
    <div
      class="card"
      style="background-image: url('../images/services/${item.id}.jpg')"
    >
      <h2>${item.text}</h2>
    </div>
  `)
);

const partners = document.querySelector("#partners");

Array(15)
  .fill(0)
  .map(
    (_, ind) =>
      (partners.innerHTML += `
    <a class="card" href="#">
      <img src="/images/partners/${ind + 1}.svg" alt="partners"/>
    </a>
    `)
  );

const date = document.querySelector("#date");

date.innerHTML = new Date().getFullYear();

const faqQuestionsData = [
  { id: 0, text: "What types of heavy machinery do you offer for rental" },
  { id: 1, text: "How can I request a quote for renting equipment?" },
  {
    id: 2,
    text: "Do you provide maintenance and support during the rental period?",
  },
  { id: 3, text: "What are the rental terms and conditions?" },
  {
    id: 4,
    text: "How do you ensure the safety and reliability of your machinery?",
  },
  {
    id: 5,
    text: "Can I extend the rental period if my project takes longer than expected?",
  },
];

const faqsData = [
  {
    title:
      "Can I extend the rental period if my project takes longer than expected?",
    description:
      "We offer a wide range of heavy machinery, including excavators, bulldozers, loaders, cranes, and more. Our fleet is constantly updated with the latest models to ensure you have access to reliable and efficient equipment for your projects.",
  },
  {
    title:
      "Can I extend the rental period if my project takes longer than expected? 2",
    description: "this is a second",
  },
  {
    title:
      "Can I extend the rental period if my project takes longer than expected? 3",
    description: "this is a third",
  },
  {
    title:
      "Can I extend the rental period if my project takes longer than expected? 4",
    description: "this is a fourth",
  },
  {
    title:
      "Can I extend the rental period if my project takes longer than expected? 5",
    description: "this is  a fifth",
  },
  {
    title:
      "Can I extend the rental period if my project takes longer than expected? 6",
    description: "this is  a sixth",
  },
];

let activeFAQData = 0;

const faqQuestion = document.querySelector("#faq-left");
const faqAnswers = document.querySelector("#faq-right");

const changeFaqData = (id) => {
  console.log(id);
  activeFAQData = id;

  faqQuestion.innerHTML = "";
  faqAnswers.innerHTML = "";

  faqQuestionsData.map(
    (item) =>
      (faqQuestion.innerHTML += `  
     <label class="${
       activeFAQData == item.id ? "active" : ""
     }" onclick="changeFaqData(${item.id})">
       <input type="radio"/>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#E5E5E5"/>
       </svg>
       <p>${item.text}</p>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8 4L16 12L8 20" stroke="#777777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>
      </label>
    `)
  );

  faqAnswers.innerHTML += `
    <h2>${faqsData[activeFAQData].title}</h2>
    <p>${faqsData[activeFAQData].description}</p>
    `;
};

changeFaqData(1);

const sliderData = [
  {
    id: 1,
    title:
      "EastWest has been our go-to partner for heavy machinery rentals for years.",
    description:
      "Their equipment is always in top condition, and their customer service is unmatched. Thanks to their reliable support, our projects have consistently stayed on schedule.",
    name: "Ahmed Al-Maktoum",
    role: "Construction Project Manager",
  },
  {
    id: 2,
    title:
      "EastWest has been our go-to partner for heavy machinery rentals for years. 2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores alias, nostrum explicabo temporibus incidunt accusantium at beatae praesentium quia, ea, rerum eaque similique nobis molestiae ducimus vitae voluptatem rem?",
    name: "John Doe",
    role: "President and CEO of EastWest",
  },
  {
    id: 3,
    title:
      "EastWest has been our go-to partner for heavy machinery rentals for years. 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores alias, nostrum explicabo temporibus incidunt accusantium at beatae praesentium quia, ea, rerum eaque similique nobis molestiae ducimus vitae voluptatem rem?",
    name: "Diyorbek Burkhanov",
    role: "Front End Developer",
  },
];

const slider = document.querySelector("#slider");

const changeSlider = (id) => {
  console.log(id);

  slider.innerHTML = "";

  slider.innerHTML = `
          <div class="content">
            <h2>${sliderData[id - 1].title}</h2>
            <p>${sliderData[id - 1].description}</p>

            <div>
              <div>
                <h4>${sliderData[id - 1].name}</h4>
                <p>${sliderData[id - 1].role}</p>
              </div>

              <div class="slider-change">
                <div class="slider-left" onclick="changeSlider(${
                  id <= 1 ? sliderData.length : id - 1
                })">  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="24"
                    viewBox="0 0 12 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 19.438L8.95502 20.5L1.28902 12.71C1.10452 12.5197 1.00134 12.2651 1.00134 12C1.00134 11.7349 1.10452 11.4803 1.28902 11.29L8.95502 3.5L10 4.563L2.68202 12L10 19.438Z"
                      fill="#444444"
                    />
                  </svg>
                </div>
                <div class="slider-right" onclick="changeSlider(${
                  id >= sliderData.length ? 1 : id + 1
                })">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="24"
                    viewBox="0 0 12 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.99998 4.562L3.04498 3.5L10.711 11.29C10.8955 11.4803 10.9987 11.7349 10.9987 12C10.9987 12.2651 10.8955 12.5197 10.711 12.71L3.04498 20.5L1.99998 19.437L9.31798 12L1.99998 4.562Z"
                      fill="#444444"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="img">
            <img src="/images/testimionals/${id}.jpg" alt="person" />
          </div>
  `;
};

changeSlider(1);
