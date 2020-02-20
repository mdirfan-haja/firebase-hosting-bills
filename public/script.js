console.log('connected!!')


var submitBtn1 = document.getElementById('submitBtn1')


function datasubmitbtn() {
    var database = firebase.database().ref();
    var maintext = document.getElementById('maintext').value

    database.push().set(maintext)
        //database.child('text').set(maintext)

}