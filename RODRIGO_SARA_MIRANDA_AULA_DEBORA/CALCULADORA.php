<!DOCTYPE HTML>
<html lang = "pt-br">
    <head>
        <title>Exemplo</title>
        <meta charset = "UTF-8">
    <head>
    <body>
        <form action="" method="post" >
            Primeiro Numero: <input name="num1" type="text"><br>
            Segundo numero: <input name="num2" type="text"><br>
            <input type="submit" name="operação" value="+">
            <input type="submit" name="operação" value="-">
            <input type="submit" name="operação" value="*">
            <input type="submit" name="operação" value="/">
</form>
           
<?php
if (isset ($_POST['operação'])){
    $a = $_POST['num1'];
    $b = $_POST['num2'];
    $op = $_POST['operação'];

    if( !empty($op) ) {
        if($op == '+')
         $c = $a + $b;
    else if($op == '-')
         $c = $a - $b;
    else if($op =='*')
         $c = $a*$b;
    else
         $c = $a/$b;

    echo "o resultado e: $c";
    }}
    
    ?>
    </body>
    </html>


            
