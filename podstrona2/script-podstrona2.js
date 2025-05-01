//Tabela
let tabSwitchers = document.querySelectorAll('[target-wrapper]')
    tabSwitchers.forEach(item => {
        item.addEventListener('click', (e)=> {
            let currentWrapperId = item.getAttribute('target-wrapper')
            let currentWrapperTargetId = item.getAttribute('target-tab')
            
            let currentWrapper =  document.querySelector(`#${currentWrapperId}`)
            let currentWrappersTarget = document.querySelector(`#${currentWrapperTargetId}`)

            let allCurrentTabItem = document.querySelectorAll(`[target-wrapper='${currentWrapperId}']`)
            let allCurrentWrappersTarget = document.querySelectorAll(`#${currentWrapperId} .tab-content`)
              
            if(currentWrappersTarget) {
                if(!currentWrappersTarget.classList.contains('active')) {
                    allCurrentWrappersTarget.forEach(tabItem => {
                        tabItem.classList.remove('active')
                    })
                    allCurrentTabItem.forEach(item => {
                        item.classList.remove('active')
                    })
                    item.classList.add('active')
                    currentWrappersTarget.classList.add('active')
                }
            }
        })
    })
    function toggleAgencjaVisibility() {
    const agencje = document.querySelectorAll('.agencja-nazwa');
    agencje.forEach(agencja => {
      if (window.innerWidth >= 768) {
        agencja.classList.remove('hidden');
      } else {
        agencja.classList.add('hidden');
      }
    });
  }
  toggleAgencjaVisibility();
  window.addEventListener('resize', toggleAgencjaVisibility);

  //Układ słoneczny
  const planetFacts = {
    'Słońce': '<p class="text-center text-yellow-300 pb-2 font-bold text-xl">Słońce</p><p>⦿ <b>Parker Solar Probe</b> (NASA) – sonda najbliżej Słońca, od 2018 bada wiatr słoneczny i koronalne wyrzuty masy;<br>⦿ <b>Solar Orbiter</b> (ESA/NASA) - sonda od 2020 mierząca wiatr słoneczny, badająca magnetosfery i bieguny Słońca.<p>',
    'Merkury': '<p class="text-center text-[#929785] pb-2 font-bold text-xl">Merkury</p><p>⦿ <b>BepiColombo</b> (ESA/JAXA) - orbiter do badań pola magnetycznego, geologii i atmosfery. Jeszcze nie dotarł na orbitę planety, jego przylot jest prognzowany na 2025 lub 2026;<br>⦿ W przeszłości Merkurego odwiedziły sondy <b>MESSENGER</b> i <b>Mariner 10</b> - obie należące do amerykańskiej NASA.<p>',
    'Wenus': '<p class="text-center text-[#ff8818] pb-2 font-bold text-xl">Wenus</p><p>⦿ <b>Akatsuki</b> (JAXA) – od 2015 bada atmosferę Wenus, szczególnie superrotację;<br>⦿ <b>Sonda Magellan</b> (NASA) w latach 1989–1994 wykonywała mapy powierzchni oraz mapy pola grawitacyjnego planety.<p>',
    'Ziemia': '<p class="text-center text-[#52CFB5] pb-2 font-bold text-xl">Ziemia</p><p>⦿ <b>MSK</b> (Międzynarodowa Stacja Kosmiczna) – załogowa stacja badawcza na orbicie Ziemi. Jej głównym zadaniem jest prowadzenie badań w warunkach mikrograwitacji; <br>⦿ Na różnych orbitach Ziemi znajduje się około <b>12 tysięcy satelitów</b> pełniących różne funkcje. Najwięcej, bo ponad 8000 z nich, należy do USA, a na drugim miejscu jest Rosja z ponad 1500 satelitami;<br>⦿ Nowym polskim osiągnięciem w zakresie misji kosmicznych jest ramię <b>TITAN</b>, którego zadaniem ma być przeprowadzane serwisu orbitujących satelit w ramach kontraktu z Europejską Agencją Kosmiczną.<p>',
    'Mars': '<p class="text-center text-[#d83e23] pb-2 font-bold text-xl">Mars</p><p>⦿ <b>Perseverance</b> (NASA) to łazik od 2021 badający geologię i zbierający próbki;<br>⦿ <b>Ingenuity</b> (NASA) to pierwszy statek powietrzny, który wykonał kontrolowany lot pozaziemski. Dron operował w latach 2021–2024;<br>⦿ Łazik <b>Curiosity</b> (NASA) od 2012 poszukuje odpowiedzi na pytanie, czy na Marsie kiedykolwiek mogło być życie. W Internecie zasłynął z tego, że w 2013 zaszumiał sobie piosenkę na "urodziny".<p>',
    'Jowisz': '<p class="text-center text-[#DDCFC6] pb-2 font-bold text-xl">Jowisz</p><p>⦿ <b>Juno</b> (NASA) – orbiter badający atmosferę, pole magnetyczne i wnętrze Jowisza (od 2016);<br>⦿ <b>Juice</b> (ESA) - sonda mająca przebadać trzy księżyce Jowisza: Ganimedesa, Kallisto i Europę. Na miejsce dotrze w 2031.<p>',
    'Saturn': '<p class="text-center text-[#dbbc79] pb-2 font-bold text-xl">Saturn</p><p>⦿ <b>Cassini–Huygens</b> (NASA/ESA/ASI) to sonda, która badała atmosferę, pierścienie i księżyce Saturna. Misję zakończyła w 2017.<p>',
    'Uran': '<p class="text-center text-[#80d5fd] pb-2 font-bold text-xl">Uran</p><p>⦿ <b>Voyager-2</b> (NASA) to jedyna sonda, która minęła Urana (przelot w 1986) i Neptuna (w 1989). Nadal jest aktywna w przestrzeni międzygwiezdnej.<p>',
    'Neptun': '<p class="text-center text-[#7b8fff] pb-2 font-bold text-xl">Neptun</p><p>⦿ <b>Voyager-2</b> (NASA) to jedyna sonda, która minęła Urana (przelot w 1986) i Neptuna (w 1989). Nadal jest aktywna w przestrzeni międzygwiezdnej.<p>'
  };
  document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('click', () => {
        const name = planet.dataset.planet;
        showInfo(name, planet);
    });
});

function showInfo(name, element) {
const existingInfo = document.querySelector('.dynamic-info');
if (existingInfo) existingInfo.remove();

document.querySelectorAll('.planet').forEach(p => {
    p.classList.remove('activePlanet', 'activeBigPlanet', 'activeHugePlanet');
});
if (name === 'Słońce') {
    element.classList.add('activeHugePlanet');
} if (name === 'Jowisz') {
    element.classList.add('activeBigPlanet');
} else {
    element.classList.add('activePlanet');
}

const isDesktop = window.innerWidth >= 1024; //animacje fade-in textboxa
if (!isDesktop) {
    const infoBox = document.createElement('div');
    infoBox.className = "dynamic-info text-left text-lg p-5 rounded-sm border-2 bg-black max-w-xs";
    infoBox.innerHTML = planetFacts[name];
    void infoBox.offsetWidth;
    infoBox.classList.add('animate-fadeInScale');
    element.insertAdjacentElement('afterend', infoBox);
} else {
    const staticInfoBox = document.getElementById('planet-info');
    staticInfoBox.classList.remove('animate-fadeInScale');
    void staticInfoBox.offsetWidth;
    staticInfoBox.innerHTML = planetFacts[name];
    staticInfoBox.classList.add('animate-fadeInScale');
}}

window.addEventListener('resize', () => { //reset do default (usuwanie animacji i tekstu) po zmianie rozmiaru ekranu
    document.querySelectorAll('.dynamic-info').forEach(box => box.remove());
if (window.innerWidth >= 1024) {
    document.getElementById('planet-info').innerHTML = 'Kliknij na planetę/gwiazdę, by dowiedzieć się o satelitach, łazikach, sondach i innych maszynach, których zadaniem jest (lub było) badanie jej.';
    document.querySelectorAll('.planet').forEach(p => {
        p.classList.remove('activePlanet', 'activeBigPlanet', 'activeHugePlanet');
    });
}
});
document.addEventListener('click', (event) => { //wygaszenie animacji po naciśnięciu poza planetą
const clickedPlanet = event.target.closest('.planet');
if (!clickedPlanet) {
    document.querySelectorAll('.planet').forEach(p => {
        p.classList.remove('activePlanet', 'activeBigPlanet', 'activeHugePlanet');
    });
}
});