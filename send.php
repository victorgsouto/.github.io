<?php 
error_reporting(E_ALL ^ E_NOTICE); // hide all basic notices from PHP

//If the form is submitted
if(isset($_POST['submitted'])) {
    
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $subjectContent = trim($_POST['subject']);
    $message = trim($_POST['message']);
		
	// upon no failure errors let's email now!
	if(!isset($hasError)) {
		
		$emailTo = 'victorgusta@gmail.com';
        $subject = 'Hei, you got message from '.$name;
		$sendCopy = trim($_POST['sendCopy']);
		$body = "Subject : $subjectContent \nName : $name \nEmail : $email \nMessage : $message";
		$headers = 'From: ' .' <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;

		mail($emailTo, $subject, $body, $headers);;
        
        // set our boolean completion value to TRUE
		$emailSent = true;
	}
}
?>