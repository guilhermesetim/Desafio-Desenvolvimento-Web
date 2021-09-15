<?php

class Aumento {
    // atributes
    public $sal;
    public $aum;


    public function aumentar($s){
        $this->setSal($s);

        if($s > 1250){
            $porcentagem = $this->getSal()*0.1;
            $this->setAum($this->getSal()+$porcentagem);
            return $this->getSal()+$porcentagem;

        } else {
            $porcentagem = $this->getSal()*0.15;
            $this->setAum($this->getSal()+$porcentagem);
            return $this->getSal()+$porcentagem;
        }
    }

    function getSal(){
        return $this->sal;
    }
    function setSal(float $s){
        $this->sal = $s;
    }
    function getAum(){
        return $this->aum;
    }
    function setAum(float $a){
        $this->aum = $a;
    }
}