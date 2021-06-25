<?php
include_once 'header.php';
?>
<script type="module" src="../scripts/slotbooking.js"></script> 
<link rel="stylesheet" type="text/css" href="../styles/slotbooking.css">

</header>
<body>
    <form class="mainform">
        <div class="form-group">
            <label for="formGroupExampleInput">Enter the number of slots</label>
            <input type="text" class="form-control" id="SlotNumber" placeholder="Enter Number">
        </div>
        <button type="submit" class="btn btn-primary" id="createSlot">Create Slots</button>
    </form>
</body>