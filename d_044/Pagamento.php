<?php

class Pagamento {
    // attributes
    private $valorPrev;
    private $formaPagamento;
    private $valorNext;

    function __construct($valor,$formaPagamento)
    {
        $this->setFormaPagamento($formaPagamento);
        $this->setValorPrev($valor);
    }


    function calcularValorFinal(){
        switch($this->getFormaPagamento()){

            case 1:
                $desconto =  $this->getValorPrev()*0.1;
                $this->setValorNext($this->getValorPrev() - $desconto);
                break;

            case 2:
                $desconto = $this->getValorPrev()*0.05;
                $this->setValorNext($this->getValorPrev() - $desconto);
                break;

            case 3:
                $this->setValorNext($this->getValorPrev());
                break;

            case 4:
                $juros = $this->getValorPrev()*0.2;
                $this->setValorNext($this->getValorPrev() + $juros);
                break;
        }



    }




/**
* Get the value of valorPrev
*
* @return  mixed
*/
public function getValorPrev()
{
return $this->valorPrev;
}

/**
* Set the value of valorPrev
*
* @param   mixed  $valorPrev  
*
* @return  self
*/
public function setValorPrev(float $valorPrev)
{
$this->valorPrev = $valorPrev;
return $this;
}

/**
* Get the value of formaPagamento
*
* @return  mixed
*/
public function getFormaPagamento()
{
return $this->formaPagamento;
}

/**
* Set the value of formaPagamento
*
* @param   mixed  $formaPagamento  
*
* @return  self
*/
public function setFormaPagamento($formaPagamento)
{
$this->formaPagamento = $formaPagamento;
return $this;
}

/**
* Get the value of valorNext
*
* @return  mixed
*/
public function getValorNext()
{
return $this->valorNext;
}

/**
* Set the value of valorNext
*
* @param   mixed  $valorNext  
*
* @return  self
*/
public function setValorNext(float $valorNext)
{
$this->valorNext = $valorNext;
return $this;
}
}