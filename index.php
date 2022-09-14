<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Contact Us | BlogDesire</title>
	<link rel="stylesheet" href="./style.css">
</head>
<body>
	<div id="wrapper">
		<form class="form" method="POST">
			<h2>Contact US</h2>
			<input type="text" name="name" placeholder="Name">
			<input type="email" name="email" placeholder="Email Address">
			<input type="number" name="phone" placeholder="Phone">
			<input type="text" name="subject" placeholder="Subject">
			<textarea name="body" placeholder="Type your message here..."></textarea>
			<button type="submit" name="submit">Submit</button>
		</form>
	</div>
</body>
</html>



<?php
if(isset($_POST['submit'])){
    $to = "4d.x.art@gmail.com";



    $name = $_POST['name'];
    $email= $_POST['email'];
    $phone= $_POST['phone'];
    $subject= $_POST['subject'];
    $body= $_POST['body'];
    $headers = 'From: '.$email . "\r\n";


    $body = "name : ".$name. "\r\n" .
    		"Phone : ".$phone. "\r\n" .
    		"Message : " . $body;
    if(mail($to, $subject, $body , $headers)){
        echo "Mail Sent!";
    }else{
         echo "Failed To Send Mail";
    }
}

?>
