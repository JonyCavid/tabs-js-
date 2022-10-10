

//Comments for Hasan Eyvazoff


// burda querySelectorAll da butun knopklari seçirik (ona gerede All yaziram)

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll('.tabs__item');

    // "forEach" butun kileksiyamizdan keçir və ona obrabotcik sobitiya klika verecek

tabsBtn.forEach(function(item) {

    // her "item" biz obrabotcik sobitiya klika veririk
    item.addEventListener("click", function() {
        // peremenniy yaratdiq "let"
        let currentBtn = item;
                                // atributunu isteyirik ve ne istedimiyizi içine yaziriq ("data-tab")
        let tabId = currentBtn.getAttribute("data-tab");
        // bidene element seçirik document.querySelector(tabId)
        let currentTab = document.querySelector(tabId);

        // indi hamidan active classini çixaririq ve sonrada konkret buttona class active veririk (25 setir)
        tabsBtn.forEach(function(item) {
            item.classList.remove('active');
      });
      // logika elede galir, sadece tabsBtn tabsItem-e deyişir 
      tabsItems.forEach(function(item) {
        item.classList.remove('active');
  });
      // currentBtn-uçun class yaratdiq. Indi tablara basanda,ustune active classi goturur
      currentBtn.classList.add('active');
      // currentTab-a 'active' veririk
      currentTab.classList.add('active');
    });
});



// trigger yaradiriq. Html "active" silirik ve onu js içinde yaziriq

// birinci button seçirik
// ".tabs__nav-btn" yerine ".tabs__nav-btn:nth-child(2)" onda default kimi ikinci tab oladcaq
document.querySelector('.tabs__nav-btn').click();

