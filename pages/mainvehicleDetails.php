<?php
include_once 'header.php';

?>


<script type="module" src="../scripts/mainvehicleDetails.js"></script> 
<link rel="stylesheet" type="text/css" href="../styles/mainvehicleDetails.css">

</header>
<body>
    <button type="submit" class="btn btn-primary" id="IncomingCar">Add New Incoming Car</button>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Registered Vehicle</th>
                <th scope="col">Color</th>
                <th scope="col">Slot</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
    </table>
</body>