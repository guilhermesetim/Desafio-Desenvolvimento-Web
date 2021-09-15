<?php

class StatusAluno {
    // atributes
    private $media;
    private $status;

    function __construct($n1,$n2)
    {
        $this->setMedia($n1,$n2);
    }

    function avaliar(){
        if($this->getMedia() < 5) {
            $this->setStatus('Reprovado');
        } elseif($this->getMedia() < 7){
            $this->setStatus('Recuperação');
        } else {
            $this->setStatus('Aprovado');
        }
    }

/**
* Get the value of media
*
* @return  mixed
*/
public function getMedia()
{
return $this->media;
}

/**
* Set the value of media
*
* @param   mixed  $media  
*
* @return  self
*/
public function setMedia($n1,$n2)
{
$this->media = ($n1+$n2)/2;
}

/**
* Get the value of status
*
* @return  mixed
*/
public function getStatus()
{
return $this->status;
}

/**
* Set the value of status
*
* @param   mixed  $status  
*
* @return  self
*/
public function setStatus($status)
{
$this->status = $status;
}
}