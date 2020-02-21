console.log('connected!!')
const db = firebase.firestore()
const customersList = document.getElementById('customerslist')
const applicationForm = document.getElementById('application1')
    //const submitForm = document.getElementById('submitBtn1')
    //var submitBtn1 = document.getElementById('submitBtn1')
    //var maintext = document.getElementById('maintext')
    //var postCode = document.getElementById('postcodeText')
    //var homeAdderss = document.getElementById('addressText')

function renderCustmoers(doc) {
    let span = document.createElement('tr')
    let fullname = document.createElement('th')
    let address = document.createElement('th')
    let postCode = document.createElement('th')


    span.setAttribute('data-id', doc.id)
    fullname.textContent = doc.data().fullname
    address.textContent = doc.data().Address
    postCode.textContent = doc.data().postcode

    span.appendChild(fullname)
    span.appendChild(address)
    span.appendChild(postCode)

    customersList.appendChild(span)
}

//getting data from firestors
db.collection('customers').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderCustmoers(doc)
    })
})

//saving data to firestore
function datasubmitbtn() {
    applicationForm.addEventListener('submit', (e) => {
        e.preventDefault
    })
    db.collection('customers').add({
        fullname: applicationForm.fullname1.value,
        Address: applicationForm.address1.value
    })

}






/*
    function datasubmitbtn() {
        var database = firebase.database().ref();
        var commentText = maintext.value
        var postcodeText = postCode.value

        database.push().set(commentText)
        database.child('Postcode').push().set(postcodeText)

        //database.child('text').set(maintext)

    }
    */