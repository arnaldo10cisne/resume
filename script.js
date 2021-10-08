const page1 = document.getElementById('page1')
const page2 = document.getElementById('page2')

const printElement = (el) => {
    let pageBackup = document.body.innerHTML
    let printContent = document.getElementById(el).innerHTML
    document.body.innerHTML = printContent
    window.print()
    document.body.innerHTML = pageBackup
}

const printAll = () => {
    let pageBackup = document.body.innerHTML
    let printContent = document.getElementById('page1').innerHTML + document.getElementById('page2').innerHTML
    document.body.innerHTML = printContent
    window.print()
    document.body.innerHTML = pageBackup
}