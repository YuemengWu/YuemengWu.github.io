
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\(?([0-9]{3})\)?[ ]?([0-9]{3})[ ]?([0-9]{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCredit(card) {
    var b = document.getElementById(card).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\(?([0-9]{4})\)?[ ]?([0-9]{4})[ ]?([0-9]{4})[ ]?([0-9]{4})$/;
    if (filter.test(b)) {
        return true;
    }
    else {
        return false;
    }
}

var unavailableDates = [];
const setDateFormat = "mm/dd/yy";
function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    var c = document.getElementById("select1").value;
    if(c === "1"){
        if((date.getDay() === 0)||(date.getDay() === 2)){
            return[false];
        }
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates.indexOf(string) === -1 ]
    }
    else if(c === "2"){
        if((date.getDay() === 0)||(date.getDay() === 3)){
            return[false];
        }
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates.indexOf(string) === -1 ]
    }
    else if(c === "3"){
        if(date.getDay() === 0){
            return[false];
        }
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates.indexOf(string) === -1 ]
    }

}

function disableDates2(date) {
    // Sunday is Day 0, disable all Sundays
    var c = document.getElementById("select2").value;
    if(c === "1"){
        if((date.getDay() === 0)||(date.getDay() === 2)){
            return[false];
        }
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates.indexOf(string) === -1 ]
    }
    else if(c === "2"){
        if((date.getDay() === 0)||(date.getDay() === 3)){
            return[false];
        }
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates.indexOf(string) === -1 ]
    }
    else if(c === "3"){
        if(date.getDay() === 0){
            return[false];
        }
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates.indexOf(string) === -1 ]
    }

}

function disableDates3(date) {
    // Sunday is Day 0, disable all Sundays
    var c = document.getElementById("select3").value;
    if(c === "1"){
        if((date.getDay() === 0)||(date.getDay() === 2)){
            return[false];
        }
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates.indexOf(string) === -1 ]
    }
    else if(c === "2"){
        if((date.getDay() === 0)||(date.getDay() === 3)){
            return[false];
        }
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates.indexOf(string) === -1 ]
    }
    else if(c === "3"){
        if(date.getDay() === 0){
            return[false];
        }
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates.indexOf(string) === -1 ]
    }

}

function disableDates4(date) {
    // Sunday is Day 0, disable all Sundays
    var c = document.getElementById("select4").value;
    if(c === "1"){
        if((date.getDay() === 0)||(date.getDay() === 4)){
            return[false];
        }
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates.indexOf(string) === -1 ]
    }

}

function disableDates5(date) {
    // Sunday is Day 0, disable all Sundays
    var c = document.getElementById("select5").value;
    if(c === "1"){
        if((date.getDay() === 0)||(date.getDay() === 2)){
            return[false];
        }
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates.indexOf(string) === -1 ]
    }
    else if(c === "2"){
        if((date.getDay() === 0)||(date.getDay() === 3)){
            return[false];
        }
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates.indexOf(string) === -1 ]
    }
    else if(c === "3"){
        if(date.getDay() === 0){
            return[false];
        }
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates.indexOf(string) === -1 ]
    }

}

function validatePI(){
    var fn = document.getElementById("inputFName").value;
    var ln = document.getElementById("inputLName").value;
    var phone = document.getElementById("inputPhone").value;
    var uname = document.getElementById("username").value;
    var server = document.getElementById("server").value;
    var expert = document.getElementById("select1").value;
    var date = document.getElementById("dateInput").value;
    var time = document.getElementById("time").value;

    if((fn.length == 0)||(ln.length == 0)||(phone.length == 0)||(uname.length == 0)||(server.length == 0)||(expert.length == 0)||(date.length == 0)||(time.length == 0)){
        return false;
    }
    return true;
}

function validatePI2(){
    var fn = document.getElementById("inputFName2").value;
    var ln = document.getElementById("inputLName2").value;
    var phone = document.getElementById("inputPhone2").value;
    var uname = document.getElementById("username2").value;
    var server = document.getElementById("server2").value;
    var expert = document.getElementById("select2").value;
    var date = document.getElementById("dateInput2").value;
    var time = document.getElementById("time2").value;

    if((fn.length == 0)||(ln.length == 0)||(phone.length == 0)||(uname.length == 0)||(server.length == 0)||(expert.length == 0)||(date.length == 0)||(time.length == 0)){
        return false;
    }
    return true;
}

function validatePI3(){
    var fn = document.getElementById("inputFName3").value;
    var ln = document.getElementById("inputLName3").value;
    var phone = document.getElementById("inputPhone3").value;
    var uname = document.getElementById("username3").value;
    var server = document.getElementById("server3").value;
    var expert = document.getElementById("select3").value;
    var date = document.getElementById("dateInput3").value;
    var time = document.getElementById("time3").value;

    if((fn.length == 0)||(ln.length == 0)||(phone.length == 0)||(uname.length == 0)||(server.length == 0)||(expert.length == 0)||(date.length == 0)||(time.length == 0)){
        return false;
    }
    return true;
}

function validatePI4(){
    var fn = document.getElementById("inputFName4").value;
    var ln = document.getElementById("inputLName4").value;
    var phone = document.getElementById("inputPhone4").value;
    var uname = document.getElementById("username4").value;
    var server = document.getElementById("server4").value;
    var expert = document.getElementById("select4").value;
    var date = document.getElementById("dateInput4").value;
    var time = document.getElementById("time4").value;

    if((fn.length == 0)||(ln.length == 0)||(phone.length == 0)||(uname.length == 0)||(server.length == 0)||(expert.length == 0)||(date.length == 0)||(time.length == 0)){
        return false;
    }
    return true;
}

function validatePI5(){
    var fn = document.getElementById("inputFName5").value;
    var ln = document.getElementById("inputLName5").value;
    var phone = document.getElementById("inputPhone5").value;
    var uname = document.getElementById("username5").value;
    var server = document.getElementById("server5").value;
    var expert = document.getElementById("select5").value;
    var date = document.getElementById("dateInput5").value;
    var time = document.getElementById("time5").value;

    if((fn.length == 0)||(ln.length == 0)||(phone.length == 0)||(uname.length == 0)||(server.length == 0)||(expert.length == 0)||(date.length == 0)||(time.length == 0)){
        return false;
    }
    return true;
}


function validatePayI(){
    var debit = document.getElementById("debit").value;
    var expiry = document.getElementById("expiry").value;
    var cvc = document.getElementById("cvc").value;

    if((debit.length == 0)||(expiry.length == 0)||(cvc.length == 0)){
        return false;
    }
    return true;
}

$(document).ready(function(){
	$("#inputPhone").on("change", function(){
        if (!validatePhone("inputPhone")){
            alert("Wrong format for phone number!"+'\n'+"Please enter with the format (xxx xxx xxxx) or (xxxxxxxxxx)!");
            $("#inputPhone").val("(xxx xxx xxxx)");
            $("#inputPhone").addClass("error");
        }
        else {
            $("#inputPhone").removeClass("error");
        }
    });
    $("#inputPhone2").on("change", function(){
        if (!validatePhone("inputPhone2")){
            alert("Wrong format for phone number!"+'\n'+"Please enter with the format (xxx xxx xxxx) or (xxxxxxxxxx)!");
            $("#inputPhone2").val("(xxx xxx xxxx)");
            $("#inputPhone2").addClass("error");
        }
        else {
            $("#inputPhone2").removeClass("error");
        }
    });
    $("#inputPhone3").on("change", function(){
        if (!validatePhone("inputPhone3")){
            alert("Wrong format for phone number!"+'\n'+"Please enter with the format (xxx xxx xxxx) or (xxxxxxxxxx)!");
            $("#inputPhone3").val("(xxx xxx xxxx)");
            $("#inputPhone3").addClass("error");
        }
        else {
            $("#inputPhone3").removeClass("error");
        }
    });
    $("#inputPhone4").on("change", function(){
        if (!validatePhone("inputPhone4")){
            alert("Wrong format for phone number!"+'\n'+"Please enter with the format (xxx xxx xxxx) or (xxxxxxxxxx)!");
            $("#inputPhone4").val("(xxx xxx xxxx)");
            $("#inputPhone4").addClass("error");
        }
        else {
            $("#inputPhone4").removeClass("error");
        }
    });
    $("#inputPhone5").on("change", function(){
        if (!validatePhone("inputPhone5")){
            alert("Wrong format for phone number!"+'\n'+"Please enter with the format (xxx xxx xxxx) or (xxxxxxxxxx)!");
            $("#inputPhone5").val("(xxx xxx xxxx)");
            $("#inputPhone5").addClass("error");
        }
        else {
            $("#inputPhone5").removeClass("error");
        }
    });
    $("#debit").on("change", function(){
        if (!validateCredit("debit")){
            alert("Wrong format for Credit card number!"+'\n'+"Please enter with the format (xxxx xxxx xxxx xxxx)!");
            $("#debit").val("(xxxx xxxx xxxx xxxx)");
            $("#debit").addClass("error");
        }
        else {
            $("#debit").removeClass("error");
        }
    });

	$( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2021'),
            maxDate: '+13M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
            
        }
    );
    $( "#dateInput2" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2021'),
            maxDate: '+13M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates2
        }
    );
    $( "#dateInput3" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2021'),
            maxDate: '+13M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates3
        }
    );
    $( "#dateInput4" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2021'),
            maxDate: '+13M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates4
        }
    );
    $( "#dateInput5" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2021'),
            maxDate: '+13M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates5
        }
    );
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#cvc").on("mouseenter", function(){
        $("#cvc").addClass("showInput");
    });

    $("#cvc").on("mouseleave", function(){
        $("#cvc").removeClass("showInput");
    });

    $("#cvc").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#next").click(function(){
        if(!validatePI()){
            alert('Please enter all field!');

        }
        else{
            document.getElementById("next").setAttribute('href', "#payment" );
            var expert = document.getElementById("select1").value;
            var time = document.getElementById("time").value;
            var date = $("#dateInput").datepicker('getDate');
            var chooseE = "";
            var chooseT = "";
            if(expert !== null){
                if(expert == 1){
                    chooseE = "Jennifer";
                }
                else if(expert == 2){
                    chooseE = "Mike";
                }
                else{
                    chooseE = "Jennifer or Mike";
                }
            }
            if(time !== null){
                if(time == 1){
                    chooseT = "10:00am";
                }
                else if(time == 2){
                    chooseT = "11:00am";
                }
                else if(time == 3){
                    chooseT = "2:00pm";
                }
                else if(time == 4){
                    chooseT = "3:00pm";
                }
                else if(time == 5){
                    chooseT = "4:00pm";
                }
            }
            
            alert("Your appointment has been chosen for Vaccinations at "+chooseT+" with expert "+chooseE+" on "+date+'\n'+"Next, Please enter your credit card information!");
        }
  	});
  	$("#next2").click(function(){
    	if(!validatePI2()){
            alert('Please enter all field!');

        }
        else{
            document.getElementById("next2").setAttribute('href', "#payment" );
            var expert = document.getElementById("select2").value;
            var time = document.getElementById("time2").value;
            var date = $("#dateInput2").datepicker('getDate');
            var chooseE = "";
            var chooseT = "";
            if(expert !== null){
                if(expert == 1){
                    chooseE = "Jennifer";
                }
                else if(expert == 2){
                    chooseE = "Mike";
                }
                else{
                    chooseE = "Jennifer or Mike";
                }
            }
            if(time !== null){
                if(time == 1){
                    chooseT = "10:00am";
                }
                else if(time == 2){
                    chooseT = "11:00am";
                }
                else if(time == 3){
                    chooseT = "2:00pm";
                }
                else if(time == 4){
                    chooseT = "3:00pm";
                }
                else if(time == 5){
                    chooseT = "4:00pm";
                }
            }
            
            alert("Your appointment has been chosen for General Medicine at "+chooseT+" with expert "+chooseE+" on "+date+'\n'+"Next, Please enter your credit card information!");
        }
  	});
  	$("#next3").click(function(){
    	if(!validatePI3()){
            alert('Please enter all field!');

        }
        else{
            document.getElementById("next3").setAttribute('href', "#payment" );
            var expert = document.getElementById("select3").value;
            var time = document.getElementById("time3").value;
            var date = $("#dateInput3").datepicker('getDate');
            var chooseE = "";
            var chooseT = "";
            if(expert !== null){
                if(expert == 1){
                    chooseE = "Jennifer";
                }
                else if(expert == 2){
                    chooseE = "Mike";
                }
                else{
                    chooseE = "Jennifer or Mike";
                }
            }
            if(time !== null){
                if(time == 1){
                    chooseT = "10:00am";
                }
                else if(time == 2){
                    chooseT = "11:00am";
                }
                else if(time == 3){
                    chooseT = "2:00pm";
                }
                else if(time == 4){
                    chooseT = "3:00pm";
                }
                else if(time == 5){
                    chooseT = "4:00pm";
                }
            }
            
            alert("Your appointment has been chosen for Cat/Dog Physical Examinations at "+chooseT+" with expert "+chooseE+" on "+date+'\n'+"Next, Please enter your credit card information!");
        }
  	});
  	$("#next4").click(function(){
    	if(!validatePI4()){
            alert('Please enter all field!');

        }
        else{
            document.getElementById("next4").setAttribute('href', "#payment" );
            var expert = document.getElementById("select4").value;
            var time = document.getElementById("time4").value;
            var date = $("#dateInput4").datepicker('getDate');
            var chooseE = "";
            var chooseT = "";
            if(expert !== null){
                if(expert == 1){
                    chooseE = "Kate";
                }
            }
            if(time !== null){
                if(time == 1){
                    chooseT = "10:00am";
                }
                else if(time == 2){
                    chooseT = "11:00am";
                }
                else if(time == 3){
                    chooseT = "2:00pm";
                }
                else if(time == 4){
                    chooseT = "3:00pm";
                }
                else if(time == 5){
                    chooseT = "4:00pm";
                }
            }
            
            alert("Your appointment has been chosen for Dentistry at "+chooseT+" with expert "+chooseE+" on "+date+'\n'+"Next, Please enter your credit card information!");
               
        }
  	});
  	$("#next5").click(function(){
    	if(!validatePI5()){
            alert('Please enter all field!');

        }
        else{
            document.getElementById("next5").setAttribute('href', "#payment" );
            var expert = document.getElementById("select5").value;
            var time = document.getElementById("time5").value;
            var date = $("#dateInput5").datepicker('getDate');
            var chooseE = "";
            var chooseT = "";
            if(expert !== null){
                if(expert == 1){
                    chooseE = "Jennifer";
                }
                else if(expert == 2){
                    chooseE = "Mike";
                }
                else{
                    chooseE = "Jennifer or Mike";
                }
            }
            if(time !== null){
                if(time == 1){
                    chooseT = "10:00am";
                }
                else if(time == 2){
                    chooseT = "11:00am";
                }
                else if(time == 3){
                    chooseT = "2:00pm";
                }
                else if(time == 4){
                    chooseT = "3:00pm";
                }
                else if(time == 5){
                    chooseT = "4:00pm";
                }
            }
            
            alert("Your appointment has been chosen for Surgery at "+chooseT+" with expert "+chooseE+" on "+date+'\n'+"Next, Please enter your credit card information!");
        
        }
  	});

    $("#submit").click(function(){
        if(!validatePayI()){
            alert('Please enter all field!');
        }
        else{
            alert("Book appointment successful!"+"\n"+"Looking forward to meet you and your pet(s)!");
        }
    })
   
})