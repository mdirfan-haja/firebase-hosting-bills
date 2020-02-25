console.log('connected!!')
const db = firebase.firestore()
const customersList = document.getElementById('customerslist')
const applicationForm = document.getElementById('application1')
    //const submitForm = document.getElementById('submitBtn1')
    //var submitBtn1 = document.getElementById('submitBtn1')
    //var maintext = document.getElementById('maintext')
    //var postCode = document.getElementById('postcodeText')
    //var homeAdderss = document.getElementById('addressText')


// this function render the data from server to website
function renderCustmoers(doc) {
    // tr=table row and th = 
    let row = document.createElement('tr')
    let fullname = document.createElement('td')
    let address = document.createElement('td')
    let address2 = document.createElement('td')
    let address3 = document.createElement('td')
    let postCode = document.createElement('td')
        //let newsPaperSun = document.createElement('td')
    let cross = document.createElement('button')

    // data-id is unique id from firestore!

    row.setAttribute('data-id', doc.id)
    fullname.textContent = doc.data().fullname
    address.textContent = doc.data().Address
    address2.textContent = doc.data().streetname
    address3.textContent = doc.data().cityname
    postCode.textContent = doc.data().postcode
        // newsPaperSun.textContent = doc.data().sun
    cross.textContent = 'x'

    row.appendChild(fullname)
    row.appendChild(address)
    row.appendChild(address2)
    row.appendChild(address3)
    row.appendChild(postCode)
        //row.appendChild(newsPaperSun)
    row.appendChild(cross)


    // tp delete data in firestore cloud
    customersList.appendChild(row)
    cross.addEventListener('click', (e) => {
        e.stopPropagation()
        let id = e.target.parentElement.getAttribute('data-id')
        db.collection('customers').doc(id).delete()
    })
}

//getting data from firestors
// ('postcode', '>', 'b2') '>' choose greather then to search 
//.where and .orderBy to locat name and order be alphabat 

/*
db.collection('customers').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderCustmoers(doc)
    })
})
*/

//saving data to firestore
function datasubmitbtn() {
    applicationForm.addEventListener('submit', (e) => {
        //preventDefault prevent the link from follow the url
        e.preventDefault
    })
    db.collection('customers').add({
        //fullname: Address: postcode: its from firebase cloud
        fullname: applicationForm.fullname1.value,
        Address: applicationForm.address1.value,
        postcode: applicationForm.postcodeText.value,
        streetname: applicationForm.address2.value,
        cityname: applicationForm.address3.value
            //sun: applicationForm.sun1.value
    })

    // empty the value string in textbox
    applicationForm.fullname1.value = ''
    applicationForm.address1.value = ''
    applicationForm.postcodeText.value = ''
    applicationForm.address2.value = ''
    applicationForm.address3.value = ''
        // applicationForm.sun1.value = ''

}

db.collection('customers').orderBy('streetname').onSnapshot(snapshot => {
    let changes = snapshot.docChanges()

})






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