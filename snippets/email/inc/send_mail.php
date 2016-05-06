<?php
  if($_POST['file_save'] == '1') {
    
    //save file before send
    //require the folder "../uploads" with 777 permissions
    require '../inc/class.phpmailer.php';

    $name = htmlspecialchars($_POST['name']);
    $msg = htmlspecialchars($_POST['msg']);

    $email_content = '';
    if($name) $email_content .= 'Name: ' . $name . "<br>";
    if($msg) $email_content .= 'Message: ' . $msg . "<br>";
    if($email_content == '') return false;

    $mail = new PHPMailer;
    $mail->CharSet = 'UTF-8';
    $mail->setFrom('mail@ideus.biz', 'iDeus');
    $mail->addAddress('to@email.com', 'Recipient');
    $mail->Subject = 'Snippet form subject';
    $mail->msgHTML($email_content);
    foreach($_FILES as $file) {
      $filePath = '../uploads/' . $file['name'];
      move_uploaded_file($file['tmp_name'], $filePath);
      $mail->addAttachment($filePath);
    }
    $mail->send();
    
  } else if($_POST['file_save'] == '0') {
    
    //send file
    require '../inc/class.phpmailer.php';

    $name = htmlspecialchars($_POST['name']);
    $msg = htmlspecialchars($_POST['msg']);

    $email_content = '';
    if($name) $email_content .= 'Name: ' . $name . "<br>";
    if($msg) $email_content .= 'Message: ' . $msg . "<br>";
    if($email_content == '') return false;

    $mail = new PHPMailer;
    $mail->CharSet = 'UTF-8';
    $mail->setFrom('mail@ideus.biz', 'iDeus');
    $mail->addAddress('to@email.com', 'Recipient');
    $mail->Subject = 'Snippet form subject';
    $mail->msgHTML($email_content);
    foreach($_FILES as $file) {
      $mail->addStringAttachment(file_get_contents($file['tmp_name']), $file['name']);
    }
    $mail->send();
    
  } else {
    //form without attachment
    require '../inc/class.simple_mail.php';

    $name = htmlspecialchars($_POST['name']);
    $msg = htmlspecialchars($_POST['msg']);

    $email_content = '';
    if($name) $email_content .= 'Name: ' . $name . "<br>";
    if($msg) $email_content .= 'Message: ' . $msg . "<br>";
    if($email_content == '') return false;

    /* @var SimpleMail $mail */
    $mail = new SimpleMail();
    $mail->setTo('to@email.com')
        ->setSubject('Snippet form subject')
        ->setFrom('mail@ideus.biz', 'iDeus')
        ->addGenericHeader('Content-Type', 'text/html; charset="utf-8"')
        ->addGenericHeader('X-Mailer', 'PHP/' . phpversion())
        ->setMessage( $email_content )
        ->setWrap(100);
    $send = $mail->send();
  }
?>