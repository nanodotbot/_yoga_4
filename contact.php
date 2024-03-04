<?php 
$data = file_get_contents('php://input');
$data = json_decode($data);

$name = $data->name;
$mail = $data->mail;
$phone = $data->phone;
$message = $data->message;
$message = htmlspecialchars($message);
$message = preg_replace('/\v+|\\\r\\\n/Ui','<br>',$message);

$mail_message = 'name: ' . $name . '- mail: ' . $mail . '- phone: ' . $phone . '- message: ' . wordwrap($message, 70);
mail('info@nano.sx, angi@angi.yoga', 'angi.yoga', $mail_message);

$data = '{
    "message": "Thanks for your message! I will get in touch with you as soon as possible."
}';
echo $data;
?>