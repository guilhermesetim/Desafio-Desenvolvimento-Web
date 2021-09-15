<?php

class Imc {
    // attributes
    private $altura;
    private $peso;
    private $categoria;

    function __construct(float $altura,float $peso)
    {
        $this->setAltura($altura);
        $this->setPeso($peso);
    }

    function classificar(){
        $imc = ($this->getPeso() / (pow($this->getAltura(),2)));

        if($imc < 18.5){
            $this->setCategoria('Abaixo do peso');
        } elseif ($imc < 25){
            $this->setCategoria('Peso ideal');
        } elseif ($imc < 30){
            $this->setCategoria('Sobrepeso');
        } elseif ($imc < 40){
            $this->setCategoria('Obesidade');
        } else {
            $this->setCategoria('Obesidade mórbita');
        }
    }

/**
* Get the value of altura
*
* @return  mixed
*/
public function getAltura()
{
return $this->altura;
}

/**
* Set the value of altura
*
* @param   mixed  $altura  
*
* @return  self
*/
public function setAltura($altura)
{
$this->altura = $altura;

}

/**
* Get the value of peso
*
* @return  mixed
*/
public function getPeso()
{
return $this->peso;
}

/**
* Set the value of peso
*
* @param   mixed  $peso  
*
* @return  self
*/
public function setPeso($peso)
{
$this->peso = $peso;

}

/**
* Get the value of categoria
*
* @return  mixed
*/
public function getCategoria()
{
return $this->categoria;
}

/**
* Set the value of categoria
*
* @param   mixed  $categoria  
*
* @return  self
*/
public function setCategoria($categoria)
{
$this->categoria = $categoria;

}
}