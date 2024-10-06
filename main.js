let paths = document.querySelectorAll("path");
paths.forEach(function(ele) {

    ele.addEventListener("mousemove" , (e) => {
        let targeted = e.target;
        let movingTitle = document.querySelector("div.moving-title");
        
        ele.addEventListener("mouseout" , () => {
            movingTitle.setAttribute("style" , `visibility: hidden;`);
        });
        
        movingTitle.setAttribute("style" , `visibility: visible;left:${e.pageX + 30}px; top: ${e.pageY + 20}px`);

        movingTitle.querySelector("span").innerText = targeted.getAttribute("data-name");
        movingTitle.querySelector("ul").innerHTML = overview(targeted.getAttribute("data-region"));
        function overview(region) {
            if (region =="tel") {

                return `
                <li>1000 :معدل التساقط #</li>
                <li>4% :مساحة الكلية #</li>
                <li>3</li>
                `

            } else if (region =="hidab") {
                return `
                <li>500-300 :معدل التساقط #</li>
                <li>12% :مساحة الكلية #</li>
                <li>3</li>
                `
            } else if (region =="sahara") {
                return `
                <li>200 :معدل التساقط #</li>
                <li>84% :مساحة الكلية #</li>
                <li>3</li>
                `
            }
        }
    });

});


let provinceImg = document.querySelector("#provinceInfo img");
let provinceTitle = document.querySelector("#provinceInfo h1");
let provinceParagraph = document.querySelector("#provinceInfo p");

paths.forEach(function(ele) {

    ele.addEventListener("click" , (e) => {
        let targeted = e.target;

        paths.forEach(function(ele) {
            ele.classList.remove("active");
        });

        targeted.classList.add("active");


        provinceImg.setAttribute("src" , `imgs/${targeted.getAttribute("data-region")}.jpg`)

        provinceTitle.innerText = targeted.getAttribute("data-name");

        if( targeted.getAttribute("data-region") == "tel") {
            provinceParagraph.innerText = `
            التل الجزائري، يُشير إلى شمال الجزائر، وهو المنطقة التي تقع فيها معظم الأراضي الخصبة والصالحة للزراعة، على عكس الأراضي الجافة في الهضاب العليا أو المساحات القاحلة للصحراء. وهي منطقة تقع بين الساحل في الشمال والهضاب العليا في الجنوب، والتي تمتد على جزء من الشمال الغربي التونسي (مناطق الكاف وسليانة).            `
        }
        else if( targeted.getAttribute("data-region") == "hidab") {
            provinceParagraph.innerText = `
            الهضاب العليا إقليم من النجود، وهي منطقة طبيعية تمتد نواحي وجدة ثم من تلمسان الواقعة غرب الجزائر إلى سوق أهراس الواقعة شرقها يتراوح ارتفاع أراضيه بين 800 و1,000م، وتضم معظم المناطق الداخلية. تتميز منطقة الهضاب العليا بصيف حار وجاف وشتاء بارد تصل أدنى درجة حرارة فيه إلى 1- درجة مئوية. أما التساقط فيكون ما بين 250 مليمتر إلى 400 مليمتر سنويا.
            `
        }
        else if( targeted.getAttribute("data-region") == "sahara") {
            provinceParagraph.innerText = `
            تتربع الصحراء الجزائرية على أكثرمن مليوني كم2 أي 4/5 من المساحة الكلية.

            يحد هذه صحراء الجزائر شمالا سلسلة جبال أطلس وهي عبارة عن سلستين عاليتين من الجبال يحصران بينهما مجموعة من الهضاب العليا أشهرها والسلستين تتمثلان في الأطلس التلي بالشمال غير الصحراوي والأطلس الصحراوي جنوبه وتقع سلسلة جبال الأطلس بشمال غرب الصحراء الكبرى.
            
            يكثر وجود الواحات في هذه الصحراء ومن الأمثلة على ذلك واحة عين صالح وتقرت بالجزائر ويكثر بها أيضاً حقول البترول مثل: عين امناس والعقرب القاسي وحاسي مسعود والسبع ورقان.
            `
        }
    });

});