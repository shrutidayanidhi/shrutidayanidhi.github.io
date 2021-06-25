const creatTable = ()=>{
    let slotsv = JSON.parse(localStorage.getItem('vSlots'))

    for(let i=0 ; i<slotsv.length ; i++){
        let val = i+1;
        const temp = [
            '<tr>',
            '<th scope="row">'+val+'</th>',
            '<td>{{vn}}</td>',
            '<td>{{color}}</td>',
            '<td>{{slot}}</td>',
            '<td><button type="submit" class="btn btn-primary mainbut" id="deleteBtn" data-id="{{slot}}">Delete</button></td>',
            '</tr>',
        ].join("\n");
    
        let htmlcontent = Mustache.render(temp, slotsv[i]);
        $('#tbody').append(htmlcontent)
    }
}

const indexof = (e, id)=>{
    for(let i=0 ; i<e.length ; i++){
        if(id == e[i].slot){
            return i
        }
    }
}

const deleterow = (e)=>{
    let vs = JSON.parse(localStorage.getItem('vSlots'))
    let id = e
    
    const index = indexof(vs, id)
    if(index > -1) {
        vs.splice(index, 1)
    }

    localStorage.setItem('vSlots', JSON.stringify(vs))
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('IncomingCar').addEventListener('click', ()=>{
        window.location.href = '../pages/IncomingVehicle.html'
    })
    creatTable()
    
    $(document).on('click', '#deleteBtn', function() {
        let id = $(this).parent().find('button').attr('data-id')
        deleterow(id)
    })
})