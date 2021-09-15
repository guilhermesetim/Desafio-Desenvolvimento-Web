<?php

class RegraNegocio {
    // attrbuits
    private $player;
    private $comp;
    private $result;
    public $emoj;

    function __construct($opcao)
    {
        $this->setComp(rand(1,3));
        $this->setPlayer($opcao);
        $this->verificar();
    }

    function verificar(){
        if($this->getPlayer() == $this->getComp()){
            $this->setResult('Empate');


        } else{
            switch ($this->getPlayer()){
                case 1:
                    $this->setResult($this->getComp() == 3 ? 'Você ganhou':'Ganhei');
                    break;
                
                case 2:
                    $this->setResult($this->getComp() == 1 ? 'Você ganhou':'Ganhei');
                    break;
                    
                case 3:
                    $this->setResult($this->getComp() == 2 ? 'Você ganhou':'Ganhei');
                    break;
            }

        }
    }



/**
* Get the value of player
*
* @return  mixed
*/
public function getPlayer()
{
return $this->player;
}

/**
* Set the value of player
*
* @param   mixed  $player  
*
* @return  self
*/
public function setPlayer($player)
{
$this->player = $player;
return $this;
}

/**
* Get the value of comp
*
* @return  mixed
*/
public function getComp()
{
return $this->comp;
}

/**
* Set the value of comp
*
* @param   mixed  $comp  
*
* @return  self
*/
public function setComp($comp)
{
$this->comp = $comp;

    switch($comp){
        case 1:
            $this->emoj = '&#x270A';
            break;
        case 2:
            $this->emoj = '&#x1F590';
            break;
        case 3;
            $this->emoj = '&#x270C';
            break;
    }

}

/**
* Get the value of result
*
* @return  mixed
*/
public function getResult()
{
return $this->result;
}

/**
* Set the value of result
*
* @param   mixed  $result  
*
* @return  self
*/
public function setResult(string $result)
{
$this->result = $result;
return $this;
}
}