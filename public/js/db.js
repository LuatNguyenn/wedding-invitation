import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {
    getFirestore,
    collection,
    doc,
    getDocs
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
// TODO: Replace the following with your app's Firebase project configuration


// const urlParams = new URLSearchParams(window.location.search);

(function ($) {

    // urlParams.set('order', 'date');


    const firebaseConfig = {
        apiKey: "AIzaSyC8p8vw7e4mO-q-xVMDA4VBLR3KSRErAmQ",
        authDomain: "webapp-52362.firebaseapp.com",
        projectId: "webapp-52362",
        storageBucket: "webapp-52362.appspot.com",
        messagingSenderId: "931765823574",
        appId: "1:931765823574:web:bdc7c9868940c359c5b3f7"
    };

    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);


    $(document).ready(async function () {
        const values = window.location.search;
        const urlParams = new URLSearchParams(values);
        const id = urlParams.get('id')
        console.log("🚀 ~ file: main.js:9 ~ id:", id)

        if (id) {
            const querySnapshot = await getDocs(collection(db, "invitation"));

            querySnapshot.forEach((doc) => {
                if (doc.id == id) {
                    let obj = doc.data()
                    let name = obj.name
                    console.log("🚀 ~ file: db.js:45 ~ querySnapshot.forEach ~ name:", name);
                    document.getElementById("invitationImg").src = obj.img
                }
            });
        }



    });







    $("#header-plugin").load("https://vivinantony.github.io/header-plugin/", function () {
        $("a.back-to-link").attr("href", "http://blog.thelittletechie.com/2015/03/love-heart-animation-using-css3.html#tlt")
    });

    var love = setInterval(function () {
        var r_num = Math.floor(Math.random() * 40) + 1;
        var r_size = Math.floor(Math.random() * 65) + 10;
        var r_left = Math.floor(Math.random() * 100) + 1;
        var r_bg = Math.floor(Math.random() * 25) + 100;
        var r_time = Math.floor(Math.random() * 5) + 5;

        $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

        $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

        $('.heart').each(function () {
            var top = $(this).css("top").replace(/[^-\d\.]/g, '');
            var width = $(this).css("width").replace(/[^-\d\.]/g, '');
            if (top <= -100 || width >= 150) {
                $(this).detach();
            }
        });
    }, 500);




})(jQuery);