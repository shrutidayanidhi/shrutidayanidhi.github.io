<?php
include_once 'header.php';

?>

<script type="module" src="../scripts/IncomingVehicle.js"></script> 
<link rel="stylesheet" type="text/css" href="../styles/IncomingVehicle.css">

</header>
<body>
    <form class="mainform">
        <div class="form-group">
            <label for="formGroupExampleInput">Vehicle Number</label>
            <input type="text" class="form-control" id="vehicleNumber" placeholder="Please enter your vehicle number eg: KA01AA0001">
        </div>
        <div class="form-group">
            <label for="exampleFormControlSelect1">Vehicle Colour</label>
            <select class="form-control" id="vehiclecolor">
            <option>Black</option>
            <option>White</option>
            <option>red</option>
            <option>Blue</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary" id="issueTicket">Submit</button>
        <button type="submit" class="btn btn-light" id="cancel">Cancel</button>
    </form>
</body>