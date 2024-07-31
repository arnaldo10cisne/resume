let data_location = 'Medellín, Colombia.'
let data_phone = '+57 301 644 0199'
let data_email = 'arnaldo10cisne@gmail.com'
let data_linkedin = 'linkedin.com/in/arnaldo10cisne/'
let data_github = 'github.com/arnaldo10cisne'
let data_website = 'arnaldocisneros.com'

const field_data_location = document.getElementById('data_location')
const field_data_phone = document.getElementById('data_phone')
const field_data_email = document.getElementById('data_email')
const field_data_website = document.getElementById('data_website')
const field_data_linkedin = document.getElementById('data_linkedin')
const field_data_github = document.getElementById('data_github')

const page1 = document.getElementById('page1')
const page2 = document.getElementById('page2')
const chk_skill = document.getElementsByClassName('chk_skill')
const chk_job = document.getElementsByClassName('chk_job')
const chk_proyect = document.getElementsByClassName('chk_proyect')
const chk_label = document.getElementById('chk_label')
const body = document.getElementById('body')
const selectAllChk = document.getElementById('selectAllChk')
const deleteAllChk = document.getElementById('deleteAllChk')
const selectAllChkJob = document.getElementById('selectAllChkJob')
const deleteAllChkJob = document.getElementById('deleteAllChkJob')
const selectAllChkProyect = document.getElementById('selectAllChkProyect')
const deleteAllChkProyect = document.getElementById('deleteAllChkProyect')
const chk_fullAddress = document.getElementById('chk_fullAddress')

const fill_data = () => {
  field_data_location.innerText = data_location
  field_data_phone.innerText = data_phone
  field_data_email.innerText = data_email
  field_data_website.innerText = data_website
  field_data_linkedin.innerText = data_linkedin
  field_data_github.innerText = data_github
}

const printElement = (el) => {
    let pageBackup = document.body.innerHTML
    let printContent = document.getElementById(el).innerHTML
    document.body.innerHTML = printContent
    setTimeout(() => {
        window.print()
        document.body.innerHTML = pageBackup
        chk_initialValue()
    }, 300);
}

const printAll = () => {
    let pageBackup = document.body.innerHTML
    let printContent = document.getElementById('page1').innerHTML + document.getElementById('page2').innerHTML
    document.body.innerHTML = printContent
    setTimeout(() => {
        window.print()
        document.body.innerHTML = pageBackup
        chk_initialValue()
    }, 300);
}

const chk_addListeners = () => {
    for (let index = 0; index < chk_skill.length; index++) {
        const skill = chk_skill[index];
        skill.addEventListener('change', ()=>{
            if (!skill.checked) {
                document.getElementById(`div_${skill.id}`).style.display = 'none'
            } else {
                document.getElementById(`div_${skill.id}`).style.display = 'flex'
            }
        })
    }
    for (let index = 0; index < chk_job.length; index++) {
        const job = chk_job[index];
        job.addEventListener('change', ()=>{
            if (!job.checked) {
                document.getElementById(`div_${job.id}`).style.display = 'none'
            } else {
                document.getElementById(`div_${job.id}`).style.display = 'flex'
            }
        })
    }
    for (let index = 0; index < chk_proyect.length; index++) {
        const proyect = chk_proyect[index];
        proyect.addEventListener('change', ()=>{
            if (!proyect.checked) {
                document.getElementById(`div_${proyect.id}`).style.display = 'none'
            } else {
                document.getElementById(`div_${proyect.id}`).style.display = 'flex'
            }
        })
    }
}

const chk_initialValue = () => {
    for (let index = 0; index < chk_skill.length; index++) {
        const skill = chk_skill[index];
        if (document.getElementById(`div_${skill.id}`).style.display == 'none') {
            skill.checked = false
        } else {
            skill.checked = true
        }
    }
    for (let index = 0; index < chk_job.length; index++) {
        const job = chk_job[index];
        if (document.getElementById(`div_${job.id}`).style.display == 'none') {
            job.checked = false
        } else {
            job.checked = true
        }
    }
    for (let index = 0; index < chk_proyect.length; index++) {
        const proyect = chk_proyect[index];
        if (document.getElementById(`div_${proyect.id}`).style.display == 'none') {
            proyect.checked = false
        } else {
            proyect.checked = true
        }
    }
}

const chk_initialValue_inverse = () => {
    for (let index = 0; index < chk_skill.length; index++) {
        const skill = chk_skill[index];
        if (!skill.checked) {
            document.getElementById(`div_${skill.id}`).style.display = 'none'
        } else {
            document.getElementById(`div_${skill.id}`).style.display = 'flex'
        }
    }
    for (let index = 0; index < chk_job.length; index++) {
        const job = chk_job[index];
        if (!job.checked) {
            document.getElementById(`div_${job.id}`).style.display = 'none'
        } else {
            document.getElementById(`div_${job.id}`).style.display = 'flex'
        }
    }
    for (let index = 0; index < chk_proyect.length; index++) {
        const proyect = chk_proyect[index];
        if (!proyect.checked) {
            document.getElementById(`div_${proyect.id}`).style.display = 'none'
        } else {
            document.getElementById(`div_${proyect.id}`).style.display = 'flex'
        }
    }
}

addEventListener('load', ()=>{
    fill_data()
    chk_initialValue()
    chk_addListeners()
})

body.addEventListener('change', ()=>{
    chk_addListeners()
})


//BUTTONS AND OTHER CHECKS

chk_fullAddress.addEventListener('click', () => {
    if (!chk_fullAddress.checked) {
        document.getElementById('fullAddress').style.display = 'none'
    } else {
        document.getElementById('fullAddress').style.display = 'inline'
    }
})

selectAllChk.addEventListener('click', () => {
    for (let index = 0; index < chk_skill.length; index++) {
        const skill = chk_skill[index];
        skill.checked = true
    }
    chk_initialValue_inverse()
})

deleteAllChk.addEventListener('click', () => {
    for (let index = 0; index < chk_skill.length; index++) {
        const skill = chk_skill[index];
        skill.checked = false
    }
    chk_initialValue_inverse()
})

selectAllChkJob.addEventListener('click', () => {
    for (let index = 0; index < chk_job.length; index++) {
        const job = chk_job[index];
        job.checked = true
    }
    chk_initialValue_inverse()
})

deleteAllChkJob.addEventListener('click', () => {
    for (let index = 0; index < chk_job.length; index++) {
        const job = chk_job[index];
        job.checked = false
    }
    chk_initialValue_inverse()
})

selectAllChkProyect.addEventListener('click', () => {
    for (let index = 0; index < chk_proyect.length; index++) {
        const proyect = chk_proyect[index];
        proyect.checked = true
    }
    chk_initialValue_inverse()
})

deleteAllChkProyect.addEventListener('click', () => {
    for (let index = 0; index < chk_proyect.length; index++) {
        const proyect = chk_proyect[index];
        proyect.checked = false
    }
    chk_initialValue_inverse()
})
