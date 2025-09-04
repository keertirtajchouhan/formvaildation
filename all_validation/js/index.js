var bulb_On = false;
setInterval(function () {
    var images = document.getElementsByClassName("bulboff");
    for (var i = 0; i < images.length; i++) {
        if (bulb_On == true) {
            images[i].src = "image/pic_bulboff.gif";
        } else {
            images[i].src = "image/pic_bulbon.gif";
        }
    }
    bulb_On = !bulb_On;
}, 1000);

function f() {
    var date = new Date();
    document.getElementById("show_timer").innerText = (date.toLocaleTimeString("en-us"));
    setInterval(function () {
        var date = new Date();
        document.getElementById("show_timer").innerText = (date.toLocaleTimeString("en-us"));
    }, 1000);

    var CurrentHours = date.getHours();
    if (CurrentHours >= 4 && CurrentHours < 12) {
        document.getElementById("msg").innerText = "Good Morning";
        document.getElementById("msg").style.color = "orange";
        document.getElementById("sun_image").src = "./image/OIP.jpg";
    }
    else if (CurrentHours >= 12 && CurrentHours < 16) {
        document.getElementById("msg").innerText = "Good Afternoon";
        document.getElementById("msg").style.color = "red";
        document.getElementById("sun_image").src = "./image/afternoon.jpg";
    }
    else if (CurrentHours >= 16 && CurrentHours < 19) {
        document.getElementById("msg").innerText = "Good Evening";
        document.getElementById("msg").style.color = "green";
        document.getElementById("sun_image").src = "./image/eve.jpg";
    }
    else {
        document.getElementById("msg").innerText = "Good Night";
        document.getElementById("msg").style.color = "blue";
        document.getElementById("sun_image").src = "./image/night.jpg";
    }
}
let time = 300; // 

let x = setInterval(function () {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    document.getElementById("timer").innerHTML = "Time remaining !! " + min + ":" + (sec < 10 ? "0" + sec : sec);
    time--;

    if (time < 0) {
        clearInterval(x);
        window.location.href = "timeout.html";
    }
}, 1000);

function validation() {
    var Main_Result = false;
    var RESULT = true;
    var UNAME = document.getElementById("uname").value;
    if (UNAME == "") {
        document.getElementById("uname_show_msg").innerText = "plz fill the name";
        RESULT = false;
    }
    var F_NAME = document.getElementById("fname").value;
    if (F_NAME == "") {
        document.getElementById("fname_show_msg").innerText = "plz fill father name";
        RESULT = false;
    }
    var EMAIL = document.getElementById("email_id").value;
    if (EMAIL == "") {
        document.getElementById("email_show_msg").innerText = "plz fill email add";
        RESULT = false;
    }
    var PASS = document.getElementById("pass_id").value;
    if (PASS == "") {
        document.getElementById("pass_show_msg").innerText = "plz fill password";
        RESULT = false;
    }
    var MOBILE = document.getElementById("mobile_id").value;
    if (MOBILE == "") {
        document.getElementById("Mobile_show_msg").innerText = "plz fill  mobile number";
        RESULT = false;
    }
    var DOB = document.getElementById("date_id").value;
    if (DOB == "") {
        document.getElementById("dob_show_msg").innerText = "plz fill DOB";
        RESULT = false;
    }
    var TOB = document.getElementById("tob_id").value;
    if (TOB == "") {
        document.getElementById("tob_show_msg").innerText = "plz fill TOB";
        RESULT = false;
    }
    var IMAGES = document.getElementById("images_id").value;
    if (IMAGES == "") {
        document.getElementById("images_show_msg").innerText = "plz fill image";
        RESULT = false;
    }
    var ADDRESS = document.getElementById("add_id").value;
    if (ADDRESS == "") {
        document.getElementById("add_show_msg").innerText = "plz fill address";
        RESULT = false;
    }
    var CITY = document.getElementById("city_id").value;
    if (CITY == "s_c") {
        document.getElementById("city_show_msg").innerText = "plz fill city";
        RESULT = false;
    }

    var USER_INPUTT = document.getElementById("user_input").value;
    if (USER_INPUTT == "") {
        document.getElementById("captcha_show_msg").innerText = "plz fill the captcha";
        RESULT = false;
    }

    var gender_result = false;
    var count_radio_button = document.getElementsByName("gender").length;
    var GENDER = document.getElementsByName("gender");
    for (var i = 0; i < count_radio_button; i++) {
        if (GENDER[i].checked == true) {
            gender_result = true;
            document.getElementById("gender_show_msg").innerText = "";
        }
    }
    if (gender_result == false) {
        document.getElementById("gender_show_msg").innerText = "plz select gender";
    }

    var hobby_result = false;
    var checkboxcount = 0;
    var count_check_box = document.getElementsByName("hobby").length;
    var HOBBY = document.getElementsByName("hobby");
    for (var i = 0; i < count_check_box; i++) {
        if (HOBBY[i].checked == true) {
            checkboxcount++;
        }
    }
    if (checkboxcount == 0) {
        document.getElementById("hobby_show_msg").innerText = "plz select options";
    }
    else if (checkboxcount == 1) {
        document.getElementById("hobby_show_msg").innerText = "plz select at least 2 options";
    }
    else {
        hobby_result = true;
        document.getElementById("hobby_show_msg").innerText = "";
    }
    if (RESULT == false || gender_result == false || hobby_result == false) {
        Main_Result = false;
    }
    else {
        Main_Result = true;
    }
    return Main_Result;
}
function show_password() {
    document.getElementById("pass_id").type = "text";
    document.getElementById("slash_eye").style.display = "none";
    document.getElementById("normal_eye").style.display = "inline-block";
}
function hide_password() {
    document.getElementById("pass_id").type = "password";
    document.getElementById("slash_eye").style.display = "inline-block"
    document.getElementById("normal_eye").style.display = "none";
}
function check_pass_length() {
    var DATA = document.getElementById("pass_id").value;
    var UpperChar = new RegExp('(?=.*[A-Z])');
    var LowerChar = new RegExp('(?=.*[a-z])');
    var NUMBER = new RegExp('(?=.*[0-9])');
    var SpecialChar = new RegExp('(?=.*[!@#$%^&*])');
    if (UpperChar.test(DATA)) {
        document.getElementById("upper_char").style.color = "green";
    }
    else {
        document.getElementById("upper_char").style.color = "grey";
        PASS_1 = false;
    }
    if (LowerChar.test(DATA)) {
        document.getElementById("lower_char").style.color = "green";
    }
    else {
        document.getElementById("lower_char").style.color = "grey";
        PASS_1 = false;
    }
    if (NUMBER.test(DATA)) {
        document.getElementById("numeric_char").style.color = "green";
    }
    else {
        document.getElementById("numeric_char").style.color = "grey";
        PASS_1 = false;
    }
    if (SpecialChar.test(DATA)) {
        document.getElementById("special_char").style.color = "green";
    }
    else {
        document.getElementById("special_char").style.color = "grey";
        PASS_1 = false;
    }
    if (UpperChar.test(DATA) && LowerChar.test(DATA) && NUMBER.test(DATA) && SpecialChar.test(DATA)) {
        document.getElementById("pass_show_msg").innerText = "";
        document.getElementById("pass_show_msg").style.color = "green";
        document.getElementById("pass_id").style.border = "1px solid green";
        var length_data = document.getElementById("pass_id").value.length;
        if (length_data == "") {
            document.getElementById("pass_show_msg").innerText = "plz fill password";
            document.getElementById("pass_show_msg").style.color = "red";
        }
        else if (length_data <= 4) {
            document.getElementById("pass_show_msg").innerText = "WEAK";
            document.getElementById("pass_show_msg").style.color = "red";
        }
        else if (length_data <= 6) {
            document.getElementById("pass_show_msg").innerText = "GOOD";
            document.getElementById("pass_show_msg").style.color = "blue";
        }
        else {
            document.getElementById("pass_show_msg").innerText = "STRONG";
            document.getElementById("pass_show_msg").style.color = "green";
        }
        PASS_1 = true;
    }
    else {
        if (DATA == "") {
            document.getElementById("pass_show_msg").innerText = "plz fill password";
            document.getElementById("pass_show_msg").style.color = "red";
        }
        else {
            if (!UpperChar.test(DATA)) {
                document.getElementById("pass_show_msg").innerText = "plz enter Upper char";
                document.getElementById("pass_id").style.border = "1px solid red";
                document.getElementById("pass_show_msg").style.color = "red";
                PASS_1 = false;
            }
            else if (!LowerChar.test(DATA)) {
                document.getElementById("pass_id").style.border = "1px solid red";
                document.getElementById("pass_show_msg").innerText = "plz enter Lower char";
                document.getElementById("pass_show_msg").style.color = "red";
                PASS_1 = false;
            }
            else if (!NUMBER.test(DATA)) {
                document.getElementById("pass_id").style.border = "1px solid red";
                document.getElementById("pass_show_msg").innerText = "plz enter number";
                document.getElementById("pass_show_msg").style.color = "red";
                PASS_1 = false;
            }
            else {
                document.getElementById("pass_id").style.border = "1px solid red";
                document.getElementById("pass_show_msg").innerText = "plz enter Special char";
                document.getElementById("pass_show_msg").style.color = "red";
                PASS_1 = false;
            }
        }
    }
    checksumbit();
}

function check_mobile_number() {
    var MOBILE1 = document.getElementById("mobile_id").value;
    var MOBILE_LENGTH1 = MOBILE1.length;
    if (MOBILE1 == "") {
        document.getElementById("Mobile_show_msg").innerText = "plz fill mobile number";
        document.getElementById("Mobile_show_msg").style.color = "red";
        document.getElementById("mobile_id").style.border = "1px solid red";
        MOBILE_1 = false;
    }
    else if (MOBILE_LENGTH1 < 10) {
        document.getElementById("Mobile_show_msg").innerText = "mobile number is not valid";
        document.getElementById("Mobile_show_msg").style.color = "red";
        document.getElementById("mobile_id").style.border = "1px solid red";
        MOBILE_1 = false;
    }
    else if (MOBILE_LENGTH1 == 10) {
        document.getElementById("Mobile_show_msg").innerText = "number valid";
        document.getElementById("Mobile_show_msg").style.color = "green";
        document.getElementById("mobile_id").style.border = "1px solid green";
        MOBILE_1 = true;
    }
    checksumbit();
}

function check_dob() {
    var DOB1 = document.getElementById("date_id").value;
    if (DOB1 == "") {
        document.getElementById("date_id").style.border = "1px solid red";
        TOB_1 = false;
    }
    else {
        document.getElementById("dob_show_msg").innerText = "";
        document.getElementById("date_id").style.border = "1px solid green";
        DOB_1 = true;
    }
    checksumbit();
}

function check_tob() {
    var TOB1 = document.getElementById("tob_id").value;
    if (TOB1 == "") {
        document.getElementById("tob_id").style.border = "1px solid red";
        TOB_1 = false;
    }
    else {
        document.getElementById("tob_show_msg").innerText = "";
        document.getElementById("tob_id").style.border = "1px solid green";
        TOB_1 = true;
    }
    checksumbit();
}

function check_images() {
    var IMAGESS = document.getElementById("images_id").value;
    if (IMAGESS == "") {
        document.getElementById("images_id").style.border = "1px solid red";
        IMAGES_1 = false;
    }
    else {
        document.getElementById("images_show_msg").innerText = "";
        document.getElementById("images_id").style.border = "1px solid green";
        IMAGES_1 = true;
    }
    checksumbit();
}

function check_address() {
    var ADDRESS1 = document.getElementById("add_id").value;
    if (ADDRESS1 == "") {
        document.getElementById("add_id").style.border = "1px solid red";
        document.getElementById("add_show_msg").innerText = "plz fill address";
        document.getElementById("add_show_msg").style.color = "red";
        ADDRESS_1 = false;
    }
    else {
        document.getElementById("add_id").style.border = "1px solid green";
        document.getElementById("add_show_msg").innerText = "";
        ADDRESS_1 = true;
    }
    checksumbit();
}

function check_city() {
    var CITY1 = document.getElementById("city_id").value;
    if (CITY1 == "s_c") {
        document.getElementById("city_id").style.border = "1px solid red";
        document.getElementById("city_show_msg").innerText = "plz select city";
        CITY_1 = false;
    }
    else {
        document.getElementById("city_id").style.border = "1px solid green";
        document.getElementById("city_show_msg").innerText = "";
        CITY_1 = true;
    }
    checksumbit();
}

function check_radio_gender() {
    var RADIO1 = document.getElementsByName("gender");
    if (RADIO1 == "") {
        document.getElementById("gender_show_msg").innerText = "plz select gender";
        document.getElementById("gender_show_msg").style.color = "red";
        GENDER_1 = false;
    }
    else {
        document.getElementById("gender_show_msg").innerText = "";
        GENDER_1 = true;
    }
    checksumbit();
}

function check_checkbox_hobby() {
    var Count_Hobby = 0;
    var count_check_box1 = document.getElementsByName("hobby").length;
    var CHECK_HOBBY_one = document.getElementsByName("hobby");

    for (var i = 0; i < count_check_box1; i++) {
        if (CHECK_HOBBY_one[i].checked == true) {
            Count_Hobby++;
        }
    }
    if (Count_Hobby == 0) {
        document.getElementById("hobby_show_msg").innerText = "plz fill the options";
        HOBBY_1 = false;
    }
    else if (Count_Hobby == 1) {
        document.getElementById("hobby_show_msg").innerText = "plz select at least 2 options";
        HOBBY_1 = false;
    }
    else {
        document.getElementById("hobby_show_msg").innerText = "";
        HOBBY_1 = true;
    }
    checksumbit();
}

function ON_FOCUS_UNAME() {
    var UNAME2 = document.getElementById("uname").value;
    if (UNAME2 == "") {
        document.getElementById("uname_show_msg").innerText = "plz fill name";
        document.getElementById("uname").style.border = "1px solid red";
    }
    else {
        document.getElementById("uname_show_msg").innerText = "";
        document.getElementById("uname").style.border = "1px solid green";
    }
}

function ON_FOCUS_FNAME() {
    var F_NAME2 = document.getElementById("fname").value;
    if (F_NAME2 == "") {
        document.getElementById("fname_show_msg").innerText = "plz fill father name";
        document.getElementById("fname").style.border = "1px solid red";
    }
    else {
        document.getElementById("fname_show_msg").innerText = "";
        document.getElementById("fname").style.border = "1px solid green";
    }
}

function ON_FOCUS_EMAIL() {
    var EMAIL2 = document.getElementById("email_id").value;
    if (EMAIL2 == "") {
        document.getElementById("email_show_msg").innerText = "plz fill email add";
        document.getElementById("email_id").style.border = "1px solid red";
    }
    else {
        document.getElementById("email_show_msg").innerText = "";
        document.getElementById("email_id").style.border = "1px solid green";
    }
}

function ON_FOCUS_PASSWORD() {
    var PASS2 = document.getElementById("pass_id").value;
    if (PASS2 == "") {
        document.getElementById("pass_show_msg").innerText = "plz fill password";
        document.getElementById("pass_id").style.border = "1px solid red";
    }
    else {
        document.getElementById("pass_show_msg").innerText = "";
        document.getElementById("pass_id").style.border = "1px solid green";
    }
}

function ON_FOCUS_MOBILE() {
    var MOBILE2 = document.getElementById("mobile_id").value;
    if (MOBILE2 == "") {
        document.getElementById("Mobile_show_msg").innerText = "plz fill mobile number";
        document.getElementById("mobile_id").style.border = "1px solid red";
    }
    else {
        document.getElementById("mobile_show_msg").innerText = "";
        document.getElementById("mobile_id").style.border = "1px solid green";
    }
}

function ON_FOCUS_DOB() {
    var DOB2 = document.getElementById("date_id").value;
    if (DOB2 == "") {
        document.getElementById("dob_show_msg").innerText = "plz fill DOB";
        document.getElementById("date_id").style.border = "1px solid red";
    }
    else {
        document.getElementById("dob_show_msg").innerText = "";
        document.getElementById("date_id").style.border = "1px solid green";
    }
}
function ON_FOCUS_TOB() {
    var TOB2 = document.getElementById("tob_id").value;
    if (TOB2 == "") {
        document.getElementById("tob_show_msg").innerText = "plz fill TOB";
        document.getElementById("tob_id").style.border = "1px solid red";
    }
    else {
        document.getElementById("tob_show_msg").innerText = "";
        document.getElementById("tob_id").style.border = "1px solid green";
    }
}

function ON_FOCUS_IMAGES() {
    var IMAGES2 = document.getElementById("images_id").value;
    if (IMAGES2 == "") {
        document.getElementById("images_show_msg").innerText = "plz fill image";
        document.getElementById("images_id").style.border = "1px solid red";
    }
    else {
        document.getElementById("images_show_msg").innerText = "";
        document.getElementById("images_id").style.border = "1px solid green";
    }
}

function ON_FOCUS_ADD() {
    var ADD2 = document.getElementById("add_id").value;
    if (ADD2 == "") {
        document.getElementById("add_show_msg").innerText = "plz fill address";
        document.getElementById("add_id").style.border = "1px solid red";
    }
    else {
        document.getElementById("add_show_msg").innerText = "";
        document.getElementById("add_id").style.border = "1px solid green";
    }
}

function ON_FOCUS_CITY() {
    var CITY2 = document.getElementById("city_id").value;
    if (CITY2 == "s_c") {
        document.getElementById("city_show_msg").innerText = "plz fill city";
        document.getElementById("city_id").style.border = "1px solid red";
    }
    else {
        document.getElementById("city_show_msg").innerText = "plz fill city";
        document.getElementById("city_id").style.border = "1px solid green";
    }
}

function ONKEYUP_UNAME() {
    var UNAME3 = document.getElementById("uname").value;
    if (UNAME3 == "") {
        document.getElementById("uname_show_msg").innerText = "plz fill name";
        document.getElementById("uname").style.border = "1px solid red";
        UNAME_1 = false;
    }
    else {
        document.getElementById("uname_show_msg").innerText = "";
        document.getElementById("uname").style.border = "1px solid green";
        UNAME_1 = true;
    }
    checksumbit();
}

function ONKEYUP_FNAME() {
    var F_NAME3 = document.getElementById("fname").value;
    if (F_NAME3 == "") {
        document.getElementById("fname_show_msg").innerText = "plz fill father name";
        document.getElementById("fname").style.border = "1px solid red";
        FNAME_1 = false;
    }
    else {
        document.getElementById("fname_show_msg").innerText = "";
        document.getElementById("fname").style.border = "1px solid green";
        FNAME_1 = true;
    }
    checksumbit();
}

function ONKEYUP_EMAIL() {
    var EMAIL3 = document.getElementById("email_id").value;
    var PATTERN = /[a-zA-Z]{2,}[0-9]{1,}[@]{1}[a-zA-Z]{3,}[.]{1}[a-zA-Z]{2,}/;
    if (EMAIL3 == "") {
        document.getElementById("email_show_msg").innerText = "plz fill email add";
        document.getElementById("email_id").style.border = "1px solid red";
        document.getElementById("email_show_msg").style.color = "red";
        EMAIL_1 = false;
    }
    else {
        document.getElementById("email_show_msg").innerText = "";
        document.getElementById("email_id").style.border = "1px solid green";
    }
    if (PATTERN.test(EMAIL3)) {
        document.getElementById("email_id").style.border = "1px solid green";
        document.getElementById("email_show_msg").innerText = "Correct EMAIL ID";
        document.getElementById("email_show_msg").style.color = "green";
        EMAIL_1 = true;
    }
    else {
        document.getElementById("email_id").style.border = "1px solid red";
        document.getElementById("email_show_msg").innerText = "InCorrect EMAIL ID";
        document.getElementById("email_show_msg").style.color = "red";
        EMAIL_1 = false;
    }
    if (EMAIL3 == "") {
        document.getElementById("email_show_msg").innerText = "plz fill the email";
    }
    checksumbit();
}

function generate_captcha() {
    var CHAR = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopmnbvcxzasdfghjkl0321456987!@#$%&*?";
    var CAPTCHA = "";
    for (var i = 0; i < 4; i++) {
        CAPTCHA = CAPTCHA + CHAR.charAt(Math.floor(Math.random() * CHAR.length));
    }
    document.getElementById("captcha").innerText = CAPTCHA;
}
function check_captcha() {
    var USER_INPUT = document.getElementById("user_input").value;
    var CAPTCHA = document.getElementById("captcha").innerText;
    if (USER_INPUT == "") {
        document.getElementById("captcha_show_msg").innerText = "plz fill the captcha";
        document.getElementById("captcha_show_msg").style.color = "red";
        document.getElementById("user_input").style.border = "1px solid red";
    }
    else if (USER_INPUT != CAPTCHA) {
        document.getElementById("captcha_show_msg").innerText = "InValid Captcha";
        document.getElementById("captcha_show_msg").style.color = "red";
    }
    else if (USER_INPUT == CAPTCHA) {
        document.getElementById("captcha_show_msg").innerText = "Valid Captcha";
        document.getElementById("captcha_show_msg").style.color = "green";
       
    }
}

function ON_FOCUS_CAPTCHA() {
    var USER_INPUT1 = document.getElementById("user_input").value;
    if (USER_INPUT1 == "") {
        document.getElementById("captcha_show_msg").innerText = "plz fill the captcha";
        document.getElementById("user_input").style.border = "1px solid red";
    }
}

function ONKEYUP_CAPTCHA() {
    var USER_INPUT2 = document.getElementById("user_input").value;
    var CAPTCHA_2 = document.getElementById("captcha").innerText;
    if (USER_INPUT2 == "") {
        document.getElementById("captcha_show_msg").innerText = "plz fill the captcha";
        document.getElementById("captcha_show_msg").style.color = "red";
        document.getElementById("user_input").style.border = "1px solid red";
        CAPTCHA_1 = false;
    }
    else {
        document.getElementById("captcha_show_msg").innerText = "";
        document.getElementById("captcha_show_msg").style.color = "green";
        document.getElementById("user_input").style.border = "1px solid green";
    }
    if (USER_INPUT2 != CAPTCHA_2) {
        CAPTCHA_1 = false;
    }
    if (USER_INPUT2 == CAPTCHA_2) {
        CAPTCHA_1 = true;
    }
    checksumbit();
}


var UNAME_1 = false;
var FNAME_1 = false;
var EMAIL_1 = false;
var PASS_1 = false;
var MOBILE_1 = false;
var DOB_1 = false;
var TOB_1 = false;
var IMAGES_1 = false;
var ADDRESS_1 = false;
var CITY_1 = false;
var GENDER_1 = false;
var HOBBY_1 = false;
var CAPTCHA_1 = false;

function checksumbit() {

    var CHECK = (UNAME_1 && FNAME_1 && EMAIL_1 && PASS_1 && MOBILE_1 && DOB_1 && TOB_1 && IMAGES_1 && ADDRESS_1 && CITY_1 && GENDER_1 && HOBBY_1 && CAPTCHA_1);
    if (CHECK == true) {
        document.getElementById("sub").disabled = false;
    }
    else {
        document.getElementById("sub").disabled = true;
    }
}
