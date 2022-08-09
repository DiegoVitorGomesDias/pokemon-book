<html>
    <head>
        <title>curso PHP Progressive</title>
</head>
    <body>
          <form action='home.php' method="get">
    Nota 1: <input type="text"
         name="num1"><br>
    Nota 2 <input type="text"
         name="num2"><br>
    Nota 3: <"input type=text"
          name= <"num3"><br>
    <input type="submit">
</form>

<?php
$num1 =$_GET ['NUM1'];
$num2 =$_GET ['NUM2'];
$num3 =$_GET ['NUM3'];

$media = ($num1 + $num2 + $num3)/3;

    echo "Média>: $media";
         ?>
    </body>
</html>
