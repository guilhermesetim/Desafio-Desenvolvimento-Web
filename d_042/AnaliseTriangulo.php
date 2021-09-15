<?php

class AnaliseTriangulo {
    // attributes
    private $segmento;
    private $validade;
    private $tipo;


    function __construct($segmentos)
    {
        $this->setSegmento($segmentos);
    }



    function validarTriangulo(){
        if($this->segmento[1] < $this->segmento[2]+ $this->segmento[3] && 
        $this->segmento [2] < $this->segmento[1]+$this->segmento[3] &&
        $this->segmento[3] < $this->segmento[1] + $this-> segmento[2]){

            $this->setValidade('podem');
            $this->tipoTriangulo();


        } else {
            $this->setValidade('não podem');
            $this->setTipo('');
        }
    }

    function tipoTriangulo(){
        if($this->segmento[1] == $this->segmento[2] && 
        $this->segmento[1] == $this->segmento[3]){

            $this->setTipo(' equilátero');


        } elseif ($this->segmento[1] != $this->segmento[2] &&
        $this->segmento[1] != $this->segmento[3] &&
        $this->segmento[2] != $this->segmento[3]){

            $this->setTipo(' escaleno');

        } else {
            $this->setTipo(' isóceles');
        }
    }

    

/**
* Get the value of validade
*
* @return  mixed
*/
public function getValidade()
{
return $this->validade;
}

/**
* Set the value of validade
*
* @param   mixed  $validade  
*
* @return  self
*/
public function setValidade($validade)
{
$this->validade = $validade;
return $this;
}

/**
* Get the value of tipo
*
* @return  mixed
*/
public function getTipo()
{
return $this->tipo;
}

/**
* Set the value of tipo
*
* @param   mixed  $tipo  
*
* @return  self
*/
public function setTipo($tipo)
{
$this->tipo = $tipo;

}

/**
* Get the value of segmento
*
* @return  mixed
*/
public function getSegmento()
{
return $this->segmento;
}

/**
* Set the value of segmento
*
* @param   mixed  $segmento  
*
* @return  self
*/
public function setSegmento($segmento)
{
$this->segmento = $segmento;
return $this;
}
}