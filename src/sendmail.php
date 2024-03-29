<?php
  
  // Файлы phpmailer
  require './libs/PHPMailer/src/PHPMailer.php';
  require './libs/PHPMailer/src/SMTP.php';
  require './libs/PHPMailer/src/Exception.php';

  // Переменные, которые отправляет пользователь
  $name = $_POST['name'];
  $country = $_POST['country'];
  $email = $_POST['email'];
  $tel = $_POST['tel'];
  $message = $_POST['message'];

  // Формирование самого письма
  $title = "Landing Prime Car";
  $body = "
  <h2>Новое письмо от пользователя $name</h2>
  <b>Имя:</b> $name<br>
  <b>Страна проживания:</b> $country<br>
  <b>Почта:</b> $email<br>
  <b>Телефон:</b> $tel<br>
  <b>Сообщение:</b><br>$message
  ";

  // Настройки PHPMailer
  $mail = new PHPMailer\PHPMailer\PHPMailer();
  try {
      $mail->isSMTP();   
      $mail->CharSet = "UTF-8";
      $mail->SMTPAuth   = true;
      //$mail->SMTPDebug = 2;
      $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

      // Настройки вашей почты
      $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
      $mail->Username   = 'landing.test2023@gmail.com'; // Логин на почте
      $mail->Password   = 'kbslifkxcdfvhmrq'; // Пароль на почте
      $mail->SMTPSecure = 'ssl';
      $mail->Port       = 465;
      $mail->setFrom($email, $name); // Адрес самой почты и имя отправителя

      // Получатель письма
      $mail->addAddress('landing.test2023@gmail.com');  

      // Отправка сообщения
      $mail->isHTML(true);
      $mail->Subject = $title;
      $mail->Body = $body;    

      // Проверяем отправку сообщения
      if ($mail->send()) {$result = "success";} 
      else {$result = "error";}

      } catch (Exception $e) {
          $result = "error";
          $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
      }

  // Отображение результата
  echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
?>
