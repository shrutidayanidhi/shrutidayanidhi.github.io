
const createSlot = (e)=>{
    let slots = '';
    e.preventDefault();
    slots = document.getElementById('SlotNumber').value
    document.forms[0].reset();

    localStorage.setItem('slots', slots);
    window.location.href = '../pages/mainvehicleDetails.php'
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('createSlot').addEventListener('click', createSlot);
})