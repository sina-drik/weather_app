// `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`

//https://api.weatherapi.com/v1/current.json?key=ad8912897351435da7584022231507&q=andimeshk&aqi=no

const form =document.querySelector('form');
const input=document.querySelector('input');
const msg=document.querySelector('.msg');
const list=document.querySelector('.cities');
const apikey='ad8912897351435da7584022231507';

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputvalue=input.value
    const url=`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${inputvalue}`;
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            const {current:{condition:{icon,text},temp_c},location:{country,name,localtime}}=data;
            const weatherIcon=`https:${icon}`;
            const li=document.createElement('li');
            const markup=`
                <h2 class="city-name"><span>${name} , </span><span>${country}</span></h2>
                <div class="city-temp">
                    ${Math.round(temp_c)}
                    <span class="degreesign">
                        <h4 class="degreeletter">C</h4>
                    </span>
                </div>
                <figure>
                    <img class="city-icon" src="${weatherIcon}">
                    <figurecaption>${text}</figurecaption></br>
                    <span>local time: ${localtime}</span>
                </figure>
            `;
            li.classList.add("city")
            li.innerHTML=markup;
            list.appendChild(li);
            msg.innerText="";
            // console.log(weatherIcon);
            // console.log(temp_c)
            // console.log(country)
            // console.log(name)
            // console.log(localtime)
        })
        .catch(()=>{
            msg.innerText='Invalid city name has entered'
        })
        input.value="";
})

