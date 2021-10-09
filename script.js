const page1 = document.getElementById('page1')
const page2 = document.getElementById('page2')
const chk_skill = document.getElementsByClassName('chk_skill')
const chk_label = document.getElementById('chk_label')
const body = document.getElementById('body')
const selectAllChk = document.getElementById('selectAllChk')
const deleteAllChk = document.getElementById('deleteAllChk')

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
}

addEventListener('load', ()=>{
    chk_initialValue()
    chk_addListeners()
})

body.addEventListener('change', ()=>{
    
    chk_addListeners()
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