<?php

class Alistamento {
    private $anoNascimento;
    private $diferenca;
    private $correto;
    private $idade;

    function __construct($ano)
    {
        $this->setAnoNascimento($ano);
    }



    function verificarIdade(){
        
        $idade = (date('Y') - $this->getAnoNascimento());
        

        $this->setIdade($idade);
        $this->getIdade();


        if($idade < 18 ){
            return $this->menorIdade();

        } elseif ($idade == 18){
            return $this->certaIdade();
        } else {
            return $this->maiorIdade();
        }
    }
    
    function menorIdade(){
        
        $this->setDiferenca(18 - $this->getIdade());
        
        $this->setCorreto(date('Y') + $this->getDiferenca());

        return "Quem nasceu em ". $this->getAnoNascimento(). " tem ". $this->getIdade(). " anos em ". date('Y').".<br>Ainda faltam ". $this->getDiferenca()." anos para o alistamento.<br>Seu alistamento será em ". $this->getCorreto();
    }

    function certaIdade(){
        return "Quem nasceu em ". $this->getAnoNascimento(). " tem ". $this->getIdade(). " anos em ". date('Y').".<br>Você tem que se alistar esse ano";
        
        
    }

    function maiorIdade(){
        $this->setDiferenca($this->getIdade() - 18);
        
        $this->setCorreto(date('Y') - $this->getDiferenca());

        return "Quem nasceu em ". $this->getAnoNascimento(). " tem ". $this->getIdade(). " anos em ". date('Y').".<br>Você já deveria ter se alistado há ". $this->getDiferenca()."anos.<br>Seu alistamento deveria ser em ". $this->getCorreto();
    }

/**
* Get the value of anoNascimento
*
* @return  mixed
*/
public function getAnoNascimento()
{
return $this->anoNascimento;
}

/**
* Set the value of anoNascimento
*
* @param   mixed  $anoNascimento  
*
* @return  self
*/
public function setAnoNascimento($anoNascimento)
{
$this->anoNascimento = $anoNascimento;
return $this;
}

/**
* Get the value of diferenca
*
* @return  mixed
*/
public function getDiferenca()
{
return $this->diferenca;
}

/**
* Set the value of diferenca
*
* @param   mixed  $diferenca  
*
* @return  self
*/
public function setDiferenca($diferenca)
{
$this->diferenca = $diferenca;
return $this;
}

/**
* Get the value of correto
*
* @return  mixed
*/
public function getCorreto()
{
return $this->correto;
}

/**
* Set the value of correto
*
* @param   mixed  $correto  
*
* @return  self
*/
public function setCorreto($correto)
{
$this->correto = $correto;
return $this;
}

/**
* Get the value of idade
*
* @return  mixed
*/
public function getIdade()
{
return $this->idade;
}

/**
* Set the value of idade
*
* @param   mixed  $idade  
*
* @return  self
*/
public function setIdade($idade)
{
$this->idade = $idade;
return $this;
}
}