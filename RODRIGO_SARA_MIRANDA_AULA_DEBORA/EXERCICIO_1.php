<?php
$val = -69; // Valor de entrada
$resultado = "";

if($val>0){
   $resultado = "Valor Positivo";
}elseif($val <0){
   $resultado = "Valor Negativo";
}else{
   $resultado = "Igual a Zero";
}

echo $resultado;
?>