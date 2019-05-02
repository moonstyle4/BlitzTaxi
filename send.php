<?
if (array_key_exists('about_us_and_callback_form_phone', $_POST)) {
   $to = "mironezes@gmail.com"; // Ваша почта
   $subject = 'Такси Блиц - заявка на обратный звонок';
   $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
   
   $message = "<table rules='all'  style='width:250px; margin-bottom: 25px;' colspan='10'>
   <tr>
   		<th style='background-color: #f1f1f1; text-align:left;padding: 8px;'>Имя клиента:</th>
         <th style='background-color: #f1f1f1; text-align:left;padding: 8px;'>Телефон:</th>
   </tr>
   <tr>
         <td style='background-color: #f1f1f1; text-align:left;padding: 8px;'>".$_POST['about_us_and_callback_form_phone']."</td>
   		<td style='background-color: #f1f1f1; text-align:left;padding: 8px;'>".$_POST['about_us_and_callback_form_email']."</td>
   </tr>
   </table>";
  
   $headers = 'Content-type: text/html; charset="utf-8"';
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
   
   mail($to, $subject, $message, $headers);
}


?>