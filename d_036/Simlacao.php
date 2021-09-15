<?php

class Simulacao {
    // attributes
    private $valorCasa;
    private $salarioComprador;
    private $anosFinanciamento;
    private $resultado;
    private $mensalidade;
    


    function simular(){
        $mensalidade = $this->getValorCasa() / ($this->getAnosFinanciamento()*12);
        $salario30 = $this->getSalarioComprador()*0.3;
        $this->setMensalidade($mensalidade);
        

        if($salario30 > $mensalidade){
            $this->setResultado('Aprovado');
        } else {
            $this->setResultado('Negado');
        }
    }

   
    

/**
* Get the value of valorCasa
*
* @return  mixed
*/
public function getValorCasa()
{
return $this->valorCasa;
}

/**
* Set the value of valorCasa
*
* @param   mixed  $valorCasa  
*
* @return  self
*/
public function setValorCasa(float $valorCasa)
{
$this->valorCasa = $valorCasa;

}

/**
* Get the value of salarioComprador
*
* @return  mixed
*/
public function getSalarioComprador()
{
return $this->salarioComprador;
}

/**
* Set the value of salarioComprador
*
* @param   mixed  $salarioComprador  
*
* @return  self
*/
public function setSalarioComprador($salarioComprador)
{
$this->salarioComprador = $salarioComprador;

}

/**
* Get the value of anosFinanciamento
*
* @return  mixed
*/
public function getAnosFinanciamento()
{
return $this->anosFinanciamento;
}

/**
* Set the value of anosFinanciamento
*
* @param   mixed  $anosFinanciamento  
*
* @return  self
*/
public function setAnosFinanciamento($anosFinanciamento)
{
$this->anosFinanciamento = $anosFinanciamento;

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
public function setResultado($resultado)
{
$this->resultado = $resultado;

}

/**
* Get the value of mensalidade
*
* @return  mixed
*/
public function getMensalidade()
{
return $this->mensalidade;
}

/**
* Set the value of mensalidade
*
* @param   mixed  $mensalidade  
*
* @return  self
*/
public function setMensalidade($mensalidade)
{
$this->mensalidade = $mensalidade;
return $this;
}
}