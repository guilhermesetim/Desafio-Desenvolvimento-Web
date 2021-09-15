<?php

class Analise {
    //atributs
    private $resultado;

    function analisar($val){
        if ($val[0]<$val[1]+$val[2] && $val[1]<$val[0]+$val[2] && $val[2]<$val[0]+$val[1]){
            $this->setResultado(true);
        } else {
            $this->setResultado(false);
        }
    }
    

/**
* Get the value of resultado
*
* @return  mixed
*/
public function getResultado()
{
return $this->resultado;
}

/**
* Set the value of resultado
*
* @param   mixed  $resultado  
*
* @return  self
*/
public function setResultado(string $resultado)
{
$this->resultado = $resultado;
return $this;
}
}