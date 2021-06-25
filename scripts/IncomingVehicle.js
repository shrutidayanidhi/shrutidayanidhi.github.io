
const checkslot = ()=>{
    let slotnum = [];
    let snum = localStorage.getItem('slots') // need to use snum to check the value is not exciding this
    let vs = JSON.parse(localStorage.getItem('vSlots'))
    // console.log(vs.length)

    if(vs != null){
        if(vs.length < snum){
            vs.forEach(e => {
                slotnum.push(e.slot)
            });
            for(let i=1; i <= slotnum.length+1; i++){
                if(!slotnum.includes(i)){
                    return i
                }
            }
        } else {
            alert('capicity is only '+snum)
        }
    } else {
        return 1
    }
}

let slots = []
const issueTicket = async (ev)=>{
    ev.preventDefault();
    let vs = JSON.parse(localStorage.getItem('vSlots'))
    console.log(vs)
    if(vs != null){
        slots = vs
    }
    let slotnum = checkslot()

    let slot = {
        id: Date.now(),
        slot: slotnum,
        vn: document.getElementById('vehicleNumber').value,
        color: document.getElementById('vehiclecolor').value
    }
    console.log(slot)
    console.log(slotnum)
    if(slotnum != null || slotnum != undefined){
        slots.push(slot)
        localStorage.setItem('vSlots', JSON.stringify(slots))
    }
    document.forms[0].reset();
    // console.log(slots)
    window.location.href = '../pages/mainvehicleDetails.html'
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('issueTicket').addEventListener('click', issueTicket)

    document.getElementById('cancel').addEventListener('click', (e)=>{
        e.preventDefault();
        document.forms[0].reset();
    })
})